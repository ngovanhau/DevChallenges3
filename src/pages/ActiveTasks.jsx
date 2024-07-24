import React, { useState, useEffect } from 'react';
import '../styles/Active.css';
const ActiveTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    // Load tasks from localStorage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleAddTask = () => {
    if (taskText.trim()) {
      const newTask = { id: Date.now(), text: taskText, completed: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setTaskText('');
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <input 
          type="text" 
          value={taskText} 
          onChange={(e) => setTaskText(e.target.value)} 
          placeholder="add details"
          style={{ flex: 1, padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={handleAddTask}
          className='active'
        >
          Add
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.filter(task => !task.completed).map(task => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleToggleTask(task.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActiveTasks;