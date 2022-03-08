import View from './Views.js';
class searchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    return (this._parentElement.querySelector('.search__field').value = '');
  }

  //Subscriber
  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler(); //links to controlSearchResutls function
    });
  }
}

export default new searchView();
