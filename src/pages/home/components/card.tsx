import { useContext, useState } from 'react'
import { ShoppingCartSimple, Trash } from '@phosphor-icons/react'

import { Counter } from '../../../components/counter'
import { ProductsContext } from '../../../contexts/products-contexts'

interface ProductDataProps {
  id: number
  image: string
  title: string
  price: string
  productAmount: number
}

export function Card() {
  const { productsData, addToCart, removeFromCart, newOrder, productOnCart } =
    useContext(ProductsContext)
  const [productAmount, setProductAmount] = useState(1)

  const totalQuantityOfProduct = (amount: number) => setProductAmount(amount)

  function handleAddToCart(
    productData: ProductDataProps,
    productAmount: number,
  ) {
    addToCart(productData, productAmount)
    setProductAmount(1)
  }

  function handleRemoveFromCart(id: number) {
    removeFromCart(id)
  }

  const checkIfExistAProductOnCart = newOrder.map((order) => {
    return order.id
  })

  return (
    <>
      {productsData.map((productData) => {
        return (
          <div
            key={productData.id}
            className="flex flex-col items-center w-64 px-5 pb-5 bg-base-50 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] hover:scale-110 transition-all hover:shadow-md hover:shadow-violet-650 animate-fadeUp"
          >
            <img src={productData.image} alt="" className="w-32 -mt-5 mb-3" />

            <div className="flex items-center gap-1">
              {productData.tag.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="py-1 px-2 mb-4 text-xs font-bold text-yellow-650 bg-yellow-150 w-fit rounded-[100px]"
                  >
                    {tag}
                  </span>
                )
              })}
            </div>

            <strong className="text-xl text-base-700 font-alt font-bold mb-2">
              {productData.title}
            </strong>

            <p className="text-sm text-base-300 text-center mb-8">
              {productData.description}
            </p>

            <footer className="flex w-full items-center justify-between">
              <span className="flex items-baseline gap-1 font-alt text-base-500 text-2xl font-extrabold before:content-['R$'] before:font-sans before:text-sm before:font-normal">
                {productData.price}
              </span>

              <div className="flex gap-2">
                {productOnCart.find(
                  (productCart) => productData.id === productCart.id,
                ) ? (
                  productOnCart.map((productCart) => {
                    return (
                      productCart.id === productData.id && (
                        <Counter
                          key={productCart.id}
                          className="flex items-center gap-2 bg-base-200 p-2 rounded-md"
                          totalQuantityOfProduct={totalQuantityOfProduct}
                          totalAmountOnCart={productCart.productAmount}
                        />
                      )
                    )
                  })
                ) : (
                  <Counter
                    className="flex items-center gap-2 bg-base-200 p-2 rounded-md"
                    totalQuantityOfProduct={totalQuantityOfProduct}
                  />
                )}

                {checkIfExistAProductOnCart.find(
                  (id) => id === productData.id,
                ) ? (
                  <button
                    title="Remover do carrinho"
                    onClick={() => handleRemoveFromCart(productData.id)}
                    className="p-2 text-base-50 bg-red-950 enabled:hover:bg-red-800 disabled:cursor-not-allowed transition-colors rounded-md"
                  >
                    <Trash size={22} weight="fill" />
                  </button>
                ) : (
                  <button
                    title="Adicionar ao carrinho de compras"
                    onClick={() => handleAddToCart(productData, productAmount)}
                    className="p-2 text-base-50 bg-violet-930 enabled:hover:bg-violet-650 disabled:cursor-not-allowed transition-colors rounded-md"
                  >
                    <ShoppingCartSimple size={22} weight="fill" />
                  </button>
                )}
              </div>
            </footer>
          </div>
        )
      })}
    </>
  )
}
