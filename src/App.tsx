import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { ProductsContextProvider } from './contexts/products-contexts'

export function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Router />
      </ProductsContextProvider>
    </BrowserRouter>
  )
}
