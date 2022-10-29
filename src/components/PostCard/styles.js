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

    img {
      width: 50rem;
      height: 50rem;

      border-radius: 15px;
    }
  }
`
