import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../../contexts/products-contexts'

interface TotalTransactionProps {
  isSubmitDisabled: boolean
  isSubmitting: boolean
}

export function TotalTransaction({
  isSubmitDisabled,
  isSubmitting,
}: TotalTransactionProps) {
  const { newOrder } = useContext(ProductsContext)
  const [totalOrderPrice, setTotalOrderPrice] = useState('')
  const [totalOrderPriceWithDeliveryFee, setTotalOrderPriceWithDeliveryFee] =
    useState('')

  const deliveryFee = 3.5

  useEffect(() => {
    const sumValue = newOrder
      .map(
        (order) => Number(order.price.replace(/,/g, '.')) * order.productAmount,
      )
      .reduce((total, products) => total + products, deliveryFee)
      .toFixed(2)

    const totalPrice = Number(sumValue) - deliveryFee

    setTotalOrderPrice(totalPrice.toString().replace('.', ','))
    setTotalOrderPriceWithDeliveryFee(sumValue.replace('.', ','))
  }, [totalOrderPrice, newOrder])
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-base-500">Total de itens</p>
        <span className="text-base-500">
          R${' '}
          {Number(totalOrderPrice.replace(',', '.'))
            .toFixed(2)
            .toString()
            .replace('.', ',')}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-base-500">Entrega</p>
        <span className="text-base-500">
          R$ {deliveryFee.toFixed(2).toString().replace('.', ',')}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-base-700">Total</p>
        <span className="text-xl font-bold text-base-700">
          R$ {totalOrderPriceWithDeliveryFee}
        </span>
      </div>

      <button
        type="submit"
        disabled={isSubmitDisabled || isSubmitting}
        className="uppercase font-bold text-sm text-white mt-3 py-3 bg-yellow-550 rounded-md enabled:hover:bg-yellow-650 transition-all disabled:cursor-not-allowed disabled:opacity-70"
      >
        Confirmar pedido
      </button>
    </div>
  )
}
