import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import Preloader from '../components/common/Preloader/Preloader';


export const withSuspense = (Component) => {

    return (props) => {
        return <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense>
    };
} 