"use client";

import data from "@/data";
import { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

function Reviews() {
    const [index, setIndex] = useState(0);

    const { name, image, job, text } = data[index];

    const nextPerson = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    const prevPerson = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(data.length - 1);
        }
    };

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
                <div className="btn-container">
                    <button onClick={prevPerson} className="prev-btn">
                        <FaChevronLeft />
                    </button>
                    <button onClick={nextPerson} className="next-btn">
                        <FaChevronRight />
                    </button>
                </div>
            </article>
        </main>
    );
}
export default Reviews;
