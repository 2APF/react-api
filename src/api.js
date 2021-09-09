import axios from "axios";
//Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node. js.

//ao inves de criar um get ou um post. Para deixar dinamico, crio uma constante que recebe axios.create
const api = axios.create({

    //coloco a url da api que quero consumir
    baseURL: 'https://api.tvmaze.com/search/shows?q='
});

//aqui estou exportando a variavel api que criei acima
export default api;