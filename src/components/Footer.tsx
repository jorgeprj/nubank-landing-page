import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import Image from 'next/image'
import Logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-primary text-white p-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className="flex flex-col mb-4 md:mb-0 gap-4 justify-center items-center md:justify-start md:items-start">
                    <Image src={Logo} alt='Logo' className='w-10' />
                    <span className="font-semibold">Tenha N possibilidades</span>
                </div>
                <div className="flex items-center space-x-4 justify-center md:justify-start">
                    <a href="https://www.linkedin.com/in/jorgeprj/" className="text-neutral-300 text-2xl hover:text-white">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/jorgeprj" className="text-neutral-300 text-2xl hover:text-white">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer