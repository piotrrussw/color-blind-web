import PropTypes from 'prop-types';
import StoreProvider from '~/store';

import '~/styles/base.scss';

function App({ Component, pageProps }) {
    return (
        <StoreProvider>
            <div className="app" data-testid="app">
                <Component {...pageProps} />
            </div>
        </StoreProvider>
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
