// Day 2 Part 1

const file = './days/data-2.txt';

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
        let horizontalPosition = 0;
        let depth = 0;
        for (let i = 0; i < values.length; i++) {
            const currentCommand = values[i].split(" ");
            const direction = currentCommand[0];
            const value = parseInt(currentCommand[1]);
            if (direction === "forward") {
                horizontalPosition += value;
            } else if (direction === "down") {
                depth += value;
            } else if (direction === "up") {
                depth -= value;
            }
        };
        // console.log(horizontalPosition * depth);
        return horizontalPosition * depth;
    });
    */
   
   // Day 2 Part 2
   
   read(file)
   .then(data => {
        const values = data.split("\n");
        let horizontalPosition = 0;
        let depth = 0;
        let aim = 0;
        for (let i = 0; i < values.length; i++) {
            const currentCommand = values[i].split(" ");
            const direction = currentCommand[0];
            const value = parseInt(currentCommand[1]);
            if (direction === "forward") {
                horizontalPosition += value;
                depth += (aim * value);
            } else if (direction === "down") {
                aim += value;
            } else if (direction === "up") {
                aim -= value;
            };
        };
        console.log(horizontalPosition * depth);
        return horizontalPosition * depth;
    });