import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

interface CounterProps {
  className: string
}

export function Counter({ className }: CounterProps) {
  const [counter, setCounter] = useState(1)

  function handleCounterMinus() {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1)
    }
  }

  function handleCounterPlus() {
    setCounter((prevCounter) => prevCounter + 1)
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

      <span>{counter}</span>

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
