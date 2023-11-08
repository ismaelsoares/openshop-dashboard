import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
export function Layout() {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div>
                <div className='bg-teal-200'>header</div>
                <div>{<Outlet />}</div>
            </div>
        </div>
    )
}
