import React from 'react';
import ImgFit from '../Base/ImgFit'
import cut from '../../img/cut.jpg'
import data from './scissorsintroData.json'

const ScissorsIntro = () => {
    return (
        <div className='timelimit-intro'>
            <div className='timelimit-intro-left'>
                <div className='timelimit-intro-left-center'>
                    <h3 className='timelimit-intro-left-title'>{data.main_intro.title}</h3>
                    <div className='timelimit-intro-line-box'>
                        <div className='timelimit-intro-line'></div>
                    </div>
                    {data.main_intro.intro.map(intro => (
                        <div key={intro.id} className='timelimit-intro-text-box'>
                            <div className='timelimit-intro-text-title'>{intro.title}</div>
                            {!!intro.desc && <div className='timelimit-intro-text'>{intro.desc}</div>}
                        </div>
                    ))}
                </div>
            </div>

            <div className='timelimit-intro-right'>
                <div className='timelimit-intro-right-center'>
                    <div className='timelimit-intro-must'>
                        {data.side_intro.intro.map(intro => (
                            <div key={intro.id} className='timelimit-intro-must-text'>{intro.title}</div>
                        ))}
                    </div>
                    <ImgFit src={cut} className='timelimit-intro-img' />
                </div>
            </div>
        </div>
    );
};

export default ScissorsIntro;