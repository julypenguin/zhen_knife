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
        <div className='youtube-container-box'>
            <div className='youtube-container-box-center'>
                <YouTube
                    videoId="auCNlT032Xs"
                    opts={opts}
                    onReady={_onReady}
                    containerClassName='youtube-container'
                />
            </div>
        </div>
    );
};

export default YoutubeIframe;