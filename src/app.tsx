import { BrowserRouter } from 'react-router-dom'

import { Router } from './router'
import { ProductsContextProvider } from './contexts/products-contexts'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Coffee delivery" />
      <BrowserRouter>
        <ProductsContextProvider>
          <Router />
        </ProductsContextProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}
