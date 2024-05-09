'use client'

import useCartService from "@/lib/hooks/useCartStore"
import { OrtherItems } from "@/lib/models/OrtherModel"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function AddToCart({ item }: { item: OrtherItems }) {

    const router = useRouter()
    const { items, increase } = useCartService()
    const [existItem, setExistItem] = useState<OrtherItems | undefined>()

    useEffect(() => {
        setExistItem(items.find((x) => x.slug === item.slug))
    }, [item, items])

    const addtoCartHandler = () => {
        increase(item)
        // router.push('/cart')
    }

    return existItem ? (
        <div>
            <button type="button" className="btn" >
                -
            </button>
            <span className="px-2">{existItem.qty}</span>
            <button type="button" className="btn " onClick={() => increase(existItem)}>
                +
            </button>
        </div>
    ) : (
        <button type="button" className="btn btn-primary w-full " onClick={addtoCartHandler}>Add To Cart</button>
    )
}
