import React, { useEffect, useState } from "react";
import { pullData } from "../data/products";
import { ProductSearch } from "../components/ProductSearch";
import { Product } from "../components/Product";
import { fetchUserAttributes, signUp } from 'aws-amplify/auth';
import { generateClient } from "aws-amplify/api";
import { createUser } from "../graphql/mutations";

const client = generateClient()

export function ProductsPage() {
    const [productsList, setProductsList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const pull = async () => {
            let products = await pullData()
            setProductsList(products)
            let userAttributes = await fetchUserAttributes();
            let userAttributesJson = JSON.parse(JSON.stringify(userAttributes))
            // const newUser = await client.graphql({
            //     query: createUser,
            //     variables: {
            //         input: {
            //         "FirstName": "Lorem ipsum dolor sit amet",
            //         "LastName": "Lorem ipsum dolor sit amet",
            //         "login": "Lorem ipsum dolor sit amet",
            //         "email": userAttributesJson['email'],
            //         "password": "Lorem ipsum dolor sit amet",
            //         "userId": userAttributesJson['sub']
            //     }
            //     }
            // });
        }
        pull()
    }, [])
    useEffect(() => {
        const filteredProducts = productsList.filter(product =>
          JSON.stringify(product['title']).toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filteredProducts);  
    }, [searchTerm, productsList]);

    return (
        <div className="container mx-auto max-w-2xl pt-10 pb-16 px-6">
            <ProductSearch onSearch={setSearchTerm} />

            {filteredProducts.map((product, index) => (
                <Product product={product} key={product['id']} />
            ))}
    
        </div>
    );
}