import React from 'react'

import Logo from '@/assets/logo.png'
import Image from 'next/image'
import ItemMenu from './ItemMenu'
import { FaRegCircleUser } from 'react-icons/fa6'

const Header = () => {
    return (
        <header className="bg-primary p-4 px-8 flex justify-between items-center">
            <div className="flex items-center">
                <Image src={Logo} alt='Logo' className='w-10' />
            </div>

            <nav className="hidden md:flex space-x-16">
                <ItemMenu>Para você</ItemMenu>
                <ItemMenu>Para empresas</ItemMenu>
                <ItemMenu>Serviços</ItemMenu>
                <ItemMenu>Ajuda</ItemMenu>
            </nav>

            <button className="flex items-center text-white font-bold gap-4">
                <FaRegCircleUser />
                Acessar conta
            </button>
        </header>
    )
}

export default Header