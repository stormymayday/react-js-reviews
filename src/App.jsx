import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
    const [index, setIndex] = useState(0);

    const { name, job, image, text } = people[index];

    const nextPerson = () => {
        if (index !== people.length - 1) {
            // setIndex(index + 1);

            // Functional approach:
            setIndex((currentIndex) => {
                const newIndex = currentIndex + 1;
                return newIndex;
            });
        } else {
            setIndex(0);
        }
    };
    const prevPerson = () => {
        if (index > 0) {
            // setIndex(index - 1);

            // Functional approach:
            setIndex((currentIndex) => currentIndex - 1);
        } else {
            setIndex(people.length - 1);
        }
    };

    return (
        <main>
            <article className="review">
                <div className="img-container">
                    <img className="person-img" src={image} alt={name} />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <div className="btn-container">
                    <button
                        className="prev-btn"
                        type="button"
                        onClick={prevPerson}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="next-btn"
                        type="button"
                        onClick={nextPerson}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </article>
        </main>
    );
};
export default App;
