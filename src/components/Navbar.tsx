import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCartContext();
  return (
    <nav className="shadow-sm py-4">
      <div className="container">
        <div className="flex justify-between">
          <ul className="flex gap-4">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/store"}>Store</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>

          {cartQuantity > 0 && (
            <button onClick={openCart} className="relative w-8 h-8">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="176"
                  cy="416"
                  r="16"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                ></circle>
                <circle
                  cx="400"
                  cy="416"
                  r="16"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                 strokeWidth="32"
                ></circle>
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                 strokeWidth="32"
                  d="M48 80h64l48 272h256"
                ></path>
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                 strokeWidth="32"
                  d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
                ></path>
              </svg>
              <span className="absolute -right-2 -top-2 inline-block size-4 rounded-full bg-red-600 text-center text-xs  text-white">
                {cartQuantity}
              </span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
