"use client";

import data from "@/data";
import { useState } from "react";
import { FaReact } from "react-icons/fa";

function Reviews() {
    const [index, setIndex] = useState(0);

    const { name } = data[index];

    console.log(name, setIndex);

    return (
        <div>
            <h1>Reviews</h1>
            <FaReact />
        </div>
    );
}
export default Reviews;
