"use client" 
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import React, { useState } from 'react';

 
    const Page = () => {
    
        const [items, setItems] = useState( itemsData);
    
        const handleAddItem = (newItem) => {
            setItems([...items, newItem]);
    
        };
    
    
    
        return (
    
    
    
            <main className="bg-[#bacee2] h-screen bg-gray w-full  justify-center  p-8 ">
                <h1 className="px-4 ">Shopping List</h1>
                <div>
    
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} />
    
    
                </div>
    
    
            </main>
        );
    };
    
    export default Page;
    