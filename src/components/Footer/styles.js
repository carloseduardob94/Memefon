import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  padding: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};

  > div {
    display: flex;
    align-items: center;

    p {
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      font-size: 1.4rem;

      padding-left: 0.5rem;
    }
  }

  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.GREEN};
  }
`
