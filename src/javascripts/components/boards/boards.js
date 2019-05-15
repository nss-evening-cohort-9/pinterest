import util from '../../helpers/util';
import boardData from '../../helpers/data/boardsData';

const writeBoards = (boards) => {
  let domString = '';
  boards.forEach((board) => {
    domString += '<div class="col-3">';
    domString += `<div id='${board.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${board.name}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      writeBoards(resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
