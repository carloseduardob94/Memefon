import { Container } from './styles'


import { HeaderCard } from '../HeaderCard'
import { Footer } from '../Footer'

export function PostCard({ post }) {
  const {
    title,
    videoUrl,
    imageUrl,
    category: { name },
    user: { username, photo },
    createdAt
  } = post

  const renderContent = () => {
    if (videoUrl) {
      return (
        <>
          <video controls preload="auto" loop="loop" autoPlay="autoplay" muted >
            <source src={videoUrl} />
          </video>
        </>
      )
    }
    if (imageUrl) return <img src={imageUrl} alt="" />

    return null
  }

  return (
    <Container>
      <HeaderCard
        photo={photo}
        username={username}
        date={createdAt}
        category={name}
      />

      <main>
        <h2>{title}</h2>
        <article>{renderContent()}</article>
      </main>

      <Footer />
    </Container>
  )
}
