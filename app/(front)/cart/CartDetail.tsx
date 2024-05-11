'use client'

import useCartService from "@/lib/hooks/useCartStore"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function CartDetail() {

    const router = useRouter()
    const { items, itemsPrice, increase, decrease } = useCartService()

    const [mounted, setmounted] = useState(false)
    useEffect(() => {
        setmounted(true)
    }, [])

    if (!mounted) return <></>

    return <>
        <h1 className="py-4 text-2xl">
            {items.length === 0 ? (
                <div className="text-center">
                    Cart is empty.<Link href="/">Go shopping</Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-4 md:gap-9">
                    <div className="overflow-x-auto md:col-span-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.slug}>
                                        <td>
                                            <Link href={`/product/${item.slug}`}
                                                className="flex items-center">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={100}
                                                    height={100}>
                                                </Image>
                                                <span className="px-2">{item.name}</span>
                                            </Link>
                                        </td>
                                        <td>
                                            <button type="button" className="btn" onClick={() => decrease(item)}>
                                                -
                                            </button>
                                            <span className="px-2">{item.qty}</span>
                                            <button type="button" className="btn" onClick={() => increase(item)}>
                                                +
                                            </button>
                                        </td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div className="card bg-base-300">
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <div className="pb-3 text-xl">
                                            Subtotal ({items.reduce((a, c) => a + c.qty, 0)} items): ${itemsPrice}
                                        </div>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            onClick={() => router.push('/shipping')}
                                            className="btn btn-primary w-full" >
                                            Proceed to Checkout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </h1>
    </>
}