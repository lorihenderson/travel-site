import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            title: "The Coliseum in Rome, Italy",
            description: "The Coliseum, or Colosseum, is an elliptical amphitheatre in the centre of the city of Rome, Italy.  It is very old and popular.",
            icon: require("../../Media/Coliseum Rome.jpeg"),
        },
        {
            title: "The Eiffel Tower in Paris, France",
            description: "Built by Gustave Eiffel for the 1889 Exposition Universelle to celebrate the 100th year anniversary of the French Revolution.",
            icon: require("../../Media/Eiffel Tower.jpeg"),
        },
        {
            title: "Stonehenge in England",
            description: "Stonehenge is a prehistoric megalithic structure on Salisbury Plain in Wiltshire, England.",
            icon: require("../../Media/Stonehenge.jpeg"),
        },
    ];

    return (
        <>
            <h1 style={{ textAlign: "center" }}> Example Carousel Setup </h1>
            <div className="carousel">
                
            </div>
            {/* <div className="carousel">
                <div className="inner"
                    style={{ transform: `translate: (-${activeIndex * 100})` }}
                >
                    {items.map((item) => {
                        return <CarouselItem item={item} />
                    })}

                </div>
            </div> */}
        </>
    )
}