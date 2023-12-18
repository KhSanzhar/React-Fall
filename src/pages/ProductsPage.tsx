import React, { useState } from "react";
import { useContext } from 'react';
import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/ErrorMessage";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { Loader } from "../components/loader";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";
import { ProductSearch } from "../components/ProductSearch";


export function ProductsPage() {
    const {loading, error, products} = useProducts();
    const [ searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto max-w-2xl pt-10 pb-16 px-6">
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}

            <ProductSearch onSearch={setSearchTerm} />

            {filteredProducts.map((product, index) => (
                <Product product={product} key={product.id} />
            ))}
    
        </div>
    );
}