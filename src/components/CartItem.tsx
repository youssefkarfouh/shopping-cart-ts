import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { CartItemInt } from "../interfaces/models";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

function CartItem({ id, quantity }: CartItemInt) {
  const { removeFromCart } = useShoppingCartContext();

  const item = storeItems.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img src={item.imgUrl} alt="" className="w-32 h-20 object-cover" />
        <div>
          <p>
            Book {quantity > 1 &&  <span className="text-sm text-gray-300">* {quantity}</span>} 
          </p>
          <span className="text-sm text-gray-300">{formatCurrency(item.price)}</span>
        </div>
      </div>
      <div onClick={() => removeFromCart(id)} className="flex gap-2 items-center">
        <span>{formatCurrency(item.price * quantity) }</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="15px"
          height="15px"
          fill="red"
          cursor={"pointer"}
          
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
      </div>
    </div>
  );
}

export default CartItem;
