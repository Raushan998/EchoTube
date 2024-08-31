import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoListing from './Videos/VideoListing';
import HeaderComponent from './Headers/HeaderComponent';
import VideoDetails from './Videos/VideoDetails';
import LoginUser from './Headers/users/LoginUser';
import Error from './error';

const rootRouter = createBrowserRouter([
    {
        path: "/",
        element: <VideoListing />,
        errorElement: <Error />
    },
    {
        path: "login",
        element: <LoginUser />,
        errorElement: <Error />
    },
    {
        path: "videos",
        element: (
            <HeaderComponent>
                <VideoDetails />
            </HeaderComponent>
        ),
        errorElement: <Error />
    }
]);

const Root = () => {
    return (
        <RouterProvider router={rootRouter} />
    );
};

export default Root;
