import React, { useContext } from "react";
import { useProducts } from "../hooks/products";
import { ModalContext } from "../context/ModalContext";
import { IProduct } from "../models";
import { Loader } from "../components/loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/CreateProduct";
import { useAuth } from "../context/AuthContext";
import { Product } from "../components/Product";

export function MyProductsPage() {
    const {loading, error, products, addProduct} = useProducts();
    const {close, open, modal} = useContext(ModalContext);
    const auth = useAuth();

    const myProducts = JSON.parse(localStorage.getItem('myProducts') || '[]');


    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    

    return (
        <div className="container mx-auto max-w-2xl pt-10 pb-16 px-6">
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}

            {myProducts.map((product: IProduct) => (
                <Product product={product} key={product.id} />
            ))}

            {auth?.currentUser && modal && (
                <Modal title="Create new product" onClose={close}>
                <CreateProduct onCreate={createHandler} />
                </Modal>
            )}

            {auth?.currentUser && (<button
                className="fixed bottom-10 right-10 rounded-full bg-gradient-to-r from-gray-600 to-gray-900 text-white text-3xl w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition duration-300"
                onClick={open}
            >
                <span className="sr-only">Open</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                    />
                </svg>
            </button>)}
        </div>
    );
}
