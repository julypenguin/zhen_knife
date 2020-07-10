import React from 'react';
import ImgFit from '../Base/ImgFit'
import cooking_presentation from '../../img/cooking_presentation.jpg'
import cooking_sliced from '../../img/cooking_sliced.jpg'
import cooking_soup from '../../img/cooking_soup.jpg'
import data from './featuresIntro.json'

const FeaturesIntro = () => {
    return (
        <div className='timelimit-feature-page f jc-sa'>
            <div className='pd2 w33f33 f fd-c jc-sb'>
                <div className='timelimit-feature-text-box f1'>
                    {data.titleList.map((title, i) => {
                        if (i === 0) return <div key={title.id} className='fs26 fw600 lh1f5 mb1'>{title.text}</div>
                        return <div key={title.id} className='fs26 fw600 lh1f5'>{title.text}</div>
                    })}
                </div>
                <div>
                    <ImgFit src={cooking_presentation} className='timelimit-feature-img' imgClassName='timelimit-feature-img-hover' />
                </div>
            </div>
            <div className='pd2 w33f33 f fd-c jc-sb'>
                <div className='mb2'>
                    <ImgFit src={cooking_sliced} className='timelimit-feature-img' imgClassName='timelimit-feature-img-hover' />
                </div>
                <div className='timelimit-feature-text-box'>
                    <div className='fs20'>
                        {data.desc}
                    </div>
                </div>
            </div>
            <div className='pd2 w33f33 f fd-c jc-sb'>
                <div className='pd2 w33f33 f fd-c jc-sb'></div>
                <div>
                    <ImgFit src={cooking_soup} className='timelimit-feature-img' imgClassName='timelimit-feature-img-hover mt10px' />
                </div>
            </div>
        </div>
    );
};

export default FeaturesIntro;