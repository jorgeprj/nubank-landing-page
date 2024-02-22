import React, { ReactNode } from 'react'

type Props = {
    source: string;
    icon: ReactNode;
}

const DownloadButton = ({ source, icon }: Props) => {

    return (
        <div className='flex text-white items-center gap-4'>
            {icon}
            <a href='#' className='text-left'>
                <p className='text-sm'>Download via</p>
                <p className='font-bold text-lg'>{source}</p>
            </a>
        </div>
    )
}

export default DownloadButton