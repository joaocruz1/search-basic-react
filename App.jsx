import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

 const [search,setSearch] = useState("")
  const [repos, setRespos] = useState([])

  const filterRepos = search.length > 0 ?
     repos.filter(repo=> repo.title.includes(search)):[]


  
  useEffect(()=> {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f764dca08a49dd8590b3fe211c416bc7')
      .then(response => response.json())
      .then(data =>setRespos(data.results))

      
  },[] )

  return(
  <div className="App">
  <input type="text" placeholder='buscar' value={search} onChange={(e)=>{setSearch(e.target.value)}} />

  {search.length > 0 ? (
    <ul>
      {filterRepos.map(repo=>{
        return(
          <li key={repo.id}>
            {repo.title}
          </li>
        )
      })}
    </ul>
  ) : (
    <ul>
      {repos.map(repo=>{
        return(
          <li key={repo.id}>
            {repo.title}
          </li>
        )
      })}
    </ul>

  ) } 

  

</div>
  )
}





export default App
