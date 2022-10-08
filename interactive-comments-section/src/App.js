import {useState, useEffect} from 'react';
import Comments from './components/Comments';
import axios from 'axios';
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
    <div>
      <Comments data={data}/>
    </div>
  );
}

export default App;
