import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StorItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem({ id, name, price, imgUrl }: StorItemProps) {
  const {
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCartContext();

  const quantity = getItemQuantity(id);

  return (
    <div>
      <img src={imgUrl} className="h-52 w-full object-cover" alt="" />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h3 className="text-base font-semibold">{name}</h3>
          <span className="text-sm">{formatCurrency(price)}</span>
        </div>
        <div>
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(id)}
              className="w-full bg-blue-500 py-2 px-3 text-center text-white text-base"
            >
              + Add to cart
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => decreaseCartQuantity(id)}
                  className="bg-blue-500 text-white rounded-sm py-1 px-3"
                >
                  -
                </button>
                <span> {quantity} in cart </span>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="bg-blue-500 text-white rounded-sm py-1 px-3"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="bg-red-500 py-2 px-3 text-center text-white text-base"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
