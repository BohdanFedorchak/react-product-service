import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '@/hooks/useUser.tsx'
import MainLayout from '@/layouts/MainLayout.tsx'

const PrivateRoutes = () => {
    const { data: user, error, isValidating } = useUser()

    if (isValidating) {
        return <div>Loading...</div>
    }

    if (error) {
        localStorage.removeItem('token')
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        <MainLayout headerClassName={'mb-4'}>
            <Outlet />
        </MainLayout>
    )
}

export default PrivateRoutes
