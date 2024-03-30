import React from 'react'
import { Dashboard } from './Dashboard'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({isLoggedin , children}) => {
    if(isLoggedin){
        return <Dashboard/>
    }
    else {
        return <Navigate to="/login"/>
    }
  
}
