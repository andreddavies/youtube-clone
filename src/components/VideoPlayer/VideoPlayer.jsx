import React from "react";
import './VideoPlayer.css';
import { connect } from 'react-redux'

const VideoPlayer = props => {

    
    return (
        <div className="video-player">
            <div className="player-container">
                {
                    props.video.id ? 
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src={"https://www.youtube.com/embed/" + props.video.id.videoId}
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="
                                autoplay; 
                                gyroscope; 
                                accelerometer; 
                                clipboard-write; 
                                encrypted-media; 
                                picture-in-picture
                            " 
                            allowfullscreen
                        >
                        </iframe> : 
                        <h3>Escolha um vídeo para continuar...</h3>
                    }
            </div>
            {
                props.video.id && (
                    <div className="description">
                        <h2 className="title">{props.video.snippet.title}</h2>
                        <p>{props.video.snippet.description}</p>
                    </div>
                )
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        video: state.player.video
    }
};

export default connect(mapStateToProps, null)(VideoPlayer);