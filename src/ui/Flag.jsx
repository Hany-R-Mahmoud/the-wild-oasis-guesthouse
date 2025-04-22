import styled from "styled-components";

export const Flag = styled.img`
  max-width: 4rem;
  min-height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1200px) {
    max-width: 6rem;
  }

  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);
`;
