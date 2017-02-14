var idx = 0;

module.exports = function (type, name) {
    switch (type) {
        case 0:
            return function () {
                console.log("[" + idx++ + "] Hello " + name + "!");
            };
        case 1:
            return function (print) {
                print("[" + idx++ + "] Bye " + name + "!")
            };
        default:
            throw new Error("Unknow type" + type);
    }
};