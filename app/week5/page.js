
// In page.js, create a functional component named Page 
// that returns a main element wrapped around an h1 "Shopping List" header and the ItemList component.
import ItemList from './item-list'
export default function Page() {
    return (
        <main className="bg-neutral-800 text-gray-50">
            <h1 className='px-4 '>Shopping List</h1>
            <ItemList/>
        </main>
    );
}