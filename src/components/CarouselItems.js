import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 125px;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
  font-size: 1.75rem;
  font-weight: bold;
  letter-spacing: 1px;

  padding: 2rem;
  margin: 15px 15px;
  text-align: center;
  border: none;
  border-radius: 15px;
  background: #fff;
  opacity: 1;
  box-shadow: 0px 3px 6px #20212129;
`;

export const Item = ({ children, ...props }) => {
  return <ItemContainer {...props}>{children}</ItemContainer>;
};
