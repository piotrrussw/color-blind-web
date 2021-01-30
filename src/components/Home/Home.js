import styles from '~/components/Home/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <Image src="/logo.png" alt="color blind app logo" width={128} height={128} />
                <h1>Color blind app</h1>
            </header>
            <Link href="/camera">
                <a className={styles.button}>Start</a>
            </Link>
        </main>
    );
}

export default Home;
