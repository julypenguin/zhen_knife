import React from 'react';

const ImgFit = ({
    src,
    className,
    imgClassName='',
    children,
    center,
}) => {
    return (
        <div className={className ? className : 'img-box'}>
            <div className='img-fit'>
                <img className={center ? `img-img-center ${imgClassName}` : `img-img ${imgClassName}`} src={src} />
            </div>
            {children}
        </div>
    );
};

export default ImgFit;