import AddToCart from '@/components/products/AddtoCart'
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
        <div className=' mx-auto'>
            <div className='my-2'>
                <Link href='/'>Back to Home</Link>
            </div>
            <div className="grid md:grid-cols-3 md:gap-3">
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

                    </ul>
                </div>
                <div>
                    <div className="card bg-base-300 shadow-xl mt-3 md:mt-0 ">
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
                                </div> m
                            </div>
                            <div className="">
                                <h1 className='font-bold text-base-content'>Sizes:</h1>
                                <div className="gird md:grid-cols-4 md:gap-5">
                                    <button className='btn hover:border-violet-50 outline-2 border-white rounded-xl px-8 mt-4 mx-1 min-w-[95px] focus:outline-none focus:border-sky-500 '>6</button>
                                    <button className='btn hover:border-violet-50 outline-2 border-white rounded-xl px-8 mt-4 mx-1 min-w-[95px] focus:outline-none focus:border-sky-500 '>6.5</button>
                                    <button className='btn hover:border-violet-50 outline-2 border-white rounded-xl px-8 mt-4 mx-1 min-w-[95px] focus:outline-none focus:border-sky-500 '>7</button>
                                    <button className='btn hover:border-violet-50 outline-2 border-white rounded-xl px-8 mt-4 mx-1 min-w-[95px] focus:outline-none focus:border-sky-500 '>7.5</button>
                                    <button className='btn hover:border-violet-50 outline-2 border-white rounded-xl px-8 mt-4 mx-1 min-w-[95px] focus:outline-none focus:border-sky-500 '>8</button>
                                    <button className='btn hover:border-violet-50 outline-2 border-white rounded-xl px-8 mt-4 mx-1 min-w-[95px] focus:outline-none focus:border-sky-500 '>8.5</button>
                                    <button className='btn hover:border-violet-50 outline-2 border-white rounded-xl px-8 mt-4 mx-1 min-w-[95px] focus:outline-none focus:border-sky-500 '>9</button>
                                    <button className='btn hover:border-violet-50 outline-2 border-white rounded-xl px-8 mt-4 mx-1 min-w-[95px] focus:outline-none focus:border-sky-500 '>9.5</button>
                                    <button className='btn hover:border-violet-50 outline-2 border-white rounded-xl px-8 mt-4 mx-1 min-w-[95px] focus:outline-none focus:border-sky-500 '>10</button>
                                    <button className='btn hover:border-violet-50 outline-2 border-white rounded-xl px-8 mt-4 mx-1 min-w-[95px] focus:outline-none focus:border-sky-500 '>10.5</button>
                                    <button className='btn hover:border-violet-50 outline-2 border-white rounded-xl px-8 mt-4 mx-1 min-w-[95px] focus:outline-none focus:border-sky-500 '>11</button>

                                </div>
                            </div>
                            <div className="mb-2 flex flex-col">
                                {product.inStock != 0 && (
                                    <div className="card-actions justify-center">
                                        <AddToCart
                                            item={{ ...product, qty: 0, color: '', size: '' }} />

                                    </div>
                                )}
                                <button className='btn btn-success rounded-md my-2'><ShoppingBag />  Buy now</button>
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
        </div>
    )
}
