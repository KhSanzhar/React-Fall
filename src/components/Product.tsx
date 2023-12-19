import React, { useState } from "react"
import { generateClient } from "aws-amplify/api";
import { updateUser } from '../graphql/mutations';

const client = generateClient()

export function Product({ product }: any) {
    const addToTheCart = async (productId:String) => {
        const updatedUser = await client.graphql({
            query: updateUser,
            variables: {
                input: {
                "FirstName": "Lorem ipsum dolor sit amet",
                "LastName": "Lorem ipsum dolor sit amet",
                "login": "Lorem ipsum dolor sit amet",
                "email": "Lorem ipsum dolor sit amet",
                "password": "Lorem ipsum dolor sit amet",
                "products": [],
                "userId": "Lorem ipsum dolor sit amet"
            }
            }
        });
    }
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-red-400' : 'bg-yellow-400'

    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div className="border py-8 px-4 rounded flex flex-col items-center mb-2">
            <img src={ product.image } className="w-1/6" alt={ product.title }/>
            <p className="product-name">{ product.title }</p>
            <p className="font-bold product-price">{ product.price }$</p>
            <p className="mb-8">{ product.description }</p>
            <button 
            className={btnClasses.join(' ')}
            >
                Add to the cart
            </button>

        </div>
    )
}