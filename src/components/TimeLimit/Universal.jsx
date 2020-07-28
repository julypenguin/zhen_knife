import React from 'react';
import ImgFit from '../Base/ImgFit'
import img260 from '../../img/img260.png'
import data from './universal.json'

const Universal = () => {
    return (
        <div>
            <ImgFit src={img260} className='universal-main-img' />
            <div className='universal-main-center'>
                <div className='universal-main-text-box'>
                    <div className="universal-main-text-box-inner">
                        <div className='f jc-c fd-c'>
                            {data.text_list.map((d, i) => (
                                <div key={i} className="universal-main-text f jc-c">{d}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Universal;