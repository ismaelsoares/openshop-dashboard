import { FcLandscape } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'
export const Sidebar = () => {
    return (
        <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcLandscape fontSize={25} />
                <span className='text-neutral-100 text-lg'>OpenShop</span>
            </div>
            <div className='flex-1'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <div key={item.key}>{item.label}</div>
                ))}
            </div>
            <div>botton part</div>
        </div>
    )
}
