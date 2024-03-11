import { useState } from "react";

interface InfoAlunoProps {
  nome: string;
  idade: string;
}

export default function App() {
  const [input, setInput] = useState("");

  // const [aluno, setAluno] = useState("sem nenhum nome");
  const [idade, setIdade] = useState("");

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();

  const [contador, setContador] = useState(0);
  function mostrarAluno() {
    setInfoAluno({
      nome: input,
      idade: idade,
    });
  }
  // setAluno(input);
  // setAlunoIdade(alunoIdade);

  function adicionar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  function diminuir() {
    setContador((valorAtual) => valorAtual - 1);
  }

  return (
    <div>
      <h1>Conhecendo useState</h1>
      <input
        placeholder="Digite o nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="Digite a idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <br />
      <br />
      <button onClick={mostrarAluno}>Mosntrar Aluno</button>
      <h3>Bem vindo:{infoAluno?.nome}</h3>
      <h4>Você tem:{infoAluno?.idade}</h4>
      <hr />
      <br />
      <br />
      <h2>Contador com useState</h2>
      <button onClick={adicionar}>+</button> <br />
      {contador}
      <br />
      <button onClick={diminuir}> - </button>
    </div>
  );
}
