import { configureStore } from "@reduxjs/toolkit";
// Импортируйте ваш редьюсер
import rootReducer from "./rootReducer";
import {hotelsApi} from "@/enteties/hotel/hotel.api"; // или используйте combineReducers напрямую
import counterReducer from '../features/slice/counterScice'

export const store = configureStore({
    reducer: {
        counter: counterReducer, // ✅ обычный редьюсер
        [hotelsApi.reducerPath]: hotelsApi.reducer, // ✅ RTK Query
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(hotelsApi.middleware),
});

// Типы
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
