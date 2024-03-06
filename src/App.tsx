import { SWRConfig } from 'swr'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AuthPage from '@/pageProviders/AuthPage.tsx'
import HomePage from '@/pageProviders/HomePage.tsx'

import PrivateRoutes from '@/route/PrivateRoutes.tsx'
import PublicRoutes from '@/route/PublicRoutes.tsx'

function App() {
    console.log(import.meta.env.VITE_SOME_KEY)
    return (
        <>
            <SWRConfig>
                <Router>
                    <Routes>
                        <Route element={<PrivateRoutes />}>
                            <Route element={<HomePage />} path="/" />
                            <Route element={<div> test </div>} path="/test" />
                        </Route>
                        <Route element={<PublicRoutes />}>
                            <Route element={<AuthPage />} path="/login" />
                        </Route>
                    </Routes>
                </Router>
            </SWRConfig>
        </>
    )
}

export default App
