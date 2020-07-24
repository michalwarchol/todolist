import React from 'react';
import Content from './components/Content'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./img/fontello-d33de368/css/fontello.css"
import "./css/Todolist.css"

const App = () => {
  return (
    <div className="todolist container-fluid">
      <Content />
      <div className="copyright d-flex col-12 justify-content-center align-self-end">
        <small>Copyright &copy; {new Date().getFullYear()} Michał Warchoł</small>
      </div>
    </div>
  );
}

export default App;
