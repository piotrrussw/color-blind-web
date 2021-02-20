import '~/styles/base.scss';

import Head from 'next/head';
import Meta from '~/components/Common/Head/Meta';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

// No need for SSR in this app
const StoreProvider = dynamic(() => import('~/store/Store'), { ssr: false });

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <Meta />
            </Head>
            <StoreProvider>
                <div className="app" data-testid="app">
                    <Component {...pageProps} />
                </div>
            </StoreProvider>
        </>
    );
}

App.propTypes = {
    Component: PropTypes.any.isRequired,
    pageProps: PropTypes.object,
};

App.defaultProps = {
    pageProps: {},
};

export default App;
