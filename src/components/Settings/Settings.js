import { IconArrowLeft } from '~/components/Common/Icons';
import Header from '~/components/Common/Header';
import ColorBlindType from '~/components/Settings/ColorBlindType';
import Camera from '~/components/Settings/Camera';
import ColorNames from '~/components/Settings/ColorNames';
import styles from '~/components/Settings/Settings.module.scss';

function Settings() {
    return (
        <main className={styles.container} data-testid="settings-page">
            <nav className={styles.nav}>
                <IconArrowLeft className={styles.icon} />
                <Header className={styles.header}>Settings</Header>
            </nav>

            <section className={styles.section}>
                <p className={styles.text}>color blindness type</p>
                <ColorBlindType />
            </section>

            <section className={styles.section}>
                <p className={styles.text}>camera</p>
                <Camera />
            </section>

            <section className={styles.section}>
                <p className={styles.text}>color names</p>
                <ColorNames />
            </section>
        </main>
    );
}

export default Settings;
