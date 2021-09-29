import {configureStore} from '@reduxjs/toolkit';

import { searchApi} from './api';

const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
                    getDefaultMiddleware().concat(searchApi.middleware)
})

export default store;