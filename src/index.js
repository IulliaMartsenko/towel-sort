// You should implement your task here.

function towelSort(matrix) {
    const arr = [];

    if (matrix === undefined) {
        return [];
    }

    matrix.forEach((item, index) => {
        if (index % 2 !== 0) {
            item.reverse();
        }
        arr.push(...item);
    });
    return arr;
};


module.exports = towelSort;
