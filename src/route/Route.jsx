
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/home/Home';
import Donation from '../pages/donation/Donation';
import Statistics from '../pages/statistics/Statistics';
import Card from '../pages/Card/Card';

const myCreatedRoute=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/donate.json')
            },
            {
                path:"/donation",
                element:<Donation></Donation>,
            },
           {
            path:"/Statistics",
            element:<Statistics></Statistics>,
           },
           {
            path:"/donate/:id",
           element:<Card></Card>,
            loader:()=>fetch('/donate.json')
        }
        ]
    }
])

export default myCreatedRoute;