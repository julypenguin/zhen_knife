import React from 'react';
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
        <div className='timelimit-wash-img-text-box'>
            <div className='timelimit-wash-img-text-h'>{img.step}</div>
            <div className='timelimit-wash-img-text-p'>{img.text}</div>
        </div>
    )

    return (
        <div>
            <div className='timelimit-wash-title-box'>
                <h2 className='timelimit-wash-title-main'>{data.title_main}!</h2>
                <p className='timelimit-wash-title-text'>{data.title_text}</p>
            </div>
            <div className='timelimit-wash-img-outer'>
                <div className='timelimit-wash-img-box'>
                    {data.imgList.map(img => (
                        <ImgFit className='timelimit-wash-img' src={imgList[img.id]}>
                            {renderStepText(img)}
                        </ImgFit>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WashScissors;