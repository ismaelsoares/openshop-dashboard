import { HiOutlineSearch } from "react-icons/hi"

export const Header = () => {
    return (
        <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
                <input type="text"
                    placeholder="Pesquisar..."
                    className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 px-4"
                />
            </div>
            <div>side button</div>
        </div>
    )
}
