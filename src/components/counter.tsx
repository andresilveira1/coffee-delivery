import { useEffect, useState } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'

interface CounterProps {
  className: string
  totalAmountOnCart?: number
  totalQuantityOfProduct?: (amount: number) => void
}

export function Counter({
  className,
  totalQuantityOfProduct,
  totalAmountOnCart,
}: CounterProps) {
  const [productAmount, setProductAmount] = useState(1)
  const [productAmountOnCart, setProductAmountOnCart] = useState<
    number | undefined
  >(0)

  function handleCounterMinus() {
    let total = productAmount

    if (productAmount > 1) {
      setProductAmount((prevProductAmount) => --prevProductAmount)
      totalQuantityOfProduct?.(--total)
    }
  }

  function handleCounterPlus() {
    let total = productAmount
    setProductAmount((prevProductAmount) => ++prevProductAmount)

    totalQuantityOfProduct?.(++total)
  }

  useEffect(() => {
    function isAnyProductOnCart() {
      setProductAmountOnCart(totalAmountOnCart)
    }

    isAnyProductOnCart()
  }, [productAmountOnCart, totalAmountOnCart])

  return (
    <div className={className}>
      <button
        type="button"
        title="Diminuir a quantidade desejada em 1"
        disabled={productAmountOnCart?.toString().length !== undefined}
        className="text-violet-650 hover:text-violet-930 disabled:hover:text-violet-650"
        onClick={handleCounterMinus}
      >
        <Minus />
      </button>

      <span>{productAmountOnCart ?? productAmount}</span>

      <button
        type="button"
        title="Aumenta a quantidade desejada em 1"
        disabled={productAmountOnCart?.toString().length !== undefined}
        className="text-violet-650 hover:text-violet-930 disabled:hover:text-violet-650"
        onClick={handleCounterPlus}
      >
        <Plus />
      </button>
    </div>
  )
}
