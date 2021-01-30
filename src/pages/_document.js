import Document, { Head, Html, Main, NextScript } from 'next/document';

class NextDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/102/three.js" />*/}
                </Head>
                <body>
                    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                    <video id="video" style={{ display: 'none' }} />
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
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default NextDocument;
