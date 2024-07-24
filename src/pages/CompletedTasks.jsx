import React, { useState, useEffect } from 'react';
import '../styles/Completed.css'
const CompletedTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDeleteAll = () => {
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.filter(task => task.completed).map(task => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              disabled
              style={{ marginRight: '10px' }}
            />
            <span style={{ textDecoration: 'line-through' }}>
              {task.text}
            </span>
            <button 
              onClick={() => handleDeleteTask(task.id)}
              style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
      <button 
        onClick={handleDeleteAll}
        className='delete'
      >
        delete all
      </button>
    </div>
  );
}

export default CompletedTasks;
