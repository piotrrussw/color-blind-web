import { useStore } from '~/store';
import TabRadio from '~/components/Common/TabRadio';
import styles from '~/components/Settings/Settings.module.scss';

function Camera() {
    const [store, dispatch] = useStore();

    const handleChange = (id) => {
        dispatch({ cameraType: id });
    };

    return (
        <div className={styles.control}>
            <div className={styles.label}>Camera</div>
            <TabRadio
                options={store.cameraTypes}
                active={store.cameraType}
                name="camera_type"
                onChange={handleChange}
            />
        </div>
    );
}

export default Camera;
