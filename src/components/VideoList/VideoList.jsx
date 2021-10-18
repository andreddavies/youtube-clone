import './VideoList.css';
import React, { useState } from "react";
import {connect} from 'react-redux'

const VideoList = props => {
    
    const videoItem = (video) => {
        return (
            <li className="list-item" key={video.id.videoId}>
                <div className="image-wrapper">
                    <img src={video.snippet.thumbnails.default.url} alt="imagem-do-vídeo" />
                </div>
                <div className="item-content">
                    <h4 className="content-header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </li>
        )
    };
    
    return (
        <div className="video-list">
            <ul className="list">
                {
                    props.loading && (
                        <div className="loader-background">
                            <div className="loader-wrapper">
                                <div className="loader"></div>
                                <div className="title">Carregando...</div>
                            </div>
                        </div>
                    )
                }
                {
                    props.videos.map(video => {
                        return videoItem(video);
                    })
                }
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        videos: state.search.videos,
        loading: state.search.loading,
        error: state.search.error,
    }
};

export default connect(mapStateToProps, null)(VideoList);