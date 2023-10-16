import React from 'react';
import NewItem from './new-item';

export default function Page() {
    return (
        <main className="bg-neutral-800 text-gray-50">
            <h1 className='px-4 '>week4page</h1>
            <div>
                <button value="Ok">Ok</button>
            </div>
            <NewItem />
            <div>
                <button value="Cancel">Cancel</button>
            </div>
        </main>
    );
}