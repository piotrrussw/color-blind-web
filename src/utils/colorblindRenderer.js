import * as THREE from 'three';

import { FragmentShader, VertexShader } from '~/utils/shaders';

import { getColorModes } from '~/utils/colorModes';
import { getMediaConstraints } from '~/utils/media';
import { getColorName } from '~/utils/colorName';

class ColorblindRenderer {
    constructor(video) {
        // eslint-disable-next-line no-undef
        this.listeners = new Map();
        this.video = video;
    }

    render(colorVision, isFrontCamera) {
        this.colorVision = colorVision;
        this.intensity = 0;
        this.initWebcamInput(isFrontCamera);
        this.init();
        this.renderer = new THREE.WebGLRenderer({ antialias: true });

        const canvas = this.renderer.domElement;
        const { width, height } = document.body.getBoundingClientRect();
        this.renderer.setSize(width, height);

        document.getElementById('webgl-container').appendChild(canvas);
    }

    animate() {
        this.setColorName();
        this.animationInstance = requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }

    init() {
        this.initCamera();
        this.initScene();
        this.initTexture();
        this.initMesh();
    }

    destroy() {
        cancelAnimationFrame(this.animationInstance);
        this.renderer.clear(true, true, true);

        if (document.querySelector('canvas')) {
            document.querySelector('canvas').remove();
        }
    }

    handleResize() {
        const newAspect = window.innerWidth / window.innerHeight;

        // TODO: better resize handling
        this.camera.fov = Math.max(
            this.camera.fov,
            60
            // Math.max(50, Math.min(this.camera.fov * (1 / newAspect), 180))
        );

        this.camera.aspect = newAspect;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    initWebcamInput(isFrontCamera) {
        const constraints = getMediaConstraints(isFrontCamera);

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                this.stream = stream;
                this.video.srcObject = stream;
                this.video.play();
            });
        }
    }

    updateIntensity(intensity) {
        const { r, g, b } = getColorModes(intensity, this.colorVision);

        this.intensity = intensity;
        this.material.uniforms.r.value = new THREE.Vector3(r[0], r[1], r[2]);
        this.material.uniforms.g.value = new THREE.Vector3(g[0], g[1], g[2]);
        this.material.uniforms.b.value = new THREE.Vector3(b[0], b[1], b[2]);
    }

    flipCamera(type) {
        if (!this.stream) {
            return false;
        }

        this.stream.getTracks().forEach((t) => t.stop());

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const constraints = getMediaConstraints(type === 1);

            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                this.stream = stream;
                this.video.srcObject = stream;
                this.video.play();
            });
        }
    }

    initCamera() {
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.01,
            10
        );
        this.camera.position.z = 1;
    }

    initScene() {
        this.scene = new THREE.Scene();
    }

    initTexture() {
        this.texture = new THREE.VideoTexture(this.video);
        this.texture.minFilter = THREE.LinearFilter;
        this.texture.magFilter = THREE.LinearFilter;
        this.texture.format = THREE.RGBFormat;
    }

    initMesh() {
        this.getMaterial();

        const geometry = new THREE.PlaneBufferGeometry();
        const mesh = new THREE.Mesh(geometry, this.material);

        this.scene.add(mesh);
    }

    getMaterial() {
        const { r, g, b } = getColorModes(this.intensity, this.colorVision);
        const uniforms = {
            map: { value: undefined },
            r: { value: new THREE.Vector3(r[0], r[1], r[2]) },
            g: { value: new THREE.Vector3(g[0], g[1], g[2]) },
            b: { value: new THREE.Vector3(b[0], b[1], b[2]) },
        };

        this.material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: VertexShader,
            fragmentShader: FragmentShader,
        });

        this.material.uniforms.map.value = this.texture;
        this.material.transparent = true;
    }

    rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255) throw 'Invalid color component';
        return ((r << 16) | (g << 8) | b).toString(16);
    }

    setColorName() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const width = this.video.videoWidth;
        const height = this.video.videoHeight;

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(this.video, 0, 0);

        const { data } = ctx.getImageData(width / 2, height / 2, 1, 1);
        const [r, g, b] = data;

        const hex = '#' + ('000000' + this.rgbToHex(r, g, b)).slice(-6);
        const name = getColorName(hex);

        this.trigger('color-name', { hex, name });
    }

    trigger(label, ...args) {
        const task = (inListener, label, ...args) => {
            const listeners = inListener.get(label);

            if (listeners && listeners.length) {
                listeners.forEach((listener) => listener(...args));
            }
        };

        task(this.listeners, label, ...args);
    }

    on(label, callback) {
        this.listeners.has(label) || this.listeners.set(label, []);
        this.listeners.get(label).push(callback);
    }
}

export default ColorblindRenderer;
