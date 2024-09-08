import * as React from 'react';
import { useState, useEffect } from 'react';
import FilterVideoList from './FilterVideoList';
import HeaderComponent from '../Headers/HeaderComponent';
import { Link } from 'react-router-dom';

const VideoListing = () => {
    const [videoList, setVideoList] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");

    useEffect(() => {
        fetchVideo(searchTxt);
        console.log(searchTxt);
    }, [searchTxt]);

    const fetchVideo = async () => {
        try {
            const response = await fetch(`/api/v1/videos?search=${searchTxt}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setVideoList(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    return (
        <>
          <HeaderComponent setSearchTxt={setSearchTxt} />
          <div className="container mx-auto mt-4">
            <div className="row g-4">
                {videoList.length > 0 &&
                    videoList.map((video) => (
                        <div 
                            className="col-12 col-sm-6 col-md-4 col-lg-3" 
                            key={video.id} 
                            style={{ cursor: "pointer" }}
                            onClick={(e) => { e.preventDefault(); }}
                        >
                            <Link 
                                to={`videos/${video.id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <FilterVideoList video={video} />
                            </Link>
                        </div>
                    ))
                }
            </div>
          </div>
        </>
    );
};

export default VideoListing;
