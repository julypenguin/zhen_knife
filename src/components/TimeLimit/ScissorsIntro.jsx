import React from 'react';
import ImgFit from '../Base/ImgFit'
import cut from '../../img/cut.jpg'

const ScissorsIntro = () => {
    return (
        <div className='timelimit-intro'>
            <div className='timelimit-intro-left'>
                <div className='timelimit-intro-left-center'>
                    <h3 className='timelimit-intro-left-title'>臻．剪刀</h3>
                    <div className='timelimit-intro-line-box'>
                        <div className='timelimit-intro-line'></div>
                    </div>
                    <div className='timelimit-intro-text-box'>
                        <div className='timelimit-intro-text-title'>日本進口頂級高碳鋼精心打造</div>
                        <div className='timelimit-intro-text'>鋒利更勝不鏽鋼</div>
                    </div>
                    <div className='timelimit-intro-text-box'>
                        <div className='timelimit-intro-text-title'>外型由國外設計師精心設計</div>
                    </div>
                    <div className='timelimit-intro-text-box'>
                        <div className='timelimit-intro-text-title'>刀面拋磨防銹處理</div>
                        <div className='timelimit-intro-text'>保養更方便</div>
                    </div>
                    <div className='timelimit-intro-text-box'>
                        <div className='timelimit-intro-text-title'>握柄採用TPR、PP材料-具有防滑防菌、柔軟等特性</div>
                    </div>
                    <div className='timelimit-intro-line-box'>
                        <div className='timelimit-intro-line'></div>
                    </div>
                </div>
            </div>

            <div className='timelimit-intro-right'>
                <div className='timelimit-intro-right-center'>
                    <div className='timelimit-intro-must'>
                        <div className='timelimit-intro-must-text'>家庭必備料理剪刀</div>
                        <div className='timelimit-intro-must-text'>生食/熟食 各一支</div>
                    </div>
                    <ImgFit src={cut} className='timelimit-intro-img' />
                </div>
            </div>
        </div>
    );
};

export default ScissorsIntro;