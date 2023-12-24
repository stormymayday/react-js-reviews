import { useState } from "react";
import data from "./data";

const App = () => {
    const [reviews, setReviews] = useState(data);

    console.log(reviews);

    return <h2>Reviews Starter</h2>;
};
export default App;
