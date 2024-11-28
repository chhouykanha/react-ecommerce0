import { useState } from "react"
import { NavLink } from "react-router-dom"
function Header() {
    const [isActiveNavbar, setIsActiveNavbar] = useState(false)
    return (
        <>
            <header className="bg-white border-b border-gray-200 py-4 font-jost flex justify-between items-center px-4 lg:px-40">
                <div className="flex items-center gap-2">
                    <button onClick={() => setIsActiveNavbar(true)} className="inline-block lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </button>
                    <h2 className="font-bold">MasterIT Store</h2>
                </div>

                <ul className="hidden lg:flex items-center gap-4">
                    <li>
                        <NavLink to="/" className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600">About</NavLink>
                    </li>
                </ul>

                <div className="flex items-center gap-2">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-yellow-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                    </button>

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-yellow-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                    </button>

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-yellow-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                    </button>
                </div>
            </header>

            <header className={`${isActiveNavbar ? '-left-0' : '-left-full'} absolute transition-all duration-300 ease-in-out top-0 z-[999] pt-8 px-4 w-[260px] bg-primary text-white min-h-screen`}>
                <div className="flex justify-end">
                    <button onClick={() => setIsActiveNavbar(false)} className="p-2 border border-white border-dashed rounded-full hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col mt-4">
                        <a href="" className="hover:bg-gray-700 p-2 rounded-lg transition-all">+Home</a>
                        <a href="" className="hover:bg-gray-700 p-2 rounded-lg transition-all">+Products</a>
                        <a href="" className="hover:bg-gray-700 p-2 rounded-lg transition-all">+Contact</a>
                        <a href="" className="hover:bg-gray-700 p-2 rounded-lg transition-all">+About</a>
                </div>
            </header>
        </>
    )
}

export default Header