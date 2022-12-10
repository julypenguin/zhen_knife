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
        <div>
            <section className='flex flex-col justify-center items-center bg-black'>
                {/* <div className='w-full h-full absolute top-0 left-0'>
                    <ProductImg img='mainView' />
                </div> */}
                <div className='flex justify-center items-center'>
                    <ProductImg
                        img='mainView'
                        className='hidden object-cover h-main-phone md:h-main-full md:block'
                    // style={{ height: 'calc(100vh - 120px - 10rem)' }}
                    />
                    <ProductImg
                        img='mainViewMini'
                        className='block object-cover h-main-phone md:h-main-full md:hidden'
                    // style={{ height: 'calc(100vh - 120px - 10rem)' }}
                    />
                </div>
                {/* <div className='block w-full h-full xl:h-screen'>
                    <div className='bg-mainView block w-full h-full xl:h-screen'></div>
                </div> */}

                <div className='center-tools absolute'>
                    <div className='center-tools-img pt-[80%] sm:pt-[60%] md:pt-[40%]'>
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
                            <div className="group block w-full bg-gray-100 overflow-hidden">
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
        </div>
    );
};

export default Deshboard;