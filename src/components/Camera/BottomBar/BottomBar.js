import styles from '~/components/Camera/BottomBar/BottomBar.module.scss';
import { Range, getTrackBackground } from 'react-range';
import { useStore } from '~/store';

const MIN = 0;
const MAX = 100;
const STEP = 1;

function BottomBar() {
    const [store, dispatch] = useStore();
    const background = getTrackBackground({
        values: [store.correctionLevel],
        colors: ['#3DE200', '#c5c5c5'],
        min: MIN,
        max: MAX,
    });

    return (
        <div className={styles.container}>
            <div className={styles.sliderWrapper}>
                <div className={styles.correctionLabel}>
                    <p>correction level</p>
                    <span>&nbsp;({store.correctionLevel}%)</span>
                </div>
                <Range
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    values={[store.correctionLevel]}
                    onChange={(values) => dispatch({ correctionLevel: values[0] })}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            className={styles.track}
                            style={{ ...props.style, background }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div className={styles.thumb} {...props} style={props.style} />
                    )}
                />
            </div>
        </div>
    );
}

export default BottomBar;
