import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > main {
    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 2rem;
      font-weight: bold;
      font-family: ${({ theme }) => theme.FONTS.POPPINS};

      margin-bottom: 0.8rem;

      padding-left: 0.8rem;
    }

    article {
      position: relative;

      video {
        width: 50rem;
        height: 50rem;

        border-radius: 15px;
      }

      #audio-button {
        position: absolute;

        border: none;
        border-radius: 50%;

        background-color: black;

        padding: 0.8rem;

        left: 0;
        bottom: 0;

        svg {
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 2.1rem;
        }
      }

      .mute {
        svg {
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 2.1rem;
        }
      }

      img {
        width: 50rem;
        height: 50rem;

        border-radius: 15px;
      }
    }
  }
`
