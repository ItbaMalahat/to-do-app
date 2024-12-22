import React from 'react';

const TodoList = ({ todos, onDelete }) => {
  const styles = {
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    deleteButton: {
      padding: '5px 10px',
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    deleteButtonHover: {
      backgroundColor: '#a71d2a',
    },
  };

  return (
    <ul style={styles.list}>
      {todos.map(todo => (
        <li key={todo.id} style={styles.listItem}>
          {todo.task}
          <button
            onClick={() => onDelete(todo.id)}
            style={styles.deleteButton}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.deleteButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.deleteButton.backgroundColor)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
