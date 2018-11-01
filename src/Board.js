import { chunk } from './util.js'
export default class Board {
    constructor(n = 4) {
        if (typeof n !== "number") throw 'n is not a number!';
        this._n = n;
    }

    render() {
        const result = chunk([...Array(this._n * this._n).keys()], this._n)
            .map((rows, index) => {
                if (index % 2 === 1) rows.reverse();
                return rows
            })
        console.log('result', result)
        // const cells = document.createElement('div')
        // const node = document.createTextNode('This is Test')
        // cells.appendChild(node);
        // document.getElementById('app').appendChild(cells)
    }
}
