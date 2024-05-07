import ProductItem from '@/components/products/ProductItem'
import data from '@/lib/data'
import { ShoppingBag, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductDetails({
    params, }: {
        params: { slug: string }
    }) {

    const product = data.products.find((product) => product.slug === params.slug)
    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <>
            <div className='my-2'>
                <Link href='/'>asdlujaoklsdj</Link>
            </div>
            <div className="grid md:grid-cols-4 md:gap-3">
                <div className="md:grid-span-2">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={640}
                        height={640}
                        sizes='100vw'
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        className=''
                    ></Image>
                </div>
                <div >
                    <ul className="space-y-4">
                        <li >
                            <h1 className='text-xl'>
                                {product.name}
                            </h1>
                        </li>
                        <li>
                            {product.rating} of {product.numReviews} reviews
                        </li>
                        <li>
                            {product.brand}
                        </li>
                        <li>

                        </li>
                        <li>
                            <div className="divider"></div>
                        </li>
                        <li>
                            Desciption:
                            <p>
                                {product.description}
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
                        <div className="card-body">
                            <div className='mb-2 flex justify-between'>
                                <div>Price</div>
                                <div>$ {product.price}</div>
                            </div>
                            <div className="mb-2 flex justify-between">
                                <div>
                                    Status
                                </div>
                                <div>
                                    {product.inStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </div>
                            </div>
                            <div className="mb-2 flex flex-col">
                                <button className='btn btn-primary rounded-md my-2'><ShoppingCart /> Add Cart</button>
                                <button className='btn btn-success rounded-md '><ShoppingBag />  Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

            <div className='card shadow-xl mb-4'>
                <div>
                    <h1 className='text-2xl'>
                        How Others Are Wearing It
                    </h1>
                    <p className='text-base'>Upload your photo or mention @Nike on Instagram for a chance to be featured.</p>
                    <div className='btn hover:border-violet-50 outline-2 border-white rounded-full px-9 mt-4'>
                        Upload Your Photo
                    </div>
                </div>

            </div>
        </>
    )
}
