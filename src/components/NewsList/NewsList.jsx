import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const NewsList = () => {
    const { news, getNews} = useContext(GlobalContext);

    useEffect(() => {
        getNews();
    }, []);

     const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short'
        }).format(date);
      };
      

   if(news.length <= 0){
     console.log('news', news)
     return (
        <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
   )
   }

//  return <p>{test}</p> }
   return <div>{
        news.slice().reverse().map((neww,i)=>{
            let imgLink=""; 
            if(neww.multimedia != undefined && neww.multimedia.length != 0 ) {
                if (neww.multimedia[0].type =="image" ){
                    imgLink="https://www.nytimes.com/"+neww.multimedia[0].url
                }
            }
            return (
                <div key={i} className="card mb-3">
                    <div className="d-flex justify-content-between align-items-center p-3">
                        <h5 className="card-title">{neww.headline.main}</h5>
                        <p className="card-text">{formatDate(neww.pub_date)}</p>
                    </div>
                    <img src={imgLink} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <p className="card-text">{neww.abstract}</p>
                        <p className="card-text">{neww.lead_paragraph}</p>
                        <a href={neww.web_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Click here to read the article
                        </a>
                    </div>
                </div>
            )
        })
    }</div>;
 };

export default NewsList;