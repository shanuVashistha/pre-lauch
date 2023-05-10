import React from 'react';

interface VideoPlayerProps {
    src: string;
    type: string;
    width?: number;
    height?: number;
    controls?: boolean;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = (
    {
        src,
        type,
        width = 640,
        height = 360,
        controls = true,
        autoplay = false,
        loop = false,
        muted = false,
    }
) => {
    return (
        <video
            width={width}
            height={height}
            controls={controls}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            style={{ width, height }}
        >
            <source src={src} type={type}/>
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
