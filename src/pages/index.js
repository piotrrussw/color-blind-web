import Head from 'next/head';
import Header from '~/components/Header';

function Index() {
    return (
        <>
            <Head>
                <title>Hello next</title>
            </Head>

            <main data-testid="home-page">
                <Header>Next quick start template</Header>
            </main>
        </>
    );
}

Index.renderFooter = true;

export default Index;
