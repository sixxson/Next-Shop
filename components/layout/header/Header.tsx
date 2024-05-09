import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'

export default function Header() {
    return (
        <div>

            <nav className='navbar justify-between bg-base-300'>
                <ul>
                    <li>
                        <Link href='/' className='btn btn-ghost'>FashtionBrand</Link>
                    </li>
                </ul>
                <ul className="sm:flex sm:justify-center sm:items-center mt-4">
                    <div className="flex flex-col sm:flex-row">
                        <Link className="mt-3 text-base-content hover:underline sm:mx-3 sm:mt-0" href="/">Home</Link>
                        <li className="dropdown dropdown-hover">
                            <Link tabIndex={0} role="button" className="mt-3 text-base-content hover:underline sm:mx-3 sm:mt-0" href="/product">Shop</Link>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 left-[-100%] shadow bg-base-100 rounded-box w-52">
                                <li><Link href=''>Item 1</Link></li>
                                <li><Link href=''>Item 2</Link></li>
                            </ul>
                        </li>
                        <Link className="mt-3 text-base-content hover:underline sm:mx-3 sm:mt-0" href="#">Categories</Link>
                        <Link className="mt-3 text-base-content hover:underline sm:mx-3 sm:mt-0" href="#">Contact</Link>
                        <Link className="mt-3 text-base-content hover:underline sm:mx-3 sm:mt-0" href="#">About</Link>
                    </div>
                </ul>
                <Menu />
            </nav>
        </div>
    )
}
