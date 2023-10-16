// In item.js, create a functional component named Item. 
// This component should accept name, quantity, and category 
// as props and display them in a list item element. Use Tailwind classes for styling.

export default function Item({ name, quantity, category }) {
    return (
        <ul>
            <li>{name}</li>
            <li>{quantity}</li>
            <li>{category}</li>
        </ul>
    );
}