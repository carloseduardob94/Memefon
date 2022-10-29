import { Container } from './styles'

import { HeaderCard } from '../HeaderCard'
import { Footer } from '../Footer'


export function PostCard(){
  return(
    <Container>
      <HeaderCard />

      <main>
        <h2>Não precisa nem de DNA</h2>
        <img src="https://memefon.s3.amazonaws.com/uploads/2022-10-28T07-22-50139Z-FB969C3D-5E84-4C9E-8760-3250B1C2A351.jpeg" alt="Image post" />
      </main>

      <Footer />
    </Container>
  )
}