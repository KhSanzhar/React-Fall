import React, { useState } from "react"

export function Product({ product }: any) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-red-400' : 'bg-yellow-400'

    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div className="border py-8 px-4 rounded flex flex-col items-center mb-2">
            <img src={ product.image } className="w-1/6" alt={ product.title }/>
            <p className="product-name">{ product.title }</p>
            <p className="font-bold product-price">{ product.price }$</p>
            <button 
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                { details ? 'Hide Details' : 'Show Details'}
            </button>

            {details && <div>
                <p>{ product.description }</p>
            </div>}

        </div>
    )
}