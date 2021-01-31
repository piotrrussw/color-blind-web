import { colorMatrix } from '~/utils/colorMatrix';

const calcVector = (values, intensity) => {
    /*
        e.g.
        [a, b] = values

        a < b:
            b - a       -> 100
            x           -> intensity

            x = (b - a) * intensity / 100
            return a + x
        a >= b:
            a - b       -> 100
            x           -> intensity

            x = (a - b) * intensity / 100
            return a - x
     */

    return Object.keys(values).reduce((acc, curr) => {
        acc[curr] = values[curr].map(([min, max]) => {
            if (intensity === 0) {
                return min;
            }

            if (min < max) {
                const val = ((max - min) * intensity) / 100;
                return min + val;
            } else {
                const val = ((min - max) * intensity) / 100;
                return min - val;
            }
        });

        return acc;
    }, {});
};

export const getColorModes = (intensity, colorVision) => {
    const values = colorMatrix[colorVision];
    return calcVector(values, intensity);
};
