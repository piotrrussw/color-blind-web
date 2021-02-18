import { useCallback } from 'react';
import debounce from 'lodash.debounce';

export function useDebounce(func, delay = 200, dependencies = [func, delay]) {
    const debouncedFunc = debounce(func, delay);
    return useCallback(debouncedFunc, dependencies);
}
