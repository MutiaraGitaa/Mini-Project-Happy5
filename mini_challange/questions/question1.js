const clothing = ["shirt", "pants", "jacket"]
const color = ["black", "white"]
const size = ["S", "M", "L"]

const generateList = () => {
    // fill in your answere here
    let result = [];

    for (let a = 0; a < clothing.length; a++) {
        for (let b = 0; b < color.length; b++) {
            for (let c = 0; c < size.length; c++) {
                result.push(clothing[a] + " " + color[b] + " " + size[c])
            }
        }
    }

    return result;
}

const list = generateList();
console.log(list)
