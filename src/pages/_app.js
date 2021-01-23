import PropTypes from 'prop-types';
import '~/styles/base.scss';

function App({ Component, pageProps }) {
    return (
        <div className="app" data-testid="app">
            <Component {...pageProps} />
        </div>
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
