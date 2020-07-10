import React from 'react';
import ImgFit from '../Base/ImgFit'
import scissorsFeature1 from '../../img/scissorsFeature1.jpg'
import scissorsFeature2 from '../../img/scissorsFeature2.jpg'
import scissorsFeature3 from '../../img/scissorsFeature3.jpg'

const FeaturesIntroSide = () => {
    return (
        <div className='f jc-c bgc-black'>
            <div className='timelimit-featrue-side-center-page f fw-w'>
                <div className='f w100p'>
                    <ImgFit src={scissorsFeature1} className='timelimit-feature-side-img f1' />
                    <div className='c-white f ai-c f1'>
                        <div className='timelimit-feature-side-text'>
                            <div className='c-green ff-pdss fs-34'>日本頂級鋼材</div>
                            <div>【自體研磨】無毒的氧化鐵在使用過程中會緩慢脫落、產生微侵蝕的效果，讓刀面隨著日常使用自體研磨，即使經過多年使用，刀鋒角度仍能維持完美的15度。</div>
                        </div>
                    </div>
                    <ImgFit src={scissorsFeature3} className='timelimit-feature-side-img f1' />
                </div>
                <div className='f w100p'>
                    <div className='c-white f1'>
                        <div className='timelimit-feature-side-text'>【鋒利度】鋼材硬度遠高於不鏽鋼，讓高碳鋼刀具能被研磨的更薄、更銳利。</div>
                    </div>
                    <ImgFit src={scissorsFeature2} className='timelimit-feature-side-img f1' />
                    <div className='c-white f1'>
                        <div className='timelimit-feature-side-text'>【持久度】堅硬的鋼材意味著刀鋒的銳利度能持續更久，不需經常磨刀。</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesIntroSide;