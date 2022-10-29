import { SlOptions } from 'react-icons/sl'

import { Container, Perfil, Options } from './styles'

export function HeaderCard(){
  return(
    <Container>
      <Perfil>
        <img src="https://github.com/carloseduardob94.png" alt="Foto de perfil" />
        <div>
          <span>hackerman</span>
          <p>2 days ago</p>
        </div>
      </Perfil>

      <Options>
        <button>Funny</button>
        <button>
          <SlOptions />
        </button>
      </Options>

    </Container>
  )
}