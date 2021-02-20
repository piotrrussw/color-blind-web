import TopBar from '~/components/Camera/TopBar';
import CorrectionCamera from '~/components/Camera/CorrectionCamera';
import BottomBar from '~/components/Camera/BottomBar';
import styles from '~/components/Camera/Camera.module.scss';
import ColorTrigger from '~/components/Camera/ColorTrigger';
import { useStore } from '~/store';

function Camera() {
    const [{ showColorLabels }] = useStore();

    return (
        <main className={styles.container}>
            <TopBar />
            <CorrectionCamera />
            <BottomBar />
            {showColorLabels && <ColorTrigger />}
        </main>
    );
}

export default Camera;
