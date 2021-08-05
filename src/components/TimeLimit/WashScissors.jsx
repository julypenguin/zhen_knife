import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import ImgFit from '../Base/ImgFit'
import WashScissorsStep1 from '../../img/WashScissorsStep1.jpg'
import WashScissorsStep2 from '../../img/WashScissorsStep2.jpg'
import WashScissorsStep3 from '../../img/WashScissorsStep3.jpg'
import data from './washScissors.json'

const WashScissors = () => {

    const imgList = {
        201: WashScissorsStep1,
        202: WashScissorsStep2,
        203: WashScissorsStep3,
    }

    const renderStepText = img => (
        <div className='absolute top-0 md:-top-8 left-0 w-full'>
            <div className='text-white pt-2 text-6xl font-medium italic text-shadow-gray-900'><FormattedMessage id={`deshboard.${img.step_intl}`} /></div>
            <div className='text-white text-xl font-bold italic text-shadow-gray-900'><FormattedMessage id={`deshboard.${img.text_intl}`} /></div>
        </div>
    )

    return (
        <div className='mt-8'>
            <div className='p-4'>
                <h2 className='text-gray-500 text-5xl font-black text-center mb-6'>
                    <FormattedMessage id={`deshboard.${data.title_main_intl}`} />
                    !
                </h2>
                <p className='text-center mb-8 text-lg'><FormattedMessage id={`deshboard.${data.title_text_intl}`} /></p>
            </div>
            <div className='py-8 bg-gray-100 flex justify-center'>
                <div className='flex flex-wrap justify-around w-full max-w-10xl'>
                    {data.imgList.map(img => (
                        <div key={img.id} className='flex justify-center w-full md:w-1/3 max-w-lg'>
                            <ImgFit className='w-2/3 pt-60p md:pt-80p relative md:w-full' src={imgList[img.id]}>
                                {renderStepText(img)}
                            </ImgFit>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WashScissors;