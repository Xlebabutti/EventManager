import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { CookiesProvider } from 'react-cookie'
import ThemeProvider from './providers/ThemeProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <CookiesProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </CookiesProvider>
        </Provider>
    </React.StrictMode>,
)