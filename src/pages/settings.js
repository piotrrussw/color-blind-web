import Head from 'next/head';
import Settings from '~/components/Settings';

function Index() {
    return (
        <>
            <Head>
                <title>Color Blind App - Settings</title>
            </Head>
            <Settings />
        </>
    );
}

export default Index;
