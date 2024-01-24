import { createSlice } from '@reduxjs/toolkit'


interface SettingsState {
    isOpen: boolean
}

const initialState: SettingsState = {
    isOpen: false
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleSettings: (state) => {
            state.isOpen = !state.isOpen
        },
    }
})

export const { toggleSettings } = settingsSlice.actions

export default settingsSlice.reducer