import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
    const [index, setIndex] = useState(0);

    const { name, job, image, text } = people[index];

    const checkNumber = (number, array) => {
        if (number > array.length - 1) {
            return 0;
        }

        if (number < 0) {
            return array.length - 1;
        }

        return number;
    };

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);

        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber, people));
    };

    const nextPerson = () => {
        // if (index !== people.length - 1) {
        //     // setIndex(index + 1);

        //     // Functional approach:
        //     setIndex((currentIndex) => {
        //         const newIndex = currentIndex + 1;
        //         return newIndex;
        //     });
        // } else {
        //     setIndex(0);
        // }

        setIndex((currentIndex) => {
            const newIndex = currentIndex + 1;

            return checkNumber(newIndex, people);
        });
    };

    const prevPerson = () => {
        // if (index > 0) {
        //     // setIndex(index - 1);
        //     // Functional approach:
        //     setIndex((currentIndex) => currentIndex - 1);
        // } else {
        //     setIndex(people.length - 1);
        // }
        setIndex((currentIndex) => {
            const newIndex = currentIndex - 1;

            return checkNumber(newIndex, people);
        });
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
                <button
                    type="button"
                    className="btn btn-hipster"
                    onClick={randomPerson}
                >
                    surprise me
                </button>
            </article>
        </main>
    );
};
export default App;
