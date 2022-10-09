import {useState, useEffect} from 'react';
// import Comments from './components/Comments';
<<<<<<< HEAD
import axios from 'axios';
=======
// import AddComment from './components/AddComment';
>>>>>>> ef4cc0912ba66dda1f7041d9c77158f4104e5df4
import React,{useState,useEffect} from 'react';
// import data from "data.json";
import './App.css';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('data.json')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  })
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div >
      <AddComment/>
    </div>
  );
}

export default App;
