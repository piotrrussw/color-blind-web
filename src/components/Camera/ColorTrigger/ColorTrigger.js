import { IconCrossHair } from '~/components/Common/Icons';
import styles from '~/components/Camera/ColorTrigger/ColorTrigger.module.scss';
import { useResize } from '~/hooks';
import { useEffect, useState } from 'react';

function ColorTrigger() {
    const size = useResize();
    const [position, setPosition] = useState({});

    useEffect(() => {
        const canvas = document.getElementsByTagName('canvas')[0];

        setPosition({
            width: canvas.width / 2 + 'px',
            height: canvas.height / 2 + 'px',
        });
    }, [size]);

    return (
        <div className={styles.container} style={position}>
            <IconCrossHair className={styles.icon} />
        </div>
    );
}

export default ColorTrigger;
