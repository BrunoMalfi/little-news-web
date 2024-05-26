import React, { useContext, useEffect,useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const { news, getNews} = useContext(GlobalContext);

    useEffect(() => {
        getNews();
    }, []);



  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Bruno's MAgic website </h5>
            <p>
              At your right you can check last news
            </p>
          </div>
          <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Latest News</h5>
            <ul className="list-unstyled mb-0">
            {news.length != 0 ? 
                (
                    <>  
                        <div className="row"> 
                            <li className=" col mb-3">{news.slice().reverse()[0].headline.main}</li>
                            <li className=" col mb-3">
                                <a href={news.slice().reverse()[0].web_url} target="_blank" className="text-dark">Link</a>
                            </li>
                        </div>
                        <div className="row"> 
                            <li className=" col mb-3">{news.slice().reverse()[1].headline.main}</li>
                            <li className=" col mb-3">
                                <a href={news.slice().reverse()[0].web_url} target="_blank" className="text-dark">Link</a>
                            </li>
                        </div>
                        <div className="row"> 
                            <li className=" col mb-3">{news.slice().reverse()[2].headline.main}</li>
                            <li className=" col mb-3">
                                <a href={news.slice().reverse()[0].web_url} target="_blank" className="text-dark">Link</a>
                            </li>
                        </div>
                        <div className="row"> 
                            <li className=" col mb-3">{news.slice().reverse()[3].headline.main}</li>
                            <li className=" col mb-3">
                                <a href={news.slice().reverse()[0].web_url} target="_blank" className="text-dark">Link</a>
                            </li>
                        </div>
                    </>
                ):(
                <>
                    
                    <li>
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </li>
                    <li>
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </li>
                    <li>
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </li>
                    <li>
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </li>
                </>
                )
           }
          </ul>
          </div>
          
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2024 Bruno :
        <a className="text-white" href="https://github.com/BrunoMalfi/" target="_blank" > Click here to find other projects</a>
      </div>
    </footer>
  );
}

export default Footer;
