import React from 'react';
import ImgFit from '../Base/ImgFit'
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
        <div className='f jc-c bgc-black'>
            <div className='timelimit-featrue-side-center-page f fw-w'>
                {data.block.map((b, i) => (
                    <div className='f w100p' key={i}>
                        {b.map(d => (
                            <React.Fragment key={d.id}>
                                {d.type === 'img' && <ImgFit src={imgMap[d.id]} className='timelimit-feature-side-img f1' />}
                                {d.type === 'text' && <div className='c-white f ai-c f1'>
                                    <div className='timelimit-feature-side-text'>
                                        {!!d.title && <div className='c-green ff-pdss fs-34 mb1'>{d.title}</div>}
                                        <div>{d.desc}</div>
                                    </div>
                                </div>}
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesIntroSide;