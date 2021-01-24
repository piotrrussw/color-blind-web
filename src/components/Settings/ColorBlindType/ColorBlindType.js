import styles from '~/components/Settings/Settings.module.scss';
import { useStore } from '~/store';
import { IconCheck } from '~/components/Common/Icons';

function ColorBlindType() {
    const [store, dispatch] = useStore();

    const handleChange = (event) => {
        const id = parseInt(event.target.value);

        if (id !== store.colorVision) {
            dispatch({ colorVision: id });
        }
    };

    return (
        <>
            {store.colorVisionTypes.map(({ id, label, colorDeficiency }) => (
                <div className={styles.control} key={`color-blind-${id}`}>
                    <label className={styles.label} htmlFor={label.trim()}>
                        {label}&nbsp;{colorDeficiency && `(${colorDeficiency})`}
                    </label>
                    <input
                        className={styles.radio}
                        type="radio"
                        id={label.trim()}
                        name="color-blind-type"
                        value={id}
                        onChange={handleChange}
                    />
                    {store.colorVision === id && <IconCheck className={styles.iconCheck} />}
                </div>
            ))}
        </>
    );
}

export default ColorBlindType;
