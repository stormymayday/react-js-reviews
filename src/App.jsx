import { useState } from 'react';
import people from './data.js';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {

  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {

    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;

  };

  const prevPerson = () => {

    setIndex((currentIndex) => {

      const newIndex = currentIndex - 1;

      // if (newIndex < 0) {
      //   return people.length - 1;
      // }

      // return newIndex;

      return checkNumber(newIndex);

    });

  };

  const nextPerson = () => {


    setIndex((currentIndex) => {

      const newIndex = currentIndex + 1;

      // if (newIndex > people.length - 1) {

      //   return 0;

      // }

      // return newIndex;

      return checkNumber(newIndex);

    });

  };

  const randomPerson = () => {

    setIndex((currentIndex) => {

      let newIndex = Math.floor(Math.random() * people.length);

      if (newIndex === currentIndex) {
        newIndex++;
      }

      return checkNumber(newIndex);

    });

  };

  return (
    <main>
      <article className='review'>
        <div className="img-container">
          <img className='person-img' src={image} alt={name} />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className="btn-container">
          <button className='prev-btn' type='button' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' type='button' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>

        <button className='btn btn-hipster' onClick={randomPerson}>surprise me</button>

      </article>
    </main>
  );
};
export default App;
