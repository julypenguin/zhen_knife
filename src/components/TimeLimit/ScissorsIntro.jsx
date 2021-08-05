import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import ImgFit from '../Base/ImgFit'
import cut from '../../img/cut.jpg'
import data from './scissorsintroData.json'

const ScissorsIntro = () => {
    return (
        <div className='container grid grid-cols-1 px-4 my-32 md:grid-cols-3'>
            <div className='col-span-1 flex justify-start md:justify-center pl-4'>
                <div className='w-72 flex flex-col justify-between'>
                    <h3 className='mb-4 text-5xl font-semibold md:mb-0'>
                        <FormattedMessage id={`deshboard.${data.main_intro.brand_intl}`} />
                    </h3>
                    <div className='py-4'>
                        <div className='w-full border-t-4 border-solid border-green-300 md:w-1/3'></div>
                    </div>
                    {data.main_intro.intro.map(intro => (
                        <div key={intro.id} className='mb-4 w-full'>
                            <div className='text-xl py-4'>
                                <FormattedMessage id={`shop.detail.${intro.title_intl}`} />
                            </div>
                            {!!intro.desc && <div className='text-green-600 font-abel text-xl font-normal italic tracking-tight'>
                                <FormattedMessage id={`shop.detail.${intro.desc_intl}`} />
                            </div>}
                        </div>
                    ))}
                    <div className='py-4 md:hidden'>
                        <div className='w-full border-t-4 border-solid border-green-300 md:w-1/3'></div>
                    </div>
                </div>
            </div>

            <div className='col-span-2 p-4 flex justify-center'>
                <div className='w-full'>
                    <div className='py-4'>
                        {data.side_intro.intro.map(intro => (
                            <div key={intro.id} className='text-3xl font-semibold leading-6 pb-4'>
                                <FormattedMessage id={`deshboard.${intro.title_intl}`} />
                            </div>
                        ))}
                    </div>
                    <ImgFit src={cut} className='w-full pt-60p' />
                </div>
            </div>
        </div>
    );
};

export default ScissorsIntro;