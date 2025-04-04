import styled from 'styled-components';

const EqnInput = styled.input`
  border: none;
  border-bottom: var(--bg-white) 3px solid;
  background: transparent;
  color: white;
  font-size: 20px;
  padding: 0 5px;
  width: 100%;

  &::placeholder {
    color: var(--bg-white);
  }
  margin: 5px 0;
`;

export default EqnInput;
