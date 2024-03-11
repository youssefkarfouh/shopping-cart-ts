import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

function ShoppingCart() {
  const { closeCart, isOpen, cartItems } = useShoppingCartContext();
  return (
    <aside
      className={`fixed text-base right-0 bg-white top-0 w-[400px] min-h-screen overflow-auto p-4 z-50 shadow-[0_0_13px_-7px_black] transition  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <span className="absolute right-4 top-4" onClick={closeCart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="20px"
          height="20px"
          cursor={"pointer"}
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
      </span>
      <h4 className="text-lg border-b">Cart</h4>
      <div className="my-4 flex flex-col gap-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <p className="text-right font-semibold">
        Total{" "}
        {formatCurrency(
          cartItems.reduce((total, current) => {
            const item = storeItems.find((i) => i.id === current.id);
            return total + (item?.price || 0) * current.quantity;
          }, 0)
        )}
      </p>
    </aside>
  );
}

export default ShoppingCart;
