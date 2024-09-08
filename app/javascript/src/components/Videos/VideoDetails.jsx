import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastNotification } from "../../utils/toast_notification";
import { formattedDate } from "../../utils/FormattedDate";

const VideoDetails = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});

  const fetchVideoDetail = async () => {
    try {
      const response = await fetch(`/api/v1/videos/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        <ToastNotification show={true} message={"Oops no video found!!!"} />;
      }
      const data = await response.json();
      setVideo(data);
    } catch (error) {
      <ToastNotification show={true} message={error} />;
    }
  };

  useEffect(() => {
    fetchVideoDetail();
  }, []);

  return (
    <>
      <div className="row">
        <div
          className="d-flex flex-column col-10"
          style={{ width: "100%", padding: "0" }}
        >
          <video
            controls
            style={{
              width: "58%",
              height: "70vh",
              objectFit: "cover",
              marginBottom: "10px",
              borderRadius: "10px",
              marginLeft: "150px",
            }}
            src={video.video_url}
          >
            Your browser does not support the video tag.
          </video>

          <div style={{ marginLeft: "150px" }}>
            <p>{video.title}</p>
            <p>{video.video_content_type}</p>
          </div>
        </div>

        <div className="col-2 d-flex align-items-start">
          <ul>
            <li>Video1</li>
            <li>Video 2</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default VideoDetails;
