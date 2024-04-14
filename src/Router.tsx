import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { OrderConfirmed } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
