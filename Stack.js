function newStack() {

    let arr = [];

    return {
        push: (data) => {
            arr.push(data);
        },
        pop: () => {
            let elem = arr[arr.length - 1];
            arr.splice(arr.length - 1, 1);
            return elem;
        },
        getAll: () => {
            return [...arr].reverse();
        },
        clear: () => {
            arr = [];
        }
    }
}

module.exports = newStack;