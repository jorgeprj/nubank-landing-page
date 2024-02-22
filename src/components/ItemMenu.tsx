import React, { ReactNode } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

type Props = {
    children: ReactNode;
}

const ItemMenu = ({children}: Props) => {
    return (
        <a href="#" className='flex items-center gap-3 text-neutral-300 font-bold hover:text-white'>
            {children}
            <FaChevronDown className='text-xs text-violet-500 hover:text-white'/>
        </a>

    )
}

export default ItemMenu