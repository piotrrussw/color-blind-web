import { useEffect } from 'react';
import ColorblindRenderer from '~/utils/ColorblindRenderer';

function CorrectionCamera() {
    useEffect(() => {
        const video = document.getElementById('video');
        const colorblindRenderer = new ColorblindRenderer(video);

        colorblindRenderer.render();
        colorblindRenderer.animate();

        return () => {
            colorblindRenderer.destroy();
        };
    }, []);

    return null;
}

CorrectionCamera.propTypes = {};

export default CorrectionCamera;
