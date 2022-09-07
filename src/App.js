import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { LogRegPage, OtpAccessPage, DashboardPage } from './pages'

function App() {
    const { access_token } = useSelector((state) => state.auth)

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={!access_token ? <LogRegPage /> : <Navigate to="/dashboard" />} />
                    <Route path="/otp" element={!access_token ? <OtpAccessPage /> : <Navigate to="/dashboard" />} />

                    <Route path="dashboard" element={access_token ? <DashboardPage /> : <Navigate to="/" />} />

                    <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
