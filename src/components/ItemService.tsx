import React from 'react'

type Props = {
    icon: React.ReactNode; // Ícone do serviço
    description: string; // Descrição do serviço
}

const ItemService = ({ icon, description }: Props) => {
    return (
        <div className="flex items-center space-x-4 pb-8 border-b-2">
            {icon}
            <p className="text-neutral-500">{description}</p>
        </div>
    )
}

export default ItemService
