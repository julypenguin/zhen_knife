import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import ImgFit from '../Base/ImgFit'
import img251 from '../../img/img251.jpg'
import img252 from '../../img/img252.jpg'
import data from './designConcept.json'

const DesignConcept = () => {
    return (
        <div className='my-40'>
            <div className='container flex flex-col items-center px-8 sm:px-12'>
                <div className='max-w-4xl mb-28 flex flex-col-reverse items-end sm:flex-row sm:items-start'>
                    <div className="w-full -mt-8 sm:mt-36 sm:-mr-6 flex flex-row-reverse">
                        <ImgFit src={img251} className='w-72 pt-72 z-10' />
                    </div>
                    <div className='w-full'>
                        <div className='border-2 border-solid border-black p-8'>
                            <div className='sm:mb-32'>
                                <div className='sm:mb-32'>
                                    <div className="py-4 pr-4 pl-8 leading-8 text-xl sm:text-lg">
                                        <FormattedMessage id={`deshboard.${data.side1.desc_intl}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-end sm:flex-row sm:items-start'>
                    <div className=''>
                        <div className=''>
                            <div className="flex flex-row-reverse mt-8">
                                <div className='border-2 border-solid border-black py-12 px-8 flex-1'>
                                    <div className="mb-16 pr-8 sm:mb-0">
                                        {data.side2.desc_list.map((d, i) => (
                                            <div key={i} className={`leading-8 text-xl sm:text-lg ${i ? '' : 'mb-8'}`}>
                                                <FormattedMessage id={`deshboard.${d.desc_intl}`} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-72 -mt-16 sm:-ml-8 sm:w-full'>
                        <ImgFit src={img252} className='w-full pt-72 z-1' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignConcept;