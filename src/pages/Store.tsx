import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

function Store() {
  return (
    <>
      <div>Store</div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item}/>
        ))}
      </div>
    </>
  );
}

export default Store;
