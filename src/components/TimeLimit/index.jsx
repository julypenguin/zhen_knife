import React from 'react';
import ViewMain from './ViewMain'
import WashScissors from './WashScissors'
import ScissorsIntro from './ScissorsIntro'
import YoutubeIframe from './YoutubeIframe'
import FeaturesIntro from './FeaturesIntro'
import FeaturesIntroSide from './FeaturesIntroSide'

const index = (props) => {



    return (
        <section>
            {/* 限時搶購活動頁主圖 */}
            <ViewMain />

            {/* 可拆洗的剪刀 */}
            <WashScissors />

            {/* 臻。剪刀 */}
            <ScissorsIntro />

            {/* 影片介紹 */}
            {/* <YoutubeIframe /> */}

            {/* 特點介紹 */}
            <FeaturesIntro />

            {/* 特點介紹下頁 */}
            <FeaturesIntroSide />

        </section>
    );
};

export default index;