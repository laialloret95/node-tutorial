const {readFile, writeFile} = require('fs');

// Callback Hell
readFile('./content/first.txt','utf-8', (err, result) => {
    if(err) {
        return err;
    } else {
        const first = result;
        readFile('./content/second.txt','utf-8', (err, result) => {
            if(err) {
                return err;
            } else {
                const second = result;
                writeFile(
                    './content/result-async.txt', 
                    `Here is the result: ${first}, ${second}`,
                    (err,result) => {
                        if(err) {
                            return err;
                        } else {
                            console.log(result);
                        }
                    }
                )
            }
        })
    }
})