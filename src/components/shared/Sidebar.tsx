import { FcLandscape } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'
import { Link } from 'react-router-dom'

interface SidebarLinkItem {
    key: string;
    path: string;
    icon: React.ReactNode;
    label: string;
}
export function Sidebar() {
    return (
        <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcLandscape fontSize={25} />
                <span className='text-neutral-100 text-lg'>OpenShop</span>
            </div>
            <div className='flex-1'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div>botton part</div>
        </div>
    )
}
function SidebarLink({ item }: { item: SidebarLinkItem }) {
    return (
        <Link to={item.path}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}