import { Container } from './styles'
import { useState, useEffect } from 'react'

import { PostCard } from './components/PostCard'
import { api } from './service/api'

export function App(){
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const response = await api.get('data')
    const posts = response.data
    setPosts(posts)
  }

  useEffect(() => {
    getPosts()
  }, [])


  return (
    <Container>
      {posts.length > 0 && posts.map((post) => (
        <PostCard 
          key={post._id} 
          post={post}
           
        />
      ))}
    </Container>
  )
}