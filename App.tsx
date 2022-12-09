import * as React from 'react';
import './style.css';

const API_KEY = "751f8cc2";
export default function App() {
  const [data, setData] = React.useState<{Poster?:string}>({});
  const [query, setQuery] = React.useState<String>("");
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState("");
  const [poster, setPoster] = React.useState("");
  const getData = async () => {
    console.log(`https://www.omdbapi.com/?apikey=751f8cc2${API_KEY}${query}`);
    const data = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}${query}`)
    setData(await data.json());
  }

  const handleClick = () => {
    const temp = `&t=${title}&y=${year}`;
    setQuery(temp);
  }
  
  React.useEffect(() => {
    getData();
  },[query]);
  return (
    <div>
      <label>Title</label>
      <input type="text" value={title} name="title" onChange={e => setTitle(e.target.value)}/><br/>
      <label>Year</label>
      <input type="text" value={year} name="year" onChange={e => setYear(e.target.value)} /><br/>
      <label>Poster</label>
  
      <input type="text" value={poster} name="poster" onChange={e => setPoster(e.target.value)} />
      <button onClick={handleClick}>Search</button>
      <br/>
      {data.Poster ? <img src={data.Poster} /> : "No Poster"}
    </div>
  );
}
