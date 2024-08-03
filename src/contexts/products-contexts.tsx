import { createContext, ReactNode, useEffect, useState } from 'react'
import { MenuData } from '../data/menu-data'

interface ProductDataProps {
  id: number
  image: string
  title: string
  price: string
  productAmount: number
}

interface AddressDeliveryProps {
  address: string
  addressNumber: number
  district: string
  city: string
  uf: string
  paymentMethod: 'credit' | 'debit' | 'money'
}

interface ProductsContextsData {
  productsData: typeof MenuData
  newOrder: ProductDataProps[]
  addressDelivery: AddressDeliveryProps | undefined
  addToCart: (productData: ProductDataProps, productAmount: number) => void
  removeFromCart: (id: number) => void
  deliveryData: (data: AddressDeliveryProps | undefined) => void
  productOnCart: {
    id: number
    productAmount: number
  }[]
}

interface ProductContextsProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextsData)

export function ProductsContextProvider({
  children,
}: ProductContextsProviderProps) {
  const [newOrder, setNewOrder] = useState<ProductDataProps[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:product-order-1.0.0',
    )
    return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : []
  })
  const [addressDelivery, setAddressDelivery] = useState<
    AddressDeliveryProps | undefined
  >()

  const productsData = MenuData

  function addToCart(productData: ProductDataProps, productAmount: number) {
    const { id, image, title, price } = productData
    const order = {
      id,
      image,
      title,
      price,
      productAmount,
    }

    setNewOrder((product) => [...product, order])
  }

  function removeFromCart(id: number) {
    const newCart = newOrder.filter((order) => order.id !== id)

    if (newCart) {
      setNewOrder(newCart)
    }
  }

  function deliveryData(data: AddressDeliveryProps | undefined) {
    setAddressDelivery(data)
    setNewOrder([])
  }

  const productOnCart = newOrder.map((order) => {
    return {
      id: order.id,
      productAmount: order.productAmount,
    }
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(newOrder)

    localStorage.setItem('@coffee-delivery:product-order-1.0.0', stateJSON)
  }, [newOrder])

  return (
    <ProductsContext.Provider
      value={{
        productsData,
        addToCart,
        removeFromCart,
        newOrder,
        productOnCart,
        deliveryData,
        addressDelivery,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
