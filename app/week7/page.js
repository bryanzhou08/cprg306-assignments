"use client"
import React, { useState } from 'react';
import MealIdeas from './meal-ideas'; // Import the MealIdeas component
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

const Page = () => {

    const [items, setItems] = useState( itemsData );
    const [selectedItemName, setSelectedItemName] = useState('');


    const handleItemSelect = (itemName) => {
        setSelectedItemName(itemName);
    };



    const handleAddItem = (NewItem) => {
        setItems([...items, NewItem]);

    };



    return (



        <main className="bg-[#bacee2] w-full p-8 flex">
            <div className="  pr-4  ">
                <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="   ">
                <h1 className="text-2xl font-bold mb-4">Meal Ideas</h1>
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
};

export default Page;
