import { useState } from "react";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

  useEffect(()=>{

        localStorage.setItem("LISTA_TAREFA", JSON.stringify(listaTarefas))

  } , [listaTarefas])

  const adicionarTarefa = () => {
    if (tarefa.trim() === "") {
      alert("Informe uma tarefa");
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      nome: tarefa,
      completada: false,
    };
    setListaTarefas([...listaTarefas, novaTarefa]);

    setTarefa("");
    console.log(listaTarefas);
  };

  const alterarSituacao = (id) => {
    setListaTarefas(
      listaTarefas.map((task) =>
        task.id == id ? { ...task, completada: !task.completada } : task
      )
    );
  };

  const excluirTarefa = (id) => {
    setListaTarefas(listaTarefas.filter((task) => task.id != id));
  };

  return (
    <div className="todo-container">
      <h2>Lista de Tarefas ✅</h2>
      <p> Total tarefas : { listaTarefas.length || "Sem Tarefas"}</p>
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
          <li
            key={task.id}
            style={{
              textDecoration: task.completada ? "line-through" : "none",
              color: task.completada ? "gray" : "black",
            }}
          >
          
            {task.nome}
            <div>
              <button onClick={() => alterarSituacao(task.id)} className="complete-btn">✔</button>
              <button onClick={() => excluirTarefa(task.id)} className="delete-btn">❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
