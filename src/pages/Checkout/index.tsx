import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Counter } from '../../components/Counter'
import { svg } from '../../assets/import/svg'

const userAddressAndPaymentMethodValidationSchema = zod.object({
  cep: zod.number().min(8, 'Digite os 8 números do seu CEP'),
  address: zod.string(),
  addressNumber: zod.number(),
  complement: zod.string().optional(),
  district: zod.string(),
  city: zod.string(),
  uf: zod.string().toUpperCase(),
  paymentMethod: zod.enum(['credit', 'debit', 'money']),
})

type userAddressAndPaymentMethodValidationSchema = zod.infer<
  typeof userAddressAndPaymentMethodValidationSchema
>

export function Checkout() {
  const { register, handleSubmit, control, watch } =
    useForm<userAddressAndPaymentMethodValidationSchema>({
      resolver: zodResolver(userAddressAndPaymentMethodValidationSchema),
    })

  function handleOrderConfirmation(
    data: userAddressAndPaymentMethodValidationSchema,
  ) {
    console.log(data)
  }

  const cep = watch('cep')
  const address = watch('address')
  const addressNumber = watch('addressNumber')
  const district = watch('district')
  const city = watch('city')
  const uf = watch('uf')
  const paymentMethod = watch('paymentMethod')

  const isSubmitDisabled =
    !cep ||
    !address ||
    !addressNumber ||
    !district ||
    !city ||
    !uf ||
    !paymentMethod

  return (
    <main className="mt-28">
      <div className="pt-10">
        <strong className="font-alt text-lg font-bold text-base-700">
          Complete seu pedido
        </strong>

        <form
          onSubmit={handleSubmit(handleOrderConfirmation)}
          className="mt-4 grid grid-cols-checkout"
        >
          <div className="p-10 rounded-md bg-base-50 w-[40rem]">
            <legend className="flex gap-2 mb-8">
              <MapPinLine size={22} className="text-yellow-650" />

              <div>
                <span className="text-base-700">Endereço de Entrega</span>
                <p className="text-sm text-base-500">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </legend>

            <label htmlFor="cep" className="sr-only">
              CEP - Código de Endereçamento Postal
            </label>
            <input
              id="cep"
              type="number"
              placeholder="CEP"
              {...register('cep', { valueAsNumber: true })}
              className="text-base-500 text-sm rounded p-3 mb-4 w-[12.5rem] bg-base-100 border border-base-200 placeholder:text-base-300 focus:outline-yellow-650 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <label htmlFor="address" className="sr-only">
              Rua
            </label>
            <input
              id="address"
              type="text"
              placeholder="Rua"
              {...register('address')}
              className="text-base-500 text-sm bg-base-100 p-3 mb-4 w-full rounded border border-base-200 placeholder:text-base-300 focus:outline-yellow-650"
            />

            <fieldset className="flex gap-3 mb-4 w-full rounded text-base-500 text-sm">
              <label htmlFor="addressNumber" className="sr-only ">
                Número
              </label>
              <input
                id="addressNumber"
                type="number"
                placeholder="Número"
                {...register('addressNumber', { valueAsNumber: true })}
                className="w-[12.5rem] p-3 bg-base-100 border border-base-200 rounded placeholder:text-base-300 focus:outline-yellow-650 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              <div className="flex items-center flex-1 bg-base-100 rounded border focus-within:outline focus-within:outline-2 border-base-200  focus-within:outline-yellow-650 relative">
                <input
                  id="complement"
                  type="text"
                  placeholder="Complemento"
                  {...register('complement')}
                  className="w-72 p-3 bg-transparent outline-none placeholder:text-base-300"
                />

                <label
                  htmlFor="complement"
                  className="italic text-xs text-base-300 absolute right-3"
                >
                  Opcional
                </label>
              </div>
            </fieldset>

            <div className="flex gap-3 text-base-500 text-sm">
              <label htmlFor="district" className="sr-only">
                Bairro
              </label>
              <input
                id="district"
                type="text"
                placeholder="Bairro"
                {...register('district')}
                className="w-[12.5rem] p-3 bg-base-100 rounded border border-base-200 placeholder:text-base-300 focus:outline-yellow-650"
              />

              <label htmlFor="city" className="sr-only">
                Cidade
              </label>
              <input
                id="city"
                type="text"
                placeholder="Cidade"
                {...register('city')}
                className="flex-1  p-3 bg-base-100 rounded border border-base-200 placeholder:text-base-300 focus:outline-yellow-650"
              />

              <label htmlFor="uf" className="sr-only">
                Unidade federativa ou Estado
              </label>
              <input
                id="uf"
                type="text"
                placeholder="UF"
                maxLength={2}
                {...register('uf')}
                className="uppercase w-[3.75rem] p-3 bg-base-100 rounded border border-base-200 placeholder:text-base-300 focus:outline-yellow-650"
              />
            </div>
          </div>

          <div className="p-10 mt-3 rounded-md bg-base-50 w-[40rem]">
            <div className="flex gap-2">
              <CurrencyDollar size={22} className="text-violet-650" />
              <div>
                <strong className="font-normal text-base-700">Pagamento</strong>
                <p className="text-sm text-base-500">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <Controller
              name="paymentMethod"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup.Root
                  onValueChange={field.onChange}
                  className="flex items-center gap-3 mt-8"
                >
                  <RadioGroup.Item
                    value="credit"
                    id="credit"
                    className="bg-base-200 flex-1 h-[3.188rem] rounded-md border hover:bg-base-250 data-[state=checked]:bg-violet-150 data-[state=checked]:border-violet-650"
                  >
                    <RadioGroup.Indicator />
                    <label
                      htmlFor="credit"
                      className="flex item-center justify-start gap-3 ml-4 cursor-pointer"
                    >
                      <CreditCard size={16} className="text-violet-650" />
                      <span className="uppercase text-xs text-base-500">
                        Cartão de crédito
                      </span>
                    </label>
                  </RadioGroup.Item>

                  <RadioGroup.Item
                    value="debit"
                    id="debit"
                    className="bg-base-200 flex-1 h-[3.188rem] rounded-md border hover:bg-base-250 data-[state=checked]:bg-violet-150 data-[state=checked]:border-violet-650"
                  >
                    <RadioGroup.Indicator />
                    <label
                      htmlFor="debit"
                      className="flex item-center justify-start gap-3 ml-4 cursor-pointer"
                    >
                      <Bank size={16} className="text-violet-650" />
                      <span className="uppercase text-xs text-base-500">
                        Cartão de débito
                      </span>
                    </label>
                  </RadioGroup.Item>

                  <RadioGroup.Item
                    value="money"
                    id="money"
                    className="bg-base-200 flex-1 h-[3.188rem] rounded-md border hover:bg-base-250 data-[state=checked]:bg-violet-150 data-[state=checked]:border-violet-650"
                  >
                    <RadioGroup.Indicator />
                    <label
                      htmlFor="money"
                      className="flex item-center justify-start gap-3 ml-4 cursor-pointer"
                    >
                      <Money size={16} className="text-violet-650" />
                      <span className="uppercase text-xs text-base-500">
                        Dinheiro
                      </span>
                    </label>
                  </RadioGroup.Item>
                </RadioGroup.Root>
              )}
            />
          </div>

          <aside className="relative col-start-2 row-start-1 row-span-2 w-[28rem] h-[31.125rem] p-10 ml-8 bg-base-50 rounded-tl-md rounded-tr-[2.75rem] rounded-br-md rounded-bl-[2.75rem]">
            <strong className="absolute -top-11 left-0 font-alt text-lg font-bold text-base-700">
              Cafés selecionados
            </strong>

            <div className="h-[255px] overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-yellow-550 [&::-webkit-scrollbar-thumb]:rounded-lg">
              <div className="flex items-center gap-5 py-2 px-1">
                <img src={svg.espresso} alt="" className="w-16" />

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center justify-between">
                    <strong className="font-normal text-base-700">
                      Expresso Tradicional
                    </strong>
                    <span className="font-bold text-base-500">R$ 9,90</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Counter className="flex items-center gap-2 bg-base-200 p-2 rounded-md h-8" />
                    <button className="flex items-center gap-1 p-2 text-xs text-base-700 uppercase rounded-md bg-base-200 hover:bg-base-250">
                      <Trash size={16} className="text-violet-650" />
                      Remover
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t mt-6 mb-6" />

              <div className="flex items-center gap-5 py-2 px-1">
                <img src={svg.espresso} alt="" className="w-16" />

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center justify-between">
                    <strong className="font-normal text-base-700">
                      Expresso Tradicional
                    </strong>
                    <span className="font-bold text-base-500">R$ 9,90</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Counter className="flex items-center gap-2 bg-base-200 p-2 rounded-md h-8" />
                    <button className="flex items-center gap-1 p-2 text-xs text-base-700 uppercase rounded-md bg-base-200 hover:bg-base-250">
                      <Trash size={16} className="text-violet-650" />
                      Remover
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="border-t mt-6 mb-6" /> */}

              {/* <div className="flex items-center gap-5 py-2 px-1">
                <img src={svg.espresso} alt="" className="w-16" />

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center justify-between">
                    <strong>Expresso Tradicional</strong>
                    <span>R$ 9,90</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Counter />
                    <button className="flex items-center gap-1 p-2 text-xs uppercase rounded-md bg-base-200 hover:bg-base-250">
                      <Trash size={16} />
                      Remover
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t mt-6 mb-6" />

              <div className="flex items-center gap-5 py-2 px-1">
                <img src={svg.espresso} alt="" className="w-16" />

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center justify-between">
                    <strong>Expresso Tradicional</strong>
                    <span>R$ 9,90</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Counter />
                    <button className="flex items-center gap-1 p-2 text-xs uppercase rounded-md bg-base-200 hover:bg-base-250">
                      <Trash size={16} />
                      Remover
                    </button>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-base-500">Total de itens</p>
                <span className="text-base-500">R$ 29,70</span>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-base-500">Entrega</p>
                <span className="text-base-500">R$ 3,50</span>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-base-700">Total</p>
                <span className="text-xl font-bold text-base-700">
                  R$ 33,20
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitDisabled}
                className="uppercase font-bold text-sm text-white mt-3 py-3 bg-yellow-550 rounded-md enabled:hover:bg-yellow-650 transition-all disabled:cursor-not-allowed disabled:opacity-70"
              >
                Confirmar pedido
              </button>
            </div>
          </aside>
        </form>
      </div>
    </main>
  )
}
