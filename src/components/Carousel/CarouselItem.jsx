import React from "react";

export const CarouselItem = ({ item }) => {
    return (
        <div className="citem">
            <div></div>
            <img className="cimg" alt="" src={item.icon} />
            <div className="citemtext">{item.description}</div>
        </div>
    );
}