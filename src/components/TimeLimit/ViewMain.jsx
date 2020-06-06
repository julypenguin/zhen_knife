import React from 'react';
import ImgFit from '../Base/ImgFit'
import background_vag from '../../img/background_vag.jpg'
import data from './viewmainData.json'

const ViewMain = () => {
    return (
        <ImgFit className='timelimit-main-view' src={background_vag}>
            <div className='timelimit-frame'>
                <div className='timelimit-frame-center'>
                    <div className='timelimit-frame-center-left'>
                        <h1 className='timelimit-title-text'>{data.title1}<br />{data.title2}</h1>
                        <div className='timelimit-line-box'>
                            <div className='timelimit-line'></div>
                        </div>
                        <div className='timelimit-line-message'>{data.message}</div>
                        <div className='timelimit-line-text'>{data.text}</div>
                        <div className='timelimit-film-button-box'>
                            <button className='timelimit-film-button'>{data.button}</button>
                        </div>
                    </div>
                </div>
            </div>
        </ImgFit>
    );
};

export default ViewMain;