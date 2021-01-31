import * as THREE from 'three';
import { FragmentShader, VertexShader } from '~/utils/shaders';
import { colorModes } from '~/utils/colorModes';

const cameraConstraints = {
    video: {
        width: {
            min: 1280,
            ideal: 1920,
            max: 2560,
        },
        height: {
            min: 720,
            ideal: 1080,
            max: 1440,
        },
        facingMode: 'user',
    },
};

class ColorblindRenderer {
    constructor(video) {
        this.video = video;
    }

    render(colorVision) {
        this.colorVision = colorVision;
        this.init();
        // this.renderer = new THREE.WebGLRenderer({ antialias: true });
        //
        // const canvas = this.renderer.domElement;
        // const { width, height } = document.body.getBoundingClientRect();
        // this.renderer.setSize(width, height);
        //
        // document.getElementById('webgl-container').appendChild(canvas);
    }

    animate() {
        this.animationInstance = requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }

    init() {
        this.initWebcamInput();
        // this.initCamera();
        // this.initScene();
        // this.initTexture();
        // this.initMesh();
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

    initWebcamInput() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia(cameraConstraints).then((stream) => {
                this.stream = stream;
                this.video.srcObject = stream;
                this.video.play();
            });
        }
    }

    flipCamera(type) {
        if (!this.stream) {
            return false;
        }

        this.stream.getTracks().forEach((t) => t.stop());

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const facingMode = type === 1 ? 'user' : 'environment';
            const constraints = { ...cameraConstraints };
            constraints.video.facingMode = facingMode;

            navigator.mediaDevices.getUserMedia(cameraConstraints).then((stream) => {
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
        const geometry = new THREE.PlaneBufferGeometry();
        const material = this.getMaterial();
        const mesh = new THREE.Mesh(geometry, material);

        this.scene.add(mesh);
    }

    getMaterial() {
        const uniforms = {
            map: { value: undefined },
            r: { value: colorModes[this.colorVision].r },
            g: { value: colorModes[this.colorVision].g },
            b: { value: colorModes[this.colorVision].b },
        };

        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: VertexShader,
            fragmentShader: FragmentShader,
        });

        material.uniforms.map.value = this.texture;
        material.transparent = true;

        // this.materialInstances.push(material);

        return material;
    }

    updateMaterial() {
        return null;
    }
}

export default ColorblindRenderer;
