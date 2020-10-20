import React, {useState, useEffect} from 'react';

export default function App(){
  const [repositories, setRepositories] = useState([]);

  useEffect(async()=> {
 const response = await fetch("https://api.github.com/users/AlisonPLC/repos");
 const data = await response.json();

 setRepositories(data);
  },[]);

  useEffect(()=>{
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `Vc tem  ${filtered.length} Favoritos`;

  },[repositories]);

 function HandleFavorite(id){
  const newRepositories = repositories.map(repo =>{
    return repo.id == id ? {...repo,favorite: !repo.favorite } : repo
  })
  setRepositories(newRepositories);
 }
 

  return (
    <div style={{backgroundColor: "lightblue"}}>
      <h2>Repositorios gerais</h2>
    <ul>
      {repositories.map(repo => (
      <li key={repo.id}>{repo.name} {repo.favorite && <span>(Favorito)</span>}
        <button onClick={() => HandleFavorite(repo.id)}>Favoritar</button>
      </li>
      ))}
    </ul>
    </div>
  );
}