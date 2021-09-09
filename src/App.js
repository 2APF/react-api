import React, { Component } from "react";
import api from "./api"

class App extends Component {

  //criando um estado onde vou estar armazenando os filmes
  state= {
    filmes: [],
  }

  //componentDidMount para buscar os dados na api, ele é chamado logo após alguma atualização ocorrer
  async componentDidMount() {

    //pesquisando o valor que preciso dentro da api
    const response = await api.get('avengers');
    
    //setStates para setar os valores que quero receber, no state, filmes
    this.setState({ filmes: response.data});
  }

  //renderizando as informações
  render(){
    //buscando os dados que estão no state filmes
    const { filmes } = this.state;

    return(
      <div>
        <h1>Listar os filmes</h1>


        {filmes.map(filme => ( //percorrendo o array filmes, utilizando map
          <li key={filme.show.id}>
            <h2>
              <strong>Título: </strong>
              {filme.show.name}
            </h2>
            <p>
              {filme.show.url}
            </p>  
              
            
          </li>
        ))}
      </div>
    );
  }
}

export default App;
