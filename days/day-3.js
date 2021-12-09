// Day 3 Part 1

const file = './days/data-3.txt';

async function read(file) {
    const fsPromises = require('fs').promises;
    const data = await fsPromises.readFile(file)
        .catch(err => console.log(err));
    return data.toString();
};

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
