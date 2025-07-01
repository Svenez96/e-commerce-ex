const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
      <div className="border p-4 m-4 rounded-lg bg-gray-100 bg-opacity-50">
        <h2 className="mt-4 mb-5">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>The cart is empty...</p>
        ) : (
          cartItems.map(item => (
            <div className="" key={item.id}>
              <div className="flex mb-4 justify-between ">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              </div>
              <div className="flex gap-[40px] justify-between items-center">
              <p>Qnt: {item.quantity}</p>
              <button className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-purple-600 transition duration-200 hover:text-purple-400" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          )))}
          <div className="mt-6 text-lg font-semibold text-right">
            Total: ${total.toFixed(2)}
          </div>
          <button className="mt-2 p-24 py-2 rounded-md text-xl bg-purple-600 text-white transition duration-200 hover:bg-purple-800">Checkout</button>
      </div>
    );
  };

  export default Cart