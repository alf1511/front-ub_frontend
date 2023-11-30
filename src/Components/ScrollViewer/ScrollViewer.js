import React from "react";
import "./ScrollViewer.css";

function ScrollViewer({ children }) {
    return (
        <div className="overflow-y-scroll h-3/5-vh w-full bg-dark-blue rounded-lg border-2 border-white">
            {children}
        </div>
    );
}

export default ScrollViewer;