import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:5000/todos');
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async () => {
    if (!task.trim()) return;
    const response = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task }),
    });
    if (response.ok) {
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
      setTask('');
    }
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '600px',
      margin: '50px auto',
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      color: '#333',
    },
    inputSection: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    input: {
      flex: '1',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginRight: '10px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>To-Do App</h1>
      <div style={styles.inputSection}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button
          onClick={addTodo}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Add
        </button>
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
