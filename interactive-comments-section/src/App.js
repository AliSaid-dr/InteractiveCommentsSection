import {useState, useEffect} from 'react';
import Comments from './components/Comments';
<<<<<<< HEAD
import axios from 'axios';
=======
import AddComment from './components/AddComment';
>>>>>>> ef4cc0912ba66dda1f7041d9c77158f4104e5df4
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
  return (
<<<<<<< HEAD
    <div>
      <Comments data={data}/>
=======
    <div >
      <AddComment/>
>>>>>>> ef4cc0912ba66dda1f7041d9c77158f4104e5df4
    </div>
  );
}

export default App;
