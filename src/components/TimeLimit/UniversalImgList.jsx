import React from 'react';
import ImgFit from '../Base/ImgFit'
import img261 from '../../img/img261.jpg'
import img262 from '../../img/img262.jpg'
import img263 from '../../img/img263.jpg'
import img264 from '../../img/img264.jpg'
import img265 from '../../img/img265.jpg'
import img266 from '../../img/img266.jpg'
import img267 from '../../img/img267.jpg'
import img268 from '../../img/img268.jpg'
import img269 from '../../img/img269.jpg'
import data from './universalImgList.json'

const UniversalImgList = () => {
    const imgMap = {
        261: img261,
        262: img262,
        263: img263,
        264: img264,
        265: img265,
        266: img266,
        267: img267,
        268: img268,
        269: img269,
    }

    return (
        <div className=''>
            {data.list.map((block, i) => (
                <div key={i} className='universal-img-block f jc-sb'>
                    {block.map(box => (
                        <div key={box.id} className={`${box.bgc === 'green' ? 'bgc-green-u' : 'bgc-gray-u'} universal-img-pd f1 m05rem`}>
                            <ImgFit src={imgMap[box.id]} />
                            <div className='pdb05rem' />
                            <div className={`${box.bgc === 'green' ? 'c-gray-u' : 'c-green-u'} ta-c fs22`}>{box.desc}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default UniversalImgList;