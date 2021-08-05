import React from 'react';
import data from './data.json'
import ProductImg from '../Shop/ProductImg'
import TimeLimit from '../../containers/TimeLimit/index'

const Deshboard = ({
    push,
}) => {

    const renderImg = (img) => {
        return <ProductImg
            img={img}
            className='w-full h-full block object-cover transition-all filter brightness-75 group-hover:brightness-100'
        />
    }

    return (
        <>
            <section className='flex flex-col justify-center'>
                {/* <div className='w-full h-full absolute top-0 left-0'>
                    <ProductImg img='mainView' />
                </div> */}
                <ProductImg img='mainView' className='block h-screen' />

                <div className='center-tools absolute'>
                    <div className='center-tools-img'>
                        <div className='center-tools-img-fit'>
                            <ProductImg img='zhenBlack' />
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
                <ul role="list" className="bg-black py-28 grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
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
                                            {renderImg(sideView.img)}
                                            <div className='side-view-imgbox-words-red'>{sideView.name}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}

                </ul>
            </section>

            <section>
                <TimeLimit />
            </section>
        </>
    );
};

export default Deshboard;