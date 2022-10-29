import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2px 0.8rem 0;
  padding-bottom: 1.5rem;

  margin-top: 1.6rem;
`
export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 5rem;
    height: 5rem;

    border-radius: 50%;

    margin-right: 1rem;
  }

  > div {
    span {
      font-family: ${({ theme }) => theme.FONTS.NEUE};
      font-weight: bold;
    }

    p {
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      font-weight: 400;
      font-size: 1.2rem;

      color: ${({ theme }) => theme.COLORS.GRAY};

      margin-top: 0.5rem;
    }
  }
`

export const Options = styled.aside`
  display: flex;
  align-items: center;

  > button:first-child {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-weight: bold;
    font-size: 1.2rem;

    border: none;
    border-radius: 3px;

    padding: 0px 0.4rem;

    background-color: ${({ theme }) => theme.COLORS.GREEN};

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > button:last-child {
    margin-left: 1rem;

    border: none;
    background-color: transparent;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`
