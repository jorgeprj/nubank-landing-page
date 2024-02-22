import { FaBarcode, FaCartShopping, FaRegCalendar } from 'react-icons/fa6'
import Image from 'next/image'
import ImagePhone from '@/assets/phone.png'

import ItemService from './ItemService'

const SectionServices = () => {
    return (
        <section className="bg-gray-100 py-16 md:py-24 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 text-center md:text-left md:mr-8">
                <h3 className="text-sm md:text-md lg:text-normal font-bold text-primary mb-2 uppercase">Conheça nosso Cartão de Crédito</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">Faça mais com seu cartão de crédito</h2>
                <p className="text-normal md:text-lg lg:text-xl text-gray-600 mb-8">
                    Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também.
                </p>

                <div className="space-y-8">
                    <ItemService icon={<FaRegCalendar className='w-8 h-8 text-primary' />} description='Faça pagamentos PIX utilizando seu cartão de crédito. Parcele e aproveite essa vantagem.' />
                    <ItemService icon={<FaBarcode className='w-8 h-8 text-primary' />} description='Pague seus boletos no crédito e parcele em até 12 vezes.' />
                    <ItemService icon={<FaCartShopping className='w-8 h-8 text-primary' />} description='Pague suas contas utilizando seu cartão de crédito. Parcele e aproveite essa vantagem.' />
                </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <Image src={ImagePhone} alt='Nubank Phone' className="w-[40%] md:max-w-md lg:max-w-lg mx-auto"/>
            </div>
        </section>

    )
}

export default SectionServices