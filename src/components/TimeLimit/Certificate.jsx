import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImgFit from '../Base/ImgFit'
import img281 from '../../img/sid/img281.jpg'
import data from './certificate.json'

const Certificate = () => {
    return (
        <div className='container bg-black py-8 mb-12'>
            <div className='grid grid-cols-1 py-12 px-4 lg:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <div className='text-gray-300 text-xl mb-6'>
                        <FormattedMessage id={`deshboard.${data.title_intl}`} />
                    </div>
                    <div className='w-1/3 border-b-2 border-green-400  mb-6' />
                    <div className='text-white text-4xl font-bold  mb-4 sm:text-5xl'>
                        <FormattedMessage id={`deshboard.${data.company_intl}`} />
                    </div>
                    <div className='text-gray-300 text-lg mb-6'>{data.company_en}</div>
                </div>
                <div><ImgFit src={img281} className='w-10/12 pt-80p lg:w-full' /></div>
            </div>
        </div>
    );
};

export default Certificate;