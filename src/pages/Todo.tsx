import React, { useState } from "react";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<{ comment: string; completed: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { comment: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  // 状態を切り替える関数
  const toggleState = (index: number) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // TODOを削除する関数
  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const styles = {
    table: {
      width: "100%",
      borderCollapse: "collapse" as "collapse",
    },
    th: {
      border: "1px solid #ddd",
      padding: "8px",
      backgroundColor: "#f4f4f4",
      textAlign: "left" as "left",
    },
    td: {
      border: "1px solid #ddd",
      padding: "8px",
    },
    addTodo: {
      marginTop: "20px",
    },
    input: {
      padding: "8px",
      marginRight: "10px",
    },
    button: {
      padding: "8px 12px",
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      <h1>TODOリスト</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>コメント</th>
            <th style={styles.th}>状態</th>
            <th style={styles.th}>操作</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{todo.comment}</td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => toggleState(index)}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
                >
                  {todo.completed ? "完了" : "未完了"}
                </button>
              </td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => deleteTodo(index)}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
                >
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={styles.input}
        />
        <button
          style={styles.button}
          onClick={addTodo}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          追加
        </button>
      </div>
    </div>
  );
};

export default Todo;
