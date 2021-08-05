import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import ImgFit from '../Base/ImgFit'
import cooking_presentation from '../../img/cooking_presentation.jpg'
import cooking_sliced from '../../img/cooking_sliced.jpg'
import cooking_soup from '../../img/cooking_soup.jpg'
import data from './featuresIntro.json'

const FeaturesIntro = () => {
    return (
        <div className='container mb-20 flex justify-around flex-wrap'>
            <div className='w-full md:w-1/3 py-0 px-8 top-8 flex flex-col justify-between md:top-0 md:p-8'>
                <div className='min-h-48 flex flex-col justify-center flex-1'>
                    {data.titleList.map((title, i) => {
                        if (i === 0) return <div key={title.id} className='text-2xl md:text-3xl font-semibold leading-6 mb-4'>
                            <FormattedMessage id={`deshboard.${title.text_intl}`} />
                        </div>
                        return <div key={title.id} className='text-2xl lg:text-3xl font-semibold leading-6'>
                            <FormattedMessage id={`deshboard.${title.text_intl}`} />
                        </div>
                    })}
                </div>
                <div className='w-10/21 mt-8 md:w-auto'>
                    <ImgFit
                        src={cooking_presentation}
                        className='w-full pt-112 group'
                        imgClassName='transform transition-all duration-300 group-hover:scale-110'
                    />
                </div>
            </div>
            <div className='w-full py-0 px-8 relative -top-8 flex flex-col justify-between md:w-1/3 md:p-8 md:top-0'>
                <div className='mb-12 flex justify-end md:justify-start'>
                    <ImgFit
                        src={cooking_sliced}
                        className='pt-112 group w-10/21 md:w-full'
                        imgClassName='transform transition-all duration-300 group-hover:scale-110'
                    />
                </div>
                <div className='timelimit-feature-text-box'>
                    <div className='fs20'>
                        <FormattedMessage id={`deshboard.${data.desc_intl}`} />
                    </div>
                </div>
            </div>
            <div className='w-full p-8 -mt-8 flex flex-col justify-end md:w-1/3 md:mt-0'>
                {/* <div className='p-8 flex flex-col justify-between md:w-1/3'></div> */}
                <div>
                    <ImgFit
                        src={cooking_soup}
                        className='w-full pt-176 md:pt-112 group'
                        imgClassName='transform mt10px transition-all duration-300 group-hover:scale-110'
                    />
                </div>
            </div>
        </div>
    );
};

export default FeaturesIntro;