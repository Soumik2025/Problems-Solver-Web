import styled from 'styled-components';

const Button = styled.button`
  background: var(--bg-dark-blue);
  border-radius: ${(props) =>
    !props.radius ? (props.size === 'large' ? '1em' : '5px') : '5px 5px 5px 0'};
  padding: ${(props) => (props.size === 'md' ? '0.5em 2.5em' : '2px 10px')};
  color: white;
  font-weight: ${(props) => (props.size === 'large' ? 'bold' : '')};
  font-size: 1.25em;
  margin: 2px;
  transition: background 0.25s ease;
  display: ${(props) => (props.block ? 'block' : '')};
  width: ${(props) => (props.block ? '100%' : '')}; 

  &:hover {
    background: #131d54;
  }

  @media all and (max-width: 900px) {
    border-radius: 5px;
    padding: 2px 10px;
    font-weight: normal;
  }
`;

export default Button;
