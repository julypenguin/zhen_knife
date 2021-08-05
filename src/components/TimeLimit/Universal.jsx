import React from 'react';
import ImgFit from '../Base/ImgFit'
import img260 from '../../img/img260.png'
import data from './universal.json'
import { FormattedMessage } from 'react-intl';

const Universal = () => {
    return (
        <div>
            <ImgFit src={img260} className='w-full pt-60p' />
            <div className='absolute inset-0 flex justify-center items-center'>
                <div className='w-9/12'>
                    <div className='bg-black p-4'>
                        <div className="border-2 border-white py-4 flex justify-center sm:py-8">
                            <div className='flex justify-center flex-col w-10/12 ms:w-1/2'>
                                {data.text_list.map((text) => (
                                    <div
                                        key={text.id}
                                        className="flex justify-center"
                                    >
                                        <div className='font-vidaloka text-white text-3xl sm:text-4xl lg:text-5xl tracking-wider'>
                                            <FormattedMessage id={`deshboard.${text.text_intl}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Universal;