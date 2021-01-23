import styles from '~/components/Header/Header.module.scss';
import PropTypes from 'prop-types';

function Header({ children }) {
    return <h1 className={styles.header}>{children}</h1>;
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
