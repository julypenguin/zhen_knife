import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImgFit from '../Base/ImgFit'
import img280 from '../../img/sid/img280.jpg'
import data from './multifunctional.json'
import { StarIcon } from '@heroicons/react/solid'

const Multifunctional = () => {
    return (
        <div className='container py-4 px-2 mb-12'>
            <div className='grid grid-cols-2'>
                <div className='col-span-1 px-4'>
                    <div className='mb-4 w-1/3 h-1 bg-green-400 lg:mb-12'></div>
                    {data.func_list.map((funcText) => (
                        <div key={funcText.id}>
                            <div className='mb-2 flex'>
                                <StarIcon className='h-6 w-6 text-green-400 mr-2' />
                                <FormattedMessage id={`deshboard.${funcText.title_intl}`} />
                            </div>
                            <div className='ml-8 mb-8'>
                                <FormattedMessage id={`deshboard.${funcText.desc_intl}`} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='col-span-1'>
                    <div className='px-4'>
                        <ImgFit src={img280} className='w-full pt-60p' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Multifunctional;