'use client'

import useCartService from "@/lib/hooks/useCartStore"
import exp from "constants"
import Link from "next/link"
import { use, useEffect, useState } from "react"

const Menu = () => {
    const { items } = useCartService()
    const [mountend, setMountend] = useState(false)

    useEffect(() => {
        setMountend(true)
    }, [])

    return <>
        <ul className="flex items-stretch">
            <li>
                <Link href='/cart' className='btn btn-ghost rounded-btn'>
                    Cart
                    {mountend && items.length != 0 && (
                        <div className="badge badge-neutral text-stone-50">
                            {items.reduce((a, c) => a + c.qty, 0)}{' '}
                        </div>
                    )}
                </Link>
            </li>
            <li>
                <Link href='' className=' btn btn-ghost rounded-btn '> Sign in</Link>
            </li>
        </ul>
    </>
}

export default Menu