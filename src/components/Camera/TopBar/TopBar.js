import Link from 'next/link';
import { IconReverseCamera, IconSettings } from '~/components/Common/Icons';
import { useStore } from '~/store';
import { COLOR_VISION_TYPES } from '~/constants';
import Header from '~/components/Common/Header';
import styles from '~/components/Camera/TopBar/TopBar.module.scss';

function TopBar() {
    const [store, dispatch] = useStore();

    const handleReverseCamera = () => {
        const reversed = store.cameraTypes.find(({ id }) => id !== store.cameraType);
        dispatch({ cameraType: reversed.id });
    };

    const colorVision = COLOR_VISION_TYPES.find(({ id }) => id === store.colorVision);

    return (
        <nav className={styles.nav}>
            <div className={styles.topBarContainer}>
                <div className={styles.leftPanel}>
                    <div
                        className={styles.iconContainer}
                        onClick={handleReverseCamera}
                        onKeyDown={handleReverseCamera}
                        role="button"
                        tabIndex="0"
                    >
                        <IconReverseCamera className={styles.iconReverse} />
                    </div>
                </div>
                <div className={styles.centerPanel}>
                    <Header>{colorVision.label}</Header>
                </div>
                <div className={styles.rightPanel}>
                    <Link href="/settings">
                        <a className={styles.iconContainer}>
                            <IconSettings className={styles.iconSettings} />
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

TopBar.propTypes = {};

export default TopBar;
