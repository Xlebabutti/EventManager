import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../components/ThemeSwitcher/Slice"
import sidebarReducer from "./actions/sidebarSlice"
import settingsReduser from "./actions/settingsSlice"

const store = configureStore({
    reducer: {
        theme: themeReducer,
        sidebar: sidebarReducer,
        settings: settingsReduser
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store