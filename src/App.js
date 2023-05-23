import './App.css';
import { useState, useEffect } from 'react';
function GitHubUser({name, location, avatar})
{
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar}/>
    </div>
  )
}
function App()
{
  const [data, setData] = useState(null)
  const [err, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetch(`https://api.github.com/users/tausif1337`)
    .then((response)=>response.json())
    .then(setData)
    .then(()=>setLoading(false))
    .catch(setError)
  }, [])
  if (data)
  // if (loading) return <h1>Loading...</h1>
  // if (error) return <pre>{JSON.stringify(error)}</pre>
  // if (!data) return null
    return(
      <GitHubUser
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    )
}
export default App;