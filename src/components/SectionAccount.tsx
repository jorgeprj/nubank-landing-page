import React from 'react'
import Image from 'next/image'
import ImageAccount1 from '@/assets/account1.png'
import ImageAccount2 from '@/assets/account2.png'
import { FaArrowRight } from 'react-icons/fa6'

const SectionAccount = () => {
    return (
        <section className="bg-gray-100 gap-16 items-center py-16 px-4 md:px-8 lg:px-16 lg:grid lg:grid-cols-2">
            <div className="font-light text-neutral-500 sm:text-lg">
                <h3 className="text-sm md:text-md lg:text-normal font-bold text-primary mb-2 uppercase">Conta Nubank</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">Nubank Ultravioleta</h2>
                <p className="text-normal md:text-lg lg:text-xl text-gray-600 mb-8">
                    Muito mais que um cartão: uma plataforma exclusiva de benefícios. Aproveite também
                    mais de 150 parceiros com ofertas para você!
                </p>
                <a href="#" className='flex items-center gap-2 text-primary'>
                    Saiba Mais
                    <FaArrowRight className='text-xs'/>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <a href="/driver/3">
                    <Image src={ImageAccount1} alt='Nubank Phone' className="w-full rounded-lg transform transition-transform duration-300 hover:scale-105" />
                </a>
                <a href="/driver/1">
                    <Image src={ImageAccount2} alt='Nubank Phone' className="mt-4 w-full lg:mt-10 rounded-lg transform transition-transform duration-300 hover:scale-105"/>
                </a>
            </div>
        </section>
    )
}

export default SectionAccount