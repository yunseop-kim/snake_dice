import {
    chunk,
    flatten
} from './util.js'
export default class Board {
    constructor(n = 4) {
        if (typeof n !== "number") throw 'n is not a number!';
        this.array = this._generateZigzag(n)
    }

    _generateZigzag(n) {
        return chunk([...Array(n * n).keys()], n)
            .map((rows, index) => {
                if (index % 2 === 1) rows.reverse();
                return rows
            })
    }

    _rows() {
        this.array.map((rows, index) => {
            const divRow = document.createElement('div')
            divRow.classList.add('row')
            divRow.setAttribute('id', 'row' + index)
            // div.innerHTML = rows
            rows.map(cell => {
                const divCell = document.createElement('div')
                divCell.classList.add('cell')
                divCell.innerHTML = cell
                divRow.appendChild(divCell)
                return divCell
            })
            return divRow
        }).map(div => document.getElementById('app').appendChild(div))
    }

// _rows() {
//     this.array.map((row, index) => {
//         const div = document.createElement('div')
//         div.classList.add('row')
//         div.setAttribute('id', 'row' + index)
//         // div.innerHTML = row

//         return div
//     }).map(div => document.getElementById('app').appendChild(div))
// }

    render() {
        this._rows()
    }
}