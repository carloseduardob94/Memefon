import { Container } from './styles'

import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare2 } from 'react-icons/fi'
import { FaRegComment } from 'react-icons/fa'

export function Footer(){
  return(
    <Container>
      <div>
        <AiOutlineHeart />
        <p>0</p>
      </div>
      <div>
        <FaRegComment />
        <p>0</p>
      </div>
      <FiShare2 />
    </Container>
  )
}