
import React from 'react'
import '@/assets/css/loading.css';

export default function Loading() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    )
}
