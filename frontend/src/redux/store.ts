import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../components/ThemeSwitcher/Slice"


const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store