import Camera from '~/components/Camera';
import Head from 'next/head';

function CameraPage() {
    return (
        <>
            <Head>
                <title>Color Blind App</title>
            </Head>
            <div
                id="webgl-container"
                style={{
                    position: 'fixed',
                    minHeight: '100%',
                    minWidth: '100%',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            />
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video id="video" style={{ display: 'none' }} />
            <Camera />
        </>
    );
}

export default CameraPage;
