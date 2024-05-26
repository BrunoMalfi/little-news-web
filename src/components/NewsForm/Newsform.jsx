import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Newsform = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({
        title: "",
        author: "",
        date:"",
        abstract:"",
        body:""
    });

    const initialState = {
        title: "",
        author: "",
        date:"",
        abstract:"",
        body:""
    };

    const clearState = () => {
        setData(initialState);
    };

    const handleInputChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit =  (event) => {
        event.preventDefault();
        console.log("sending data..." + data.title + " " + data.title);
        localStorage.setItem(data.author +"|"+ data.title ,JSON.stringify(data));
        setTimeout(() => {
            navigate("/newslist");
          }, 1000);
        clearState();
    };

    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState("")
    const validateForm = () => {
        switch (true) {
            case !data.title:
              setMessage("");
              break;
            case data.title.length < 5:
              setMessage("News title must be at least 5 characters");
              setBtnDisabled(true);
              break;
              case data.author.length < 3:
                setMessage("Author name must be at least 3 characters");
                setBtnDisabled(true);
                break;
            case data.date.length == 0 :
                setMessage("Add news date date");
                break;
            case data.abstract.length < 10 :
                setMessage("News abstract must be at least 10 characters");
                setBtnDisabled(true);
                break;
                case data.body.length < 50 :
                    setMessage("News body must be at least 50 characters");
                    setBtnDisabled(true);
                    break;

            default:
              setMessage("");
              setBtnDisabled(false);
            break;
          }
      };
    
    useEffect(() => {
        validateForm();
      }, [data]);




  return (
    <div className="container mt-5">
      <h2>Submit News</h2>
      <form onSubmit={handleSubmit} id="simple-form">
        <div className="form-group">
          <label htmlFor="newsTitle">News Title</label>
            <input 
                type="text" 
                className="form-control" 
                id="newsTitle" 
                placeholder="Enter news title"
                value={data.title}
                onChange={handleInputChange}
                name="title"
            />
        </div>
        <div className="form-group">
          <label htmlFor="newsAuthor">News Author</label>
            <input 
                type="text" 
                className="form-control"
                id="newsAuthor" 
                placeholder="Enter author's name"
                value={data.author}
                onChange={handleInputChange} 
                name="author"
            />
        </div>
        <div className="form-group">
          <label htmlFor="newsDate">News Date</label>
            <input 
                type="date" 
                className="form-control"
                id="newsDate"
                value={data.date}
                onChange={handleInputChange}
                name="date"
            />
        </div>
        <div className="form-group">
          <label htmlFor="newsAbstract">News Abstract</label>
          <textarea 
            className="form-control" 
            id="newsAbstract" 
            rows="3"
            placeholder="Enter news abstract"
            value={data.abstract}
            onChange={handleInputChange}
            name="abstract"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="newsBody">News Body</label>
          <textarea 
            className="form-control"
            id="newsBody"
            rows="6" 
            placeholder="Enter news body"
            value={data.body}
            onChange={handleInputChange}
            name="body"
            ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={btnDisabled} >Submit</button>
      </form>
      {message}
    </div>
  );
}

export default Newsform;
