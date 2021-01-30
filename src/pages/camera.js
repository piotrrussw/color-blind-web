import Camera from '~/components/Camera';
import Head from 'next/head';

function CameraPage() {
    return (
        <>
            <Head>
                <title>Color Blind App</title>
            </Head>
            <div id="webgl-container" />
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video id="video" style={{ display: 'none' }} />
            <Camera />
        </>
    );
}

export default CameraPage;
