import styled from "styled-components";

export const h1 = styled.h1`
  position: sticky;
  top:0px;
  text-decoration: none;
  overflow-y: hidden;
`
export const input = styled.input`
  background: ${(props) =>
    props.helpertext ? "orangered" : "rgb(27, 29, 27)"};
  color: ${(props) => (props.error ? "white" : "#fff")};
  margin-left: 20px;
`;
export const hr = styled.hr`
  margin-top: -9px;
`;
export const link = styled.link`
text-decoration: none`
export const div = styled.div`  
  margin: '-14em 0 0 23em';
  background: 'rgb(27, 29, 27)';
  z-index: '1';
  text-decoration: ${(props)=>props.variant === 'link' ? 'none' : ''};
  margin: ${(props)=>props.variant === 'llink' ? '0  10px' : ''};
  position: ${(props)=>props.variant === 'llink' ? 'absolute' : ''}; 
  //position: ${(props)=>props.variant === 'rlink' ? 'absolute' : ''}; 
  margin: ${(props)=>props.variant === 'rlink' ? '-40px 0px 0 40em' : ''};

`;
export const button = styled.button`
  font-family: monospace;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 0 5px;   
  margin-left: 16px; 
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  vertical-align: middle;
  position: absolute;
  align-content: center;
  border: 2px solid black;
  color: ${(props)=>props.variant === 'delete' ? "#fff" : "black"};
  background-color: ${(props)=>props.variant === 'delete' ? 'red' : 'yellow'};
  transition: transform .4s;
  &:hover{
  transform: scale(1.2);
  cursor: pointer;
  font-size: 1em;
  }`

export const tr = styled.tr`
  display: flex;
  padding-bottom: 100px;
`
export const th = styled.th`
  width: 100%;
  display: flex;
  padding-left: ${(props)=>props.variant === 'day' ? '30px' : ''};
`


//background-color: ${(props)=>props.delete === 'outline' ? '#fff' : '#4caf50'}}