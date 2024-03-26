import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
    palceOrder: () => void
}

export const OrderTotal = ({order, tip, palceOrder} : OrderTotalsProps) => {

    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0 ), [order])
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-bold text-2xl">Totales y Propinas:</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-semibold">{formatCurrency(subTotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className="font-semibold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-semibold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>
        <button
            className="w-full bg-black hover:bg-gray-900 transition p-3 uppercase text-white font-bold mt-10 disabled:opacity-20"
            disabled={totalAmount === 0}
            onClick={palceOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}
