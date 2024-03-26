import MenuItems from "./components/MenuItems";
import { OrderContents } from "./components/OrderContents";
import { OrderTotal } from "./components/OrderTotal";
import { TipPercenTageForm } from "./components/TipPercenTageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, tip, setTip, addItem, removeItem, palceOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl text-white font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto mt-10 py-10 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-extrabold">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />

              <TipPercenTageForm setTip={setTip} tip={tip} />

              <OrderTotal order={order} tip={tip} palceOrder={palceOrder} />
            </>
          ) : (
            <p className="text-center">La orden está vacía</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
