import * as React from 'react';
import { formatDistanceToNow } from 'date-fns';

const FilterVideoList = ({video}) => {
    const formattedDate = (date) =>{
        return formatDistanceToNow(new Date(date), { addSuffix: true });
    }
    return(
        <>
           <div className="rounded-xl">
                <video
                    controls
                    style={{maxWidth: "100%", height: "250px", borderRadius: "15%", objectFit: "cover"}}
                    src={video.video_url}
                >
                    Your browser does not support the video tag.
                </video>
                <div>
                    <h2 style={{color: "black", font: "bold" , fontSize: "20px"}}>{video.title}</h2>
                    <div style={{display: "flex", justifyContent: "space-between", color: "gray", fontSize: "bold"}}>
                    <p className="text-gray-500 text-sm">{video?.video_content_type}</p>
                    <p className="text-gray-400 text-sm ml-4">{ formattedDate(video.created_at) }</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FilterVideoList;