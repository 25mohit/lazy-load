import axios from 'axios'
import { useEffect, useState } from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(res =>  {setPosts(res.data)})
          .catch(err => console.log(err))
    },[])

  return (
    <div className='home'>
            {
                posts?.map(post => <ProfileCard key={post.id} data={post} />)
            }
    </div>
  )
}

export default Home