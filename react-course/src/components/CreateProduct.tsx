import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";


interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [count, setCount] = useState<number>(0);
    const [error, setError] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        if (title.trim().length === 0 || price <= 0 || description.trim().length === 0 || category.trim().length === 0 || count < 0) {
            setError('Please enter valid title, price, description, category, and count.');
            return;
        }

        const productData: IProduct = {
            title: title,
            price: price,
            description: description,
            category: category,
            image: 'https://i.pravatar.cc',
            rating: {
                rate: 0,
                count: count
            }
        };

        try {
            const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
            onCreate(response.data);
        } catch (error) {
            setError('Failed to create product. Please try again later.');
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                type="number"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product price..."
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
            />
            <textarea
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product description..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product category..."
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            />
            <input
                type="number"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product count..."
                value={count}
                onChange={(event) => setCount(Number(event.target.value))}
            />

            {error && <ErrorMessage error={error} />}

            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    );
}






// import React, { useState } from "react";
// import { IProduct } from "../models";
// import axios from "axios";
// import { ErrorMessage } from "./ErrorMessage";



// interface CreateProductProps {
//     onCreate: (product: IProduct) => void
// }

// export function CreateProduct({ onCreate }: CreateProductProps) {

//     const [value, setValue] = useState('')
//     const [error, setError] = useState('')


//     const submitHandler = async (event: React.FormEvent) => {
//         event.preventDefault()
//         setError('')

//         if (value.trim().length === 0) {
//             setError('Please enter valid title.')
//             return
//         }

//         productData.title = value

//         const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

//         onCreate(response.data)
//     }

//     return(
//         <form onSubmit={submitHandler}>
//             <input
//                 type="text" 
//                 className="border py-2 px-4 mb-2 w-full outline-0" 
//                 placeholder="Enter product title..." 
//                 value={value}
//                 onChange={event => setValue(event.target.value)}
//             />

//             {error && <ErrorMessage error={error}/>}


//             <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
//         </form>
//     )
// }