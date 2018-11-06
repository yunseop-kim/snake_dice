import {
    chunk,
    isEven,
    isOdd
} from './util.js'

const cellSize = 51;
export default class Board {
    constructor(n = 4) {
        if (typeof n !== "number") throw 'n is not a number!';
        const div = document.createElement('div')
        div.classList.add('board')
        this._array = this._generateZigzag(n)
        this._position = 0
        this._app = document.getElementById('app').appendChild(div);
    }

    _generateZigzag(n) {
        return chunk([...Array(n * n).keys()], n)
            .map((rows, index) => {
                if (index % 2 === 1) rows.reverse();
                return rows
            })
    }

    _addRows() {
        this._array.map((rows, index) => {
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
        }).map(div => this._app.appendChild(div))
    }

    _move(value = 1) {
        let top = horse.offsetTop;
        let left = horse.offsetLeft;

        if (this._position >= 15) return;
        this._position += value
        console.log(this._position, top, left)
        if ((this._position % 4 === 0) && this._position > 1) {
            horse.style.top = top + cellSize + 'px';
        } else if (isEven(Math.floor(this._position / 4))) {
            horse.style.left = (left + cellSize) + 'px';
        } else if (isOdd(Math.floor(this._position / 4))) {
            horse.style.left = (left - cellSize) + 'px';
        }
    }

    _addButton() {
        const div = document.createElement('div')
        this.dice = document.createElement('button')
        this.dice.setAttribute('id', 'dice');
        this.dice.innerText = '주사위 굴리기'
        this.dice.addEventListener('click', (evt) => {
            let x = 0,
                delay = 500,
                repetitions = Math.floor(Math.random() * 6) + 1;
            const intervalID = window.setInterval(() => {
                this._move();
                if (++x === repetitions) {
                    window.clearInterval(intervalID);
                }
            }, delay);
        })
        div.appendChild(this.dice)
        this._app.appendChild(div)
    }

    _addHorse() {
        this.horse = document.createElement('div')
        this.horse.setAttribute('id', 'horse')
        this.horse.classList.add('horse')
        this._app.appendChild(this.horse)
    }

    render() {
        this._addRows()
        this._addHorse()
        this._addButton()
    }
}