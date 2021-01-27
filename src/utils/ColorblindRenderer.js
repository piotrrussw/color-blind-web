import * as THREE from 'three';
import { VertexShader, FragmentShader } from '~/utils/shaders';
import { colorModes } from '~/utils/colorModes';

class ColorblindRenderer {
    constructor(video) {
        this.video = video;
    }

    render() {
        this.init();
        this.renderer = new THREE.WebGLRenderer({ antialias: true });

        const canvas = this.renderer.domElement;
        const { width, height } = document.body.getBoundingClientRect();
        this.renderer.setSize(width, height);

        document.getElementById('webgl-container').appendChild(canvas);
    }

    animate() {
        this.animationInstance = requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }

    init() {
        this.initWebcamInput();
        this.initCamera();
        this.initScene();
        this.initTexture();
        this.initMesh();
    }

    destroy() {
        cancelAnimationFrame(this.animationInstance);
        this.renderer.clear(true, true, true);
        document.querySelector('canvas').remove();
    }

    initWebcamInput() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
                this.video.srcObject = stream;
                this.video.play();
            });
        }
    }

    initCamera() {
        this.camera = new THREE.PerspectiveCamera(
            70,
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
            r: { value: colorModes.normal.r },
            g: { value: colorModes.normal.g },
            b: { value: colorModes.normal.b },
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
}

export default ColorblindRenderer;
