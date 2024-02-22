import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa6'

import WomanImage from '@/assets/woman.png'
import Image from 'next/image'
import DownloadButton from './DownloadButton'


const SectionHero = () => {
    return (
        <section className="bg-img_bg_hero bg-no-repeat bg-center bg-cover px-4 pt-8 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 text-center md:text-left md:mr-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Tenha N possibilidades de produto para N possibilidades na vida
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
                    Conta gratuita, cartão de crédito sem anuidade, empréstimo e muito mais: tudo num único app.
                </p>
                <div className="flex flex-row gap-16 justify-center md:justify-start">
                    <DownloadButton source='Apple' icon={<FaApple className='text-4xl' />}/>
                    <DownloadButton source='Google Play' icon={<FaGooglePlay className='text-3xl' />}/>
                </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
                <Image src={WomanImage} alt='Mulher' className='w-full md:max-w-md lg:max-w-lg mx-auto'/>
            </div>
        </section>
    )
}

export default SectionHero