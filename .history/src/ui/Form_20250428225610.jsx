import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  margin: 0 auto;

  @media (min-width: 40rem) {
    width: 39rem;
  }
  @media (min-width: 48rem) {
    width: 47rem;
  }
  @media (min-width: 64rem) {
    width: 63rem;
  }
  @media (min-width: 80rem) {
    width: 79rem;
  }
  @media (min-width: 96rem) {
    width: 95rem;
  }
`;
Form.defaultProps = {
  type: "regular",
};

export default Form;
