import { useState } from "react";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {

    if(tarefa.trim() === ''){
      alert("Informe uma tarefa")
      return
    }

    const novaTarefa = {
      id : Date.now(),
      nome: tarefa,
    };
    setListaTarefas([...listaTarefas, novaTarefa]);

    console.log(listaTarefas);
  };

  return (
    <div className="todo-container">
      <h2>Lista de Tarefas ✅</h2>
      <div className="input-container">
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {listaTarefas.map((task) => (
          <li key={task.id}>
            {task.nome}
            <div>
              <button className="complete-btn">✔</button>
              <button className="delete-btn">❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;