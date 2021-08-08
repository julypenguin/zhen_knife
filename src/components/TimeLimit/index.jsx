import React from 'react';
import ViewMain from './ViewMain'
import WashScissors from './WashScissors'
import ScissorsIntro from './ScissorsIntro'
import YoutubeIframe from './YoutubeIframe'
import FeaturesIntro from './FeaturesIntro'
import FeaturesIntroSide from './FeaturesIntroSide'
import DesignConcept from './DesignConcept'
import Universal from './Universal'
import UniversalImgList from './UniversalImgList'
import Multifunctional from './Multifunctional'
import Certificate from './Certificate'
import SalesPlatforms from './SalesPlatforms'

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

            {/* 特點介紹 */}
            <FeaturesIntro />

            {/* 特點介紹下頁 */}
            <FeaturesIntroSide />

            {/* 設計理念 */}
            <DesignConcept />

            {/* 一把萬用 */}
            <Universal />

            {/* 一把萬用系列圖 */}
            <UniversalImgList />

            {/* 多功能合一 */}
            <Multifunctional />

            {/* 檢驗證書 */}
            <Certificate />

            {/* 國外各大銷售平台 */}
            <SalesPlatforms />

        </section>
    );
};

export default index;