class Board {
    constructor(n = 4) {
        if (typeof n !== "number") throw 'n is not a number!';
        this._n = n;
    }

    _chunk(array, size) {
        const result = [];
        let index = 0;
        while (index < array.length) {
            result.push(array.slice(index, size + index));
            index += size;
        }
        return result;
    }

    render() {
        const result = this._chunk([...Array(this._n * this._n).keys()], this._n)
            .map((rows, index) => {
                if (index % 2 === 1) rows.reverse();
                return rows
            })
        console.log(result)
    }
}
