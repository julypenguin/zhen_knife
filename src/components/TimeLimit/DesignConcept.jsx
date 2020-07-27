import React from 'react';
import ImgFit from '../Base/ImgFit'
import img251 from '../../img/img251.jpg'
import img252 from '../../img/img252.jpg'
import data from './designConcept.json'

const DesignConcept = () => {
    return (
        <div className='disign-concept'>
            <div className='f mb2'>
                <div className='w50p'>
                    <div className='design-left'>
                        <div className="design-left-wrap">
                            <ImgFit src={img251} className='design-image-1st' />
                        </div>
                    </div>
                </div>
                <div className='w50p'>
                    <div className='design-border'>
                        <div className='design-right'>
                            <div className='design-right-wrap'>
                                <div className="pdt1 pdb1 pdr1 pdl2 lh2">{data.side1.desc}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='f'>
                <div className='w50p fd-c jc-fe'>
                    <div className='design-left'>
                        <div className="design-left-wrap-down">
                            <div className='design-border f1'>
                                <div className="pdt1 pdb1 pdr2 pdl1">
                                    {data.side2.desc_list.map((d, i) => (
                                        <div key={i} className={`lh2 ${i ? '' : 'mb2'}`}>{d}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w50p'>
                    <div className='design-right'>
                        <ImgFit src={img252} className='design-image-2nd' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignConcept;