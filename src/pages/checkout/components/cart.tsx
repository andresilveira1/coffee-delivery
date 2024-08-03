import { useContext } from 'react'
import { Trash } from '@phosphor-icons/react'

import { ProductsContext } from '../../../contexts/products-contexts'
import { Counter } from '../../../components/counter'

export function Cart() {
  const { newOrder, removeFromCart } = useContext(ProductsContext)

  function handleRemoveFromCart(id: number) {
    console.log(id)
    removeFromCart(id)
  }

  return (
    <div className="h-[255px] overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-yellow-550 [&::-webkit-scrollbar-thumb]:rounded-lg">
      {newOrder.map((order) => {
        const orderPrice = Number(order.price.replace(',', '.'))

        return (
          <div key={order.id}>
            <div className="flex items-center gap-5 py-2 px-1">
              <img src={order.image} alt="" className="w-16" />

              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between">
                  <strong className="font-normal text-base-700">
                    {order.title}
                  </strong>
                  <span className="font-bold text-base-500">
                    R${' '}
                    {String(
                      (orderPrice * order.productAmount).toFixed(2),
                    ).replace('.', ',')}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Counter className="flex items-center gap-2 bg-base-200 p-2 rounded-md h-8" />
                  <button
                    type="button"
                    className="flex items-center gap-1 p-2 text-xs text-base-700 uppercase rounded-md bg-base-200 hover:bg-base-250"
                    onClick={() => handleRemoveFromCart(order.id)}
                  >
                    <Trash size={16} className="text-violet-650" />
                    Remover
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t mt-6 mb-6" />
          </div>
        )
      })}
    </div>
  )
}
