import React from 'react';
import ViewMain from './ViewMain'
import WashScissors from './WashScissors'
import ScissorsIntro from './ScissorsIntro'

const index = (props) => {
    return (
        <section>
            {/* 限時搶購活動頁主圖 */}
            <ViewMain />

            {/* 可拆洗的剪刀 */}
            <WashScissors />

            {/* 臻。剪刀 */}
            <ScissorsIntro />
        </section>
    );
};

export default index;