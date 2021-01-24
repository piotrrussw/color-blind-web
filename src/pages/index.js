import Head from 'next/head';
import Header from '~/components/Common/Header';

function Index() {
    return (
        <>
            <Head>
                <title>Color Blind App</title>
            </Head>

            <main data-testid="home-page">
                <Header>Next quick start template</Header>
            </main>
        </>
    );
}

Index.renderFooter = true;

export default Index;
