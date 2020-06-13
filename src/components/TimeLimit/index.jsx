import React from 'react';
import ViewMain from './ViewMain'
import WashScissors from './WashScissors'
import ScissorsIntro from './ScissorsIntro'
import YoutubeIframe from './YoutubeIframe'

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
            <YoutubeIframe />

        </section>
    );
};

export default index;