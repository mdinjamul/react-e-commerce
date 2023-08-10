import styled from "styled-components";

export const PrimaryButton = styled.button`
  text-decoration: none;
  min-width: auto;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 ${({ theme }) => theme.colors.shadow};
    box-shadow: 0 2rem 2rem 0 ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
    background-color: ${({ theme }) => theme.colors.hover};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
  }
`;
