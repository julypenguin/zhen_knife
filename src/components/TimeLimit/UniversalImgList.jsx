import React from 'react';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';
import ImgFit from '../Base/ImgFit'
import img271 from '../../img/sid/img271.jpg'
import img272 from '../../img/sid/img272.jpg'
import img273 from '../../img/sid/img273.jpg'
import img274 from '../../img/sid/img274.jpg'
import img275 from '../../img/sid/img275.jpg'
import img276 from '../../img/sid/img276.jpg'
import img277 from '../../img/sid/img277.jpg'
import img278 from '../../img/sid/img278.jpg'
import img279 from '../../img/sid/img279.jpg'
import data from './universalImgList.json'

const UniversalImgList = () => {
    const imgMap = {
        271: img271,
        272: img272,
        273: img273,
        274: img274,
        275: img275,
        276: img276,
        277: img277,
        278: img278,
        279: img279,
    }

    return (
        <div className='container mb-12 grid grid-cols-1 gap-y-0 md:grid-cols-3 md:gap-y-12'>
            {data.list.map((msg) => (
                <div key={msg.id} className='col-span-1'>
                    <div
                        className={classnames('pt-3 pb-2 px-3 flex-1 m-2 md:pb-1', {
                            'bg-green-400': msg.bgc === 'green',
                            'bg-gray-700': msg.bgc !== 'green'
                        })}
                    >
                        <ImgFit src={imgMap[msg.id]} />
                        <div className='pb-2' />
                        <div className={classnames('text-center text-2xl md:text-xl', {
                            'text-gray-700': msg.bgc === 'green',
                            'text-green-400': msg.bgc !== 'green'
                        })}>
                            <FormattedMessage id={`deshboard.${msg.desc_intl}`} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UniversalImgList;