"use client";

import data from "@/data";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

function Reviews() {
    const [index, setIndex] = useState(0);

    const { name, image, job, text } = data[index];

    console.log(name, setIndex);

    return (
        <main>
            <article className="review">
                <div className="img-container">
                    <Image
                        src={image}
                        alt={name}
                        height={200}
                        width={200}
                        className="person-img"
                    />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
            </article>
        </main>
    );
}
export default Reviews;
