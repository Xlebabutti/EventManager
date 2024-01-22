import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../components/ThemeSwitcher/Slice"
import sidebarReducer from "./actions/sidebarSlice"

const store = configureStore({
    reducer: {
        theme: themeReducer,
        sidebar: sidebarReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store