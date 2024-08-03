import { MapPinLine } from '@phosphor-icons/react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Cart } from './components/cart'
import { TotalTransaction } from './components/total-transaction'
import { Helmet } from 'react-helmet-async'
import { PaymentMethod } from './components/payment-method'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/products-contexts'
import { useNavigate } from 'react-router-dom'

const userAddressAndPaymentMethodValidationSchema = zod.object({
  cep: zod
    .string()
    .length(8, 'Digite os 8 números do seu CEP')
    .transform((value) => Number(value)),
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
  const { deliveryData } = useContext(ProductsContext)
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting },
  } = useForm<userAddressAndPaymentMethodValidationSchema>({
    resolver: zodResolver(userAddressAndPaymentMethodValidationSchema),
    defaultValues: {
      cep: undefined,
      address: '',
      addressNumber: undefined,
      district: '',
      city: '',
      complement: '',
      paymentMethod: undefined,
      uf: '',
    },
  })

  const navigate = useNavigate()

  async function handleOrderConfirmation(
    data: userAddressAndPaymentMethodValidationSchema,
  ) {
    const { address, addressNumber, city, uf, district, paymentMethod } = data

    deliveryData({ address, addressNumber, city, uf, district, paymentMethod })

    navigate('/success')
  }

  const deliveryAddress = watch()

  const isSubmitDisabled =
    !deliveryAddress.address ||
    !deliveryAddress.addressNumber ||
    !deliveryAddress.cep ||
    !deliveryAddress.city ||
    !deliveryAddress.district ||
    !deliveryAddress.paymentMethod ||
    !deliveryAddress.uf

  return (
    <main className="mt-28">
      <Helmet title="Checkout" />

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
              {...register('cep', { required: true })}
              className="text-base-500 text-sm rounded p-3 mb-4 w-[12.5rem] bg-base-100 border border-base-200 placeholder:text-base-300 focus:outline-yellow-650 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <label htmlFor="address" className="sr-only">
              Rua
            </label>
            <input
              id="address"
              type="text"
              placeholder="Rua"
              {...register('address', { required: true })}
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
                {...register('addressNumber', {
                  valueAsNumber: true,
                  required: true,
                })}
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
                {...register('district', { required: true })}
                className="w-[12.5rem] p-3 bg-base-100 rounded border border-base-200 placeholder:text-base-300 focus:outline-yellow-650"
              />

              <label htmlFor="city" className="sr-only">
                Cidade
              </label>

              <input
                id="city"
                type="text"
                placeholder="Cidade"
                {...register('city', { required: true })}
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
                {...register('uf', { required: true })}
                className="uppercase w-[3.75rem] p-3 bg-base-100 rounded border border-base-200 placeholder:text-base-300 focus:outline-yellow-650"
              />
            </div>
          </div>

          <PaymentMethod useFormControl={control} />

          <aside className="relative col-start-2 row-start-1 row-span-2 w-[28rem] h-[31.125rem] p-10 ml-8 bg-base-50 rounded-tl-md rounded-tr-[2.75rem] rounded-br-md rounded-bl-[2.75rem]">
            <strong className="absolute -top-11 left-0 font-alt text-lg font-bold text-base-700">
              Cafés selecionados
            </strong>

            <Cart />

            <TotalTransaction
              isSubmitDisabled={isSubmitDisabled}
              isSubmitting={isSubmitting}
            />
          </aside>
        </form>
      </div>
    </main>
  )
}
