import React from "react";
import classNames from 'classnames';

import {Time, SvgIcons, MessageAudio} from 'components';



import './Message.scss';

/*const Message = ({avatar, text, date = new Date(2020, 4, 1), audio, fullName, isMe, isRead, isTyping, attachments = []}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioElem = useRef(null);

    const isMessageImage = attachments.length === 1 && !text;

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
        <div className={classNames('message', {
            'message--is-me': isMe,
            'message--is-typing': isTyping,
            'message--image': isMessageImage,
            'message--audio': !!audio,
            'message--attachments': !text && attachments.length > 1
        })}>
            <div className='message__avatar'>
                <img className='avatar' src={avatar} alt={`${fullName} avatar`}/>
            </div>
            <div className='message__content'>
                <div className='message__info'>
                    {
                        !isTyping && (text || !isMessageImage && !(attachments.length > 1)) &&
                        <div className='message__bubble'>
                            {
                                !audio ? (
                                    <p className='message__text'>{text}</p>
                                ) : (
                                    <div className='message__audio'>
                                        <audio ref={audioElem} src={audio} preload='auto'>g</audio>
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
                                            <span className='message__audio-duration'>
                                                {convertCurrentTime(currentTime)}
                                            </span>
                                        </div>

                                    </div>
                                )
                            }
                        </div>
                    }
                    {
                        isTyping && !isMe &&
                        <div className="message__typing">
                            <span/><span/><span/>
                        </div>
                    }
                    {isMe && !isTyping && <SvgIcons type={'checked'} isRead={isRead}/>}
                </div>
                {!!attachments.length && <div className='message__attachments'>
                    {attachments.map((item, i) => <img key={i} className={'message__attachments-item'} src={item.src}
                                                       alt={item.id}/>)}
                </div>}
                {!isTyping && <Time className='message__date' dateMessage={date}/>}
            </div>
        </div>
    )
}*/

const Message = ({
                     avatar,
                     text,
                     audio,
                     date = new Date(2020, 4, 1),
                     fullName,
                     isMe,
                     isRead,
                     isTyping,
                     attachments = []}) => {

    const isMessageImage = attachments.length === 1 && !text;


    return (
        <div className={classNames('message', {
            'message--is-me': isMe,
            'message--is-typing': isTyping,
            'message--image': isMessageImage,
            'message--audio': !!audio,
            'message--attachments': !text && attachments.length > 1
        })}>
            <div className='message__avatar'>
                <img className='avatar' src={avatar} alt={`${fullName} avatar`}/>
            </div>
            <div className='message__content'>
                <div className='message__info'>
                    {
                        !isTyping && (text || !isMessageImage && attachments.length <= 1) &&
                        <div className='message__bubble'>
                            {
                                !audio ? (
                                    <p className='message__text'>{text}</p>
                                ) : (
                                    <MessageAudio audioSrc={audio}/>
                                )
                            }
                        </div>
                    }
                    {
                        isTyping && !isMe &&
                        <div className="message__typing">
                            <span/><span/><span/>
                        </div>
                    }
                    {isMe && !isTyping && <SvgIcons type={'checked'} isRead={isRead}/>}
                </div>
                {!!attachments.length && <div className='message__attachments'>
                    {attachments.map((item, i) => <img key={i} className={'message__attachments-item'} src={item.src}
                                                       alt={item.id}/>)}
                </div>}
                {!isTyping && <Time className='message__date' dateMessage={date}/>}
            </div>
        </div>
    )
}


export default Message;
