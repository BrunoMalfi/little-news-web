import React, { useContext, useEffect,useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from "../Characters/Characters";

const Home = () => {
    const [showRickAndMortyBoolean, setshowRickAndMortyBoolean] = useState(false)

    const showRickAndMorty =  (event) => {
        event.preventDefault();
        setshowRickAndMortyBoolean(true)
        
    };

    const hideRickAndMorty =  (event) => {
        event.preventDefault();
        setshowRickAndMortyBoolean(false)
        
    };

  return (
    <>
        <h2 className="mb-5">Home</h2>
        {!showRickAndMortyBoolean? (
            <>
                <p className="mt-5"> I had no idea how to fulfill this part so I'll just leave a button dows you can use to see some Rick and Morty characters</p>
                <button onClick={showRickAndMorty} className="btn btn-secondary btn-border-radius btn-hover-bg-shade-amount m-5">Rick and Morty</button>
            </>
        ) : (
            <>
                <button onClick={hideRickAndMorty} className="btn btn-secondary btn-border-radius btn-hover-bg-shade-amount m-5"> Hide Rick and Morty</button>
                <Characters/>
            </>
        ) }
        

    </>
  )
}

export default Home