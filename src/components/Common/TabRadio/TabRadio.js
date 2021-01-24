import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '~/components/Common/TabRadio/TabRadio.module.scss';

function TabRadio({ options, onChange, active }) {
    return (
        <div className={styles.container}>
            {options.map(({ value, name }) => {
                return (
                    <>
                        <div
                            className={classNames(styles.option, {
                                [styles.active]: active === value,
                            })}
                        >
                            <label htmlFor={name} />
                            <input type="radio" value={value} name={name} onChange={onChange} />
                        </div>
                    </>
                );
            })}
        </div>
    );
}

TabRadio.defaultProps = {
    active: '',
};

TabRadio.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    active: PropTypes.string,
};

export default TabRadio;
