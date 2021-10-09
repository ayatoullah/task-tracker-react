import Header from './components/Header';
import {useState} from 'react';
import Tasks from './components/Tasks';
import  './index.css';

function App() {
  const [tasks, setTasks] =  useState([{
    id : 1,
    text : "react crash course",
    day : "Feb 5th at 2:30pm",
    reminder : true
},
{
    id : 2,
    text : "15 react projects",
    day : "Oct 10th at 3:30pm",
    reminder : true
  }]);
  const onDelete = id => {
    console.log(id);
    setTasks(tasks.filter(task => task.id !== id));
  }

  const onToggle = id => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder : !task.reminder} : task));
  }
  return (
    <div className="container">
      <Header title="TaskTracker"/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/>
                         : "No Tasks to show"}
    </div>
  );
}

export default App;
