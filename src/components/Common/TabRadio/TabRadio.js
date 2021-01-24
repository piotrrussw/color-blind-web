import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '~/components/Common/TabRadio/TabRadio.module.scss';

function TabRadio({ options, onChange, active, name }) {
    const handleChange = (event) => {
        const newValue = parseInt(event.target.value);

        if (newValue !== active) {
            onChange(newValue);
        }
    };

    return (
        <div className={styles.container}>
            {options.map(({ id, label }) => (
                <div
                    key={name + '-' + id}
                    className={classNames(styles.option, {
                        [styles.active]: active === id,
                    })}
                >
                    <label className={styles.label} htmlFor={label.trim()}>
                        {label}
                    </label>
                    <input
                        className={styles.radio}
                        id={label.trim()}
                        type="radio"
                        value={id}
                        name={name}
                        onChange={handleChange}
                    />
                </div>
            ))}
        </div>
    );
}

TabRadio.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.number.isRequired,
};

export default TabRadio;
