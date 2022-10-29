import { SlOptions } from 'react-icons/sl'
import { useMemo } from 'react'

import { Container, Perfil, Options } from './styles'

export function HeaderCard({ photo, username, date, category }) {

  const getDate = useMemo(() => {
    const currentDate = new Date().getTime()
    const postDate = new Date(date).getTime()

    const getTime = currentDate / 1000 - postDate / 1000
   
    const days = Math.floor(getTime / (60 * 60 * 24))

    if(days > 30){
      return `${(Math.floor(days / 30 ))} ${days > 60 ? 'meses atrás' : 'mês atrás'}`
    }

    return `${days} ${days > 1 ? 'dias atrás' : 'dia atrás'}`
    
  }, [date])

  return (
    <Container>
      <Perfil>
        <img src={photo} alt="Foto de perfil" />
        <div>
          <span>{username}</span>
          <p>{getDate}</p>
        </div>
      </Perfil>

      <Options>
        <button>{category}</button>
        <button>
          <SlOptions />
        </button>
      </Options>
    </Container>
  )
}
