// Day 1 Puzzle Part 1

const file = './days/data.txt';

async function read(file) {
    const fsPromises = require('fs').promises;
    const data = await fsPromises.readFile(file)
        .catch(err => console.log(err));
    return data.toString();
};

/* 
read(file)
    .then(data => {
        let count = 0;
        const values = data.split("\n");
        let previous = parseInt(values[0]);
        for (let i = 1; i < values.length; i++) {
            let current = parseInt(values[i]);
            if (previous < current) count++;
            previous = current;
        }
        // console.log(count);
        return count;
    });
*/
    
// Day 1 Puzzle Part 2
    
read(file)
    .then(data => {
        let count = 0;
        const values = data.split("\n");
        let window1 = 0;
        let window2 = 0;
        let window3 = 0;
        let step = 1; 
        let previous = 0;
        for (let i = 0; i < values.length; i++) {
            let current = parseInt(values[i]);
            if (step === 1) {
                window1 += current;
                window2 += current;
                window3 += current;

                // check window2 if full
                if (i > 2) {
                    // console.log("window2", window2);
                    if (previous < window2) count++;
                    // reset
                    previous = window2;
                    window2 = 0;
                };
                step++;
            } else if (step === 2) {
                window1 += current;
                window2 += current;
                window3 += current;

                // check window3 if full
                if (i > 2) {
                    // console.log("window3", window3);
                    if (previous < window3) count++;
                    // reset
                    previous = window3;
                    window3 = 0;
                }
                step++;
            } else {
                window1 += current;
                window2 += current;
                window3 += current;

                // check window1 if past first set
                if (i > 2) {
                    // console.log("window1", window1);
                    if (previous < window1) count++;
                    // reset
                    previous = window1;
                    window1 = 0;
                }
                step = 1;
            } 
        }
        console.log(count);
        return count;
    });