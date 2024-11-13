import {configureStore} from "@reduxjs/toolkit";
import userSlice from "@/lib/slices/userSlice";


const store = configureStore({
    reducer: {
        user: userSlice.reducer,

    }
})




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export { store }