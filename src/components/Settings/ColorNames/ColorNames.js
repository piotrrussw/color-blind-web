import { useStore } from '~/store';
import TabRadio from '~/components/Common/TabRadio';
import { COLOR_NAMES_TYPES } from '~/constants';
import styles from '~/components/Settings/Settings.module.scss';

function ColorNames() {
    const [store, dispatch] = useStore();

    const handleChange = (id) => {
        const { value } = COLOR_NAMES_TYPES.find((item) => item.id === id);
        dispatch({ showColorLabels: value });
    };

    const active = COLOR_NAMES_TYPES.find(({ value }) => store.showColorLabels === value);

    return (
        <div className={styles.control}>
            <div className={styles.label}>Camera</div>
            <TabRadio
                options={COLOR_NAMES_TYPES}
                active={active.id}
                name="color_names"
                onChange={handleChange}
            />
        </div>
    );
}

export default ColorNames;
