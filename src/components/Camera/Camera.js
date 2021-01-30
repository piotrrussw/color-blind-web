import TopBar from '~/components/Camera/TopBar';
import CorrectionCamera from '~/components/Camera/CorrectionCamera';
import BottomBar from '~/components/Camera/BottomBar';
import styles from '~/components/Camera/Camera.module.scss';

function Camera() {
    return (
        <main className={styles.container}>
            <TopBar />
            <CorrectionCamera />
            <BottomBar />
        </main>
    );
}

export default Camera;