"use client";

import data from "@/data";
import { useState } from "react";

function Reviews() {
    const [index, setIndex] = useState(0);

    const { name } = data[index];

    console.log(name, setIndex);

    return <div>Reviews</div>;
}
export default Reviews;
