import React, { useContext } from "react";
import { UserContext } from "../../UserContext.jsx";
import { Link, Navigate } from "react-router-dom";

export default function Accountpage() {
    const {ready,user} =useContext(UserContext);

    if (!ready) {
        return <div>Loading...</div>
    }
    if( ready && !user) {
        return <Navigate to={'/login'} />
    }
    
    return (
       
        <div>
<nav className="w-full flex justify-center mt-8 gap-2">
    <Link className="py-2 px-6 bg-primary text-white rounded-full" to={'/account/profile'}>My profile</Link>
    <Link className="py-2 px-4" to={'/account/bookings'}>My bookings</Link>
    <Link className="py-2 px-4"  to={'/account/places'}>My accommodation</Link>
</nav>
        </div>
    );
} 