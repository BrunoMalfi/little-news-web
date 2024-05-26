import { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"
import axios from "axios"

const initialState = {
  characters: [],
  news:[],
  x:""
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const res = await axios.get("https://rickandmortyapi.com/api/character");
        dispatch({
          type: "GET_CHARACTERS",
          payload: res.data.results,
        });//action
      };

      const getNews = async () => {
        const now = new Date();
        const year = now.getFullYear();      
        const month = now.getMonth() + 1;
        try{
          const res = await axios.get("https://newyorktimesbypassnode.onrender.com/api/news/?year="+year+"&month="+month+"&key=nJo0SN4dV4yGMuNcAsVriCPjF9IGZn9R");
          dispatch({
            type: "GET_NEWS",
            payload: res.data.response,
          });
          console.log('test : ',res.data)
          //action
        }catch(error){
          console.log('New York times error : ',error)
        }
      };

      const testApi = async () => {
        try{
          const res = await axios.get("https://newyorktimesbypassnode.onrender.com/api/test/?saludo=hola&nombre=bruno");
          dispatch({
            type: "GET_TEST",
            payload: res.data.msg, 
          });
          console.log('test : ',res.data)
          //action
        }catch(error){
          console.log('Test error : ',error)
        }
      };
      const x=()=>{
        // peticion api
        // dipatch "x"
      }
    
      return (
        <GlobalContext.Provider
          value={{
            characters: state.characters,
            getCharacters,
            news: state.news,
            getNews,
            test:state.test, 
            testApi
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
}  