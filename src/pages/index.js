import Head from 'next/head';
import Home from '~/components/Home';

function Index() {
    return (
        <>
            <Head>
                <title>Color Blind App</title>
            </Head>
            <Home />
        </>
    );
}

Index.renderFooter = true;

export default Index;
