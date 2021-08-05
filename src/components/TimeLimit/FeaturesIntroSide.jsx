import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import scissorsFeature1 from '../../img/scissorsFeature1.jpg'
import scissorsFeature2 from '../../img/scissorsFeature2.jpg'
import scissorsFeature3 from '../../img/scissorsFeature3.jpg'
import data from './featuresIntroSide.json'

const FeaturesIntroSide = () => {
    const imgMap = {
        241: scissorsFeature1,
        243: scissorsFeature3,
        245: scissorsFeature2,
    }

    return (
        <div className='flex justify-center bg-black p-16'>
            <div className='container overflow-hidden md:grid md:grid-cols-3 md:gap-px'>
                {data.block.map((b, i) => (
                    <div
                        key={b.id}
                        className='w-full flex justify-center mb-20 md:mb-4'
                    >
                        {b.type === 'img' && <img src={imgMap[b.id]} />}

                        {b.type === 'text' && <div className='text-white flex items-center flex-1'>
                            <div className='md:py-8 lg:px-8'>
                                {!!b.title && <div className='text-green-300 flex justify-center font-playfair text-3xl font-bold md:text-lg lg:text-3xl mb-4'>
                                    <FormattedMessage id={`deshboard.${b.title_intl}`} />
                                </div>}
                                <div className='text-xl md:text-base md:px-4 lg:px-0 lg:text-lg'>
                                    <FormattedMessage id={`deshboard.${b.desc_intl}`} />
                                </div>
                            </div>
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesIntroSide;