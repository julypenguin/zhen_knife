import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import ImgFit from '../Base/ImgFit'
import background_vag from '../../img/background_vag.jpg'
import data from './viewmainData.json'

const ViewMain = () => {
    return (
        <ImgFit className='w-full pt-60p' src={background_vag}>
            <div className='flex flex-col justify-center absolute left-4 top-0 w-11/12 mt-4 md:mt-8 md:left-8 lg:mt-16 lg:left-16'>
                <div className='w-full flex flex-col '>
                    <div className='w-1/2 h-52 flex flex-col justify-between sm:h-72 md:h-80 lg:h-96'>
                        <h1 className='text-2xl font-playfair leading-tight text-white italic text-shadow-green-400 text-center sm:text-4xl md:text-5xl lg:text-6xl'>{data.brand}<br />{data.product}</h1>
                        <div className='flex justify-center'>
                            <div className='bg-green-300 pt-1 w-1/3'></div>
                        </div>
                        <div className='text-2xl text-white font-abel font-black italic text-shadow-black text-center sm:text-3xl md:text-4xl lg:text-5xl'>
                            <FormattedMessage id={`deshboard.${data.title_intl}`} />
                        </div>
                        <div className='text-white text-xl font-extrabold text-center'>
                            <span><FormattedMessage id={`deshboard.${data.text_intl}`} /></span>
                            <span>?</span>
                        </div>
                        <div className='flex justify-center'>
                            <button className='text-sm bg-gray-500 rounded border-2 border-green-300 px-4 py-2 tracking-widest font-jhengHei text-white transition-all duration-300 hover:bg-green-300 md:text-base md:px-6 md:py-3 lg:text-lg'><FormattedMessage id={`deshboard.${data.button_intl}`} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </ImgFit>
    );
};

export default ViewMain;