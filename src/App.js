import React, { useState } from 'react';

import Form from "./components/Form";
import List from "./components/List";

function App() {

  const [todos, setTodos] = useState([])

  return (
    <>
      <main className="container-md">
        <Form todos={todos} setTodos={setTodos}/>
        <List todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}

export default App;
