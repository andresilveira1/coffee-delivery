import { createContext, ReactNode } from 'react'
import { MenuData } from '../data/MenuData'

interface ProductsContextsData {
  productsData: typeof MenuData
}

interface ProductContextsProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextsData)

export function ProductsContextProvider({
  children,
}: ProductContextsProviderProps) {
  const productsData = MenuData

  return (
    <ProductsContext.Provider value={{ productsData }}>
      {children}
    </ProductsContext.Provider>
  )
}
