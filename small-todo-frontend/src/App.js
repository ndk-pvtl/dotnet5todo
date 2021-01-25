import { useEffect, useState } from 'react';
import './App.css';

const apiUrl = process.env.REACT_APP_APIURL || '';

const App = () => {
  let [todos, setTodos] = useState([]);
  let [newTask, setNewTask] = useState('');
  let [newTaskDone, setNewTaskDone] = useState(false);

  const loadTasks = async () => {
    const response = await fetch(`${apiUrl}/api/TodoItems`);
    const todos = await response.json();
    setTodos(todos);
  };

  useEffect(loadTasks, []);


  const saveTask = async () => {
    const response = await fetch(`${apiUrl}/api/TodoItems`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 0,
        name: newTask,
        isComplete: newTaskDone
      })
    });

    await loadTasks();
  }

  const deleteTask = async (id) => {
    await fetch(`${apiUrl}/api/TodoItems/${id}`, {
      method: 'DELETE',
    });

    await loadTasks();
  };


  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Todo list
        </p>
      </header>
      <content style={{ textAlign: 'left' }}>
        <ol>
          {todos.map(todo =>
            <li key={todo.id}>
              {todo.name} {todo.isComplete ? '[done]' : ''} &nbsp;
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
            </li>
          )
          }
        </ol>
        <div>
          <div>
            <label htmlFor='task'>Task</label>&nbsp;
          <input type='text' name='task' value={newTask} onChange={e => setNewTask(e.target.value)} />
          </div>
          <div>
            <label htmlFor='done'>done?</label>&nbsp;
          <input type='checkbox' name='done' checked={newTaskDone} onChange={e => setNewTaskDone(e.target.checked)} />
          </div>
          <button onClick={saveTask}>Add</button>
        </div>
      </content>
    </div>
  );
}

export default App;
