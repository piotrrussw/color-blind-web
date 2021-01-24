import TopBar from '~/components/Home/TopBar';
import CorrectionCamera from '~/components/Home/CorrectionCamera';
import BottomBar from '~/components/Home/BottomBar';
import styles from '~/components/Home/Home.module.scss';

function Home() {
    return (
        <div className={styles.container}>
            <TopBar />
            <CorrectionCamera />
            <BottomBar />
        </div>
    );
}

export default Home;
