import Camera from '~/components/Camera';

function CameraPage() {
    return (
        <>
            <div id="webgl-container" />
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video id="video" style={{ display: 'none' }} />
            <Camera />
        </>
    );
}

export default CameraPage;
