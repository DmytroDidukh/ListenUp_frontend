import React, {useEffect, useRef, useState} from 'react';

import {SvgIcons} from 'components';
import {convertCurrentTime} from 'utils/helpers';


const MessageAudio = ({audioSrc}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioElem = useRef(null);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };

    useEffect(() => {
        if (audioElem.current) {
            //audioElem.current.volume = '0.01';
            audioElem.current.addEventListener('playing', () => {
                    setIsPlaying(true);
                },
                false,
            );
            audioElem.current.addEventListener('ended', () => {
                    setIsPlaying(false);
                    setProgress(0);
                    setCurrentTime(0);
                },
                false,
            );
            audioElem.current.addEventListener('pause', () => {
                    setIsPlaying(false);
                },
                false,
            );
            audioElem.current.addEventListener('timeupdate', () => {
                const duration = audioElem.current.duration;
                setCurrentTime(audioElem.current.currentTime);
                setProgress((audioElem.current.currentTime / duration) * 100);
            });
        }
    }, []);


    return (
        <div className='message__audio'>
            <audio ref={audioElem} src={audioSrc} preload='auto'>g</audio>
            <div className='message__audio-progress' style={{width: progress + '%'}}></div>
            <div className='message__audio-info'>
                <div className='message__audio-btn'>
                    <button onClick={togglePlay}>
                        <SvgIcons type={isPlaying ? 'pause' : 'play'}/>
                    </button>
                </div>
                <div className='message__audio-svg-wave'>
                    <SvgIcons type={'wave'}/>
                </div>
                <span className='message__audio-duration'>{convertCurrentTime(currentTime)}</span>
            </div>
        </div>
    )
}

export default MessageAudio;