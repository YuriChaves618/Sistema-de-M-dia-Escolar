import { useState } from 'react'
import './App.css'

function App() {
 
  const [nome,setNome] = useState("");
  const [media,setMedia] = useState();
  const [situacao,setSituacao] = useState("");
  const [av1,setAv1] = useState();
  const [av2,setAv2] = useState();
  const [av3,setAv3] = useState();
  const [av4,setAv4] = useState();

  function calcularMedia(){

      let numeroav1 = parseFloat(av1);
      let numeroav2 = parseFloat(av2);
      let numeroav3 = parseFloat(av3);
      let numeroav4 = parseFloat(av4);


      if(numeroav1 >= 0 && numeroav1 <= 10 && numeroav2 >= 0 && numeroav2 <= 10 
        && numeroav3 >= 0 && numeroav3 <= 10 && numeroav4 >= 0 && numeroav4 <= 10){

      const numeroMedia = (numeroav1 + numeroav2 + numeroav3 + numeroav4) / 4;
      setMedia(numeroMedia);

      if(numeroMedia>= 7){
        setSituacao("Aprovado");
      }else if(numeroMedia >= 5 && numeroMedia <= 6.9){
        setSituacao("Em recuperação");
      }else{
        setSituacao("Reprovado")
      }
  }else{
    alert("Informe números válidos!");
  }
}

function Limpar(){
  setAv1("");
  setAv2("");
  setAv3("");
  setAv4("");
  setNome("");
  setMedia("");
  setSituacao("");
}

  return (
    <div>

      <div className = "header">
         <h1 className = "titulo"> Sistema de média escolar </h1>

         <img 
          src="https://images.vexels.com/media/users/3/302172/isolated/preview/1037d3fa31e35e225ed11f62eed9171b-abra-o-livro-com-uma-maca-e-uma-arvore.png"
              alt="Livro"
              className="livro"
  />
      </div>

      <div className = "main">

        <form>
          <label className = "alunoNome">
          <h2> Informe o nome do aluno </h2>
          <input
          type = "text"
          value = {nome}
          id = "nome"
          onChange = {(evento) => setNome(evento.target.value)}
          />
          </label>

          <label className = "Notas">
            <h2> Informe as notas do aluno</h2>
            <p> Notas entre 0 e 10 </p>
            <input
            type = "number"
            value = {av1}
            id = "av1"
            onChange = {(evento) => setAv1(evento.target.value)}
            placeholder = "Informe a AV1"
            />
            <br/>
            <input
            type = "number"
            value = {av2}
            id = "av2"
            onChange = {(evento) => setAv2(evento.target.value)}
            placeholder = "Informe a AV2"
            />
              <br/>
            <input
            type = "number"
            value = {av3}
            id = "av3"
            onChange = {(evento) => setAv3(evento.target.value)}
            placeholder = "Informe a AV3"
            />
              <br/>
            <input
            type = "number"
            value = {av4}
            id = "av4"
            onChange = {(evento) => setAv4(evento.target.value)}
            placeholder = "Informe a AV4"
            />
            
          </label>

        </form>

        <button type = "button" className = "calculo" onClick = {calcularMedia}> Calcular Média </button>

        {situacao && (

          <section className = "resultado">
          <h3> Situação final do aluno</h3>
          <p> <strong>Nome: </strong> {nome || "Nome não informado"} </p>
          <p> <strong>Média:</strong> {media.toFixed(1)} </p>
          <p> <strong>Situação final: </strong> {situacao}</p>

          </section>

      )}

      <br/>

       <button type = "button" className = "limpar" onClick = {Limpar}> Limpar informações </button>

      </div>
      
    </div>
  )   
}
export default App;
