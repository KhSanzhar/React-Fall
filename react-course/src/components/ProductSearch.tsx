import React, { ChangeEvent, useState } from "react";
import { IProduct } from "../models";

interface ProductSearchProps {
    onSearch: (query: string) => void;
}

export const ProductSearch: React.FC<ProductSearchProps> = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value; 
        setSearch(query);
        onSearch(query);
    };

    return (
        <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            className="mb-4 w-full p-2 border rounded" 
        />
    );
};