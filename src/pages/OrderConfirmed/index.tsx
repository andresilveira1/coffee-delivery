import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import orderConfirmed from '../../assets/orderConfirmed.svg'

export function OrderConfirmed() {
  return (
    <main className="mt-48">
      <div className="flex flex-col gap-1 w-fit">
        <h1 className="flex items-center font-alt font-extrabold text-3xl leading-5 h-10 text-yellow-650">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-xl leading-5 text-base-700">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>

      <section className="flex items-center gap-24 mt-7">
        <div className="rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] bg-gradient-to-r from-yellow-650 to-violet-650 p-px">
          <div className="p-10 bg-white rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] ">
            <ul className="flex flex-col gap-8 text-base-500">
              <li className="flex items-center gap-3">
                <MapPin
                  weight="fill"
                  className="w-8 h-8 p-2 text-white bg-violet-650 rounded-full"
                />
                Entrega em <strong></strong>
              </li>
              <li className="flex items-center gap-3">
                <Timer
                  weight="fill"
                  className="w-8 h-8 p-2 text-white bg-yellow-550 rounded-full"
                />
                Previsão de entrega <strong>20 min - 30 min</strong>
              </li>
              <li className="flex items-center gap-3">
                <CurrencyDollar className="w-8 h-8 p-2 text-white bg-yellow-650 rounded-full" />
                Pagamento na entrega <strong></strong>
              </li>
            </ul>
          </div>
        </div>

        <img src={orderConfirmed} alt="" />
      </section>
    </main>
  )
}
