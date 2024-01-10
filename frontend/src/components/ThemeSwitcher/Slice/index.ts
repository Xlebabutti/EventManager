import { createSlice } from "@reduxjs/toolkit"

interface ThemeState {
    data: 'light' | 'dark'
}

const initialState: ThemeState = {
    data: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, actions) {
            state.data = actions.payload
        }
    }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer