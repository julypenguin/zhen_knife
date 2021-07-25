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

const Deshboard = ({
    push,
}) => {

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

            <section>
                <ul role="list" className="bg-black py-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
                    {data.sideViewList.map((sideView, i) => (
                        <li
                            key={i}
                            className="relative"
                            onClick={() => push(sideView.href)}
                        >
                            <div className="group block w-full aspect-w-10 aspect-h-7 bg-gray-100 overflow-hidden">
                                <div key={sideView.name} className='w-full'>
                                    <div className='w-full pt-40 lg:pt-64'>
                                        <div className='w-full h-full absolute top-0 left-0'>
                                            <img className='w-full h-full block object-cover transition-all filter brightness-75 group-hover:brightness-100' src={imgList[sideView.id]}></img>
                                            <div className='side-view-imgbox-words-red'>{sideView.name}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}

                </ul>
            </section>
        </>
    );
};

export default Deshboard;