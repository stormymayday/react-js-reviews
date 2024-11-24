export const getNextCyclicIndex = (
    currentIndex: number,
    arrayLength: number
): number => {
    if (currentIndex < arrayLength - 1) {
        return currentIndex + 1;
    } else {
        return 0;
    }
};

export const getPreviousCyclicIndex = (
    currentIndex: number,
    arrayLength: number
): number => {
    if (currentIndex > 0) {
        return currentIndex - 1;
    } else {
        return arrayLength - 1;
    }
};

export const getRandomIndex = (
    currentIndex: number,
    arrayLength: number
): number => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * arrayLength);
    } while (randomIndex === currentIndex && arrayLength > 1);
    return randomIndex;
};
