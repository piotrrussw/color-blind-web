import { StoreContext } from './Store';
import { useContext } from 'react';

function useStore() {
    return useContext(StoreContext);
}

export { useStore };
