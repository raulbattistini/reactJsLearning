import styled from "styled-components";

export const Header = styled.div`
  background-color: #fff;
  color: #fff;
  
`;
export const Paragraph = styled.p`
  text-align: center;
  font-weight: 200;
  padding: 50px 0;
  font-size: 3em;
`;
export const Button = styled.button`
  align-content: center;
  font-weight: 400;
  font-size: 2em;
  display: flex;
  text-decoration: none;
  padding: 0 20px;
  background-color: aquamarine;
  color: #fff;
  border: none;
  margin: auto;
  cursor: pointer;
  border-radius: 5px;
  &hover {
    text-decoration: none;
    cursor: pointer;
  }
  &active {
    text-decoration: none;
  }
`;
export const L = styled.div`
  .nounderline{
    text-decoration: none;
  }
`;
