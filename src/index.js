import Board from './Board';
const board = new Board();
board.render();
if (module.hot) {
     module.hot.accept();
}