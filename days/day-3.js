// Day 3 Part 1

const file = './days/data-3.txt';

async function read(file) {
    const fsPromises = require('fs').promises;
    const data = await fsPromises.readFile(file)
        .catch(err => console.log(err));
    return data.toString();
};

/*
read(file)
    .then(data => {
        const values = data.split("\n");
        const count0 = new Array(12).fill(0);
        const count1 = new Array(12).fill(0);
        let gamma = "";
        let epsilon = "";
        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < values[i].length; j++) {
                if (values[i][j] === "0") {
                    count0[j]++;
                } else {
                    count1[j]++;
                };
            };
        };
        for (let i = 0; i < count0.length; i++) {
            if (count0[i] > count1[i]) {
                gamma += "0";
                epsilon += "1";
            } else {
                gamma += "1";
                epsilon += "0";
            };
        };

        // console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
        return parseInt(gamma, 2) * parseInt(epsilon, 2);
    });
*/

// Day 3 Part 2

read(file)
    .then(data => {
        const values = data.split("\n");

        const findMinOrMaxChar = (arr, position, type) => {
            let count0 = 0;
            let count1 = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][position] === "0") {
                    count0++;
                } else {
                    count1++;
                };
            };
            if (type === "max") {
                return count0 > count1 ? "0" : "1";
            } else {
                return count0 > count1 ? "1" : "0";
            };
        };

        const filterOnChar = (arr, position, char) => {
            return arr.filter(number => {
                return number[position] === char;
            });
        }

        let maxArr = [...values];
        let minArr = [...values];
        let gamma = "";
        let epsilon = "";
        
        // filter for most common digit
        for (let i = 0; i < 12; i++) {
            const currentMax = findMinOrMaxChar(maxArr, i, "max");
            maxArr = filterOnChar(maxArr, i, currentMax);
            if (maxArr.length === 1) {
                gamma = maxArr[0];
                break;
            };
        };
        
        // filter for least common digit
        for (let i = 0; i < 12; i++) {
            const currentMin = findMinOrMaxChar(minArr, i, "min");
            minArr = filterOnChar(minArr, i, currentMin);
            if (minArr.length === 1) {
                epsilon = minArr[0];
                break;
            };
        };
        
        // convert to decimal
        // console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
        return parseInt(gamma, 2) * parseInt(epsilon, 2);
    });