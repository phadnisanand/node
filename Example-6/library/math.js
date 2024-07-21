
let square = (n) => {
    if (isNaN(n)) {
        return false;
    }
    n = +n;
    return n*n;
};

let cube = (n) => {
    if (isNaN(n)) {
        return false;
    }
    n = +n;
    return n*n*n;
};

module.exports = {
    square,
    cube
}