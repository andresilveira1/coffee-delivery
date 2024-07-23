import { useState } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'

interface CounterProps {
  className: string
  totalQuantityOfProduct: (amount: number) => void
}

export function Counter({ className, totalQuantityOfProduct }: CounterProps) {
  const [productAmount, setProductAmount] = useState(1)

  function handleCounterMinus() {
    let total = productAmount

    if (productAmount > 1) {
      setProductAmount((prevProductAmount) => --prevProductAmount)
      totalQuantityOfProduct(--total)
    }
  }

  function handleCounterPlus() {
    let total = productAmount
    setProductAmount((prevProductAmount) => ++prevProductAmount)

    totalQuantityOfProduct(++total)
  }

  return (
    <div className={className}>
      <button
        type="button"
        title="Diminuir a quantidade desejada em 1"
        className="text-violet-650 hover:text-violet-930"
        onClick={handleCounterMinus}
      >
        <Minus />
      </button>

      <span>{productAmount}</span>

      <button
        type="button"
        title="Aumenta a quantidade desejada em 1"
        className="text-violet-650 hover:text-violet-930"
        onClick={handleCounterPlus}
      >
        <Plus />
      </button>
    </div>
  )
}
