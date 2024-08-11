// import React from 'react';
// import { useCart } from './CartContext'; // Import the cart context

// const Cart = () => {
//     const { cart, removeFromCart } = useCart(); // Get cart and removeFromCart function from context

//     const handleRemoveClick = (productId) => {
//         removeFromCart(productId);
//     };

//     return (
//         <div>
//             <h2>Shopping Cart</h2>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <ul className="list-group">
//                     {cart.map(product => (
//                         <li className="list-group-item" key={product.id}>
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <div>
//                                     <h5>{product.title}</h5>
//                                     <p>{product.description}</p>
//                                     <p><strong>Price:</strong> {product.price}</p>
//                                 </div>
//                                 <button onClick={() => handleRemoveClick(product.id)} className="btn btn-danger">Remove</button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Cart;
