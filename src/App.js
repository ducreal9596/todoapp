import './App.css';
import Task from './layout/sidebar/Task';
import Todo from './components/todo/Todo';
import Header from './layout/header/Header';
import { Route, Routes } from 'react-router-dom';
import Form from './components/form/Form';
import Update from './components/form/Update';
import NewTask from './layout/sidebar/newTask/NewTask';
import DoneTask from './layout/sidebar/doneTask/DoneTask';
import DoingTask from './layout/sidebar/doingTask/DoingTask';
import Search from './components/search/Search';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Task />
        <div className="content">
          <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/AddTask' element={<Form />} />
            <Route path='/update' element={<Update />} />
            <Route path='/newtask' element={<NewTask />} />
            <Route path='/doingtask' element={<DoingTask />} />
            <Route path='/donetask' element={<DoneTask />} />
            <Route path='/:search' element={<Search />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
