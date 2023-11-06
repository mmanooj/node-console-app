function newQueue() {

    let arr = [];

    return {
        push: (data) => {
            arr.push(data);
        },
        pop: () => {
            let elem = arr[0];
            arr.splice(0, 1);
            return elem;
        },
        getAll: () => {
            return [...arr];
        },
        clear: () => {
            arr = [];
        }
    }
}

module.exports = newQueue;