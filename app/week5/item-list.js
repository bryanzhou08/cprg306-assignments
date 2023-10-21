// Remove all item variables (const item1 etc.) from the ItemList component.
//Import the useState hook from React, the Item component, and the items from the JSON file.

// Use the useState hook to create a state variable sortBy and its setter function setSortBy. This will be used to determine the sorting preference of the user.
// Set the initial value of sortBy to "name", indicating that the list should initially be sorted by name.

// Use JavaScript's sort function to sort the items array based on the sortBy state variable.
// If sortBy is "name", sort the items by their name property.
// If sortBy is "category", sort the items by their category property.

"use client";

import Item from './item'
import jsonData from './items.json'

import { useState } from 'react';


export default function ItemList() {
    const jsonItems = [...jsonData]
    const [sortBy, setSortBy] = useState('name');
    const sortItems = () => {
        if (sortBy === 'name') {
          // Sort items by the 'name' property
          jsonItems.sort((a, b) => a.name.localeCompare(b.name));
          
        } else if (sortBy === 'category') {
          // Sort items by the 'category' property
          jsonItems.sort((a, b) => a.category.localeCompare(b.category));
        }
      };
       
      // Call the sorting function whenever the sortBy state variable changes
      const handleSortByName = () => {
        setSortBy('name');
      };
    
      const handleSortByCategory = () => {
        setSortBy('category');
      };

    return (
      <div>
        <div>
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="category">Category</option>
            </select>
        </div>
        <div>
        <button
          onClick={sortItems}
          style={{
            backgroundColor: sortBy === 'name' ? 'lightblue' : 'white',
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{
            backgroundColor: sortBy === 'category' ? 'lightblue' : 'white',
          }}
        >
          Sort by Category
        </button>
      </div>
        <div>
        {jsonItems.map((item) => (
        <Item name={item.name} quantity={item.quantity} category={item.category} />
        ))}
          
        </div>
    </div>
    );
}
