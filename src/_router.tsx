import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts'

import { Home } from './pages/_home'
import { Checkout } from './pages/_checkout'
import { OrderConfirmed } from './pages/order-confirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
