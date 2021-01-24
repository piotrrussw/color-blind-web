import { useContext } from 'react';
import { StoreContext } from './Store';

function useStore() {
    return useContext(StoreContext);
}

export { useStore };
