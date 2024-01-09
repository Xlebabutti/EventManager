import { createSlice } from "@reduxjs/toolkit"


export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        data: 'LIGHT'
    },
    reducers: {
        changeTheme(state, actions) {
            state.data = actions.payload
        }
    }
})

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer