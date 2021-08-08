import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImgFit from '../Base/ImgFit'
import amazon from '../../img/brand/amazon.png'
import houzz from '../../img/brand/houzz.png'
import onthegas from '../../img/brand/onthegas.png'
import wayfair from '../../img/brand/wayfair.png'
import woodcraft from '../../img/brand/woodcraft.png'
import zeppy from '../../img/brand/zeppy.png'
import data from './salesPlatforms.json'

const SalesPlatforms = () => {

    const imgMap = {
        amazon: amazon,
        houzz: houzz,
        onthegas: onthegas,
        wayfair: wayfair,
        woodcraft: woodcraft,
        zeppy: zeppy,
    }

    return (
        <div className='w-full bg-scissors bg-center bg-no-repeat py-24 px-4 mb-12'>
            <div className='container flex flex-col'>
                <div className='flex flex-col items-end mb-16'>
                    <div className='text-4xl md:text-5xl lg:text-6xl text-white text-shadow-gray-900 mb-4'><FormattedMessage id={`deshboard.${data.title_intl}`} /></div>
                    <div className='text-xl text-white text-shadow-gray-900'><FormattedMessage id={`deshboard.${data.desc_intl}`} /></div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8'>
                    {data.brand_list.map((brand) => (
                        <div
                            key={brand.id}
                            className='flex justify-center items-center px-12 py-16'
                            style={{ backgroundColor: 'rgba(239, 239, 239, 0.6)' }}
                        >
                            <a
                                href={brand.href}
                                className='w-11/12 sm:w-10/12 lg:w-4/12'
                                target='_blank'
                                rel="noreferrer"
                            >
                                {/* {brand.id} */}
                                <ImgFit src={imgMap[brand.id]} className='w-full pt-60p transition-all duration-200 transform hover:scale-125' />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalesPlatforms;