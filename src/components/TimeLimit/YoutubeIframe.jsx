import React from 'react';
import YouTube from 'react-youtube'

const YoutubeIframe = () => {

    const opts = {
        height: '100%',
        width: '100%',
        // playerVars: {
        //     // https://developers.google.com/youtube/player_parameters
        //     autoplay: 1,
        // },
    }

    const _onReady = e => {
        e.target.pauseVideo();
    }

    return (
        <div className='youtube-container-box w-full'>
            <div
                className='youtube-container-box-center relative'
                style={{ paddingTop: '57%' }}
            >
                <div className='absolute top-0 left-0 w-full h-full'>
                    <YouTube
                        videoId="auCNlT032Xs"
                        opts={opts}
                        onReady={_onReady}
                        containerClassName='youtube-container'
                        className='w-full h-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default YoutubeIframe;