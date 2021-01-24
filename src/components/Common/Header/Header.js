import styles from '~/components/Common/Header/Header.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Header({ children, className }) {
    return <h1 className={classNames(styles.header, className)}>{children}</h1>;
}

Header.defaultProps = {
    className: '',
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Header;
