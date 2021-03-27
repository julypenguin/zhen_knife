import React from 'react';
import damascus from '../../img/damascus.jpg'
import three from '../../img/three.png'
import carbon from '../../img/carbon.png'
import event from '../../img/event.jpg'
import newMessage from '../../img/newMessage.jpg'
import kitchen from '../../img/kitchen.jpg'
import mainView from '../../img//mainView.png'
import zhenBlack from '../../img//zhenBlack.png'
import data from './data.json'
import ProductImg from '../Shop/ProductImg'

const Deshboard = () => {

    const imgList = {
        101: damascus,
        102: three,
        103: carbon,
        104: event,
        105: newMessage,
        106: kitchen,
    }

    return (
        <>
            <section className='main-view f-jc'>
                {/* <ProductImg img='mainView' /> */}
                <div className='main-view-img-fit'>
                    <img className='main-view-img-img' src={mainView} />
                </div>
                <div className='center-tools'>
                    <div className='center-tools-img'>
                        <div className='center-tools-img-fit'>
                            <img className='center-tools-img-img' src={zhenBlack} />
                        </div>
                    </div>
                    {/* <div className='center-tools-search'>
                        <input className='center-tools-search-input' type='text' />
                        <span className='center-tools-search-button'>{data.search}</span>
                    </div> */}
                    {/* <div className='center-tools-icon'>臻</div> */}
                </div>
            </section>

            <section className='side-view'>
                {data.sideViewList.map((sideView, i) => (
                    <div key={i} className='side-view-inner'>
                        <div className='side-view-imgboxs'>
                            {sideView.map((view, i) => (
                                <div key={view.name} className='side-view-imgbox'>
                                    <div className='side-view-imgbox-inner'>
                                        <div className='side-view-imgbox-fit'>
                                            <img className='side-view-imgbox-image' src={imgList[view.id]}></img>
                                            <div className='side-view-imgbox-words-red'>{view.name}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Deshboard;