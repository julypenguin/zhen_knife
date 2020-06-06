import React from 'react';

const ImgFit = ({
    src,
    className,
    children,
    center,
}) => {
    return (
        <div className={className}>
            <div className='img-fit'>
                <img className={center ? 'img-img-center' : 'img-img'} src={src} />
            </div>
            {children}
        </div>
    );
};

export default ImgFit;