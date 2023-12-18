import React, { useContext } from "react";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";
import { Loader } from "../components/loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/CreateProduct";
import { Product } from "../components/Product";

export function MyProductsPage() {
    return (
       <div>
        My products works!
       </div>
    );
}
