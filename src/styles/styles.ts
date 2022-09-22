import styled, { keyframes } from 'styled-components';

export const ErrorDiv = styled.div`
border-radius: 5px;
background-color: rgb(253, 130, 130);
width: 280px;
height: 40px;
margin: 20px auto;
text-align: center;
padding-top: 20px;
`;

const animationLoad = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

export const LoaderDiv = styled.div`
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: #f74040;
    background: -moz-linear-gradient(left, #f74040 10%, rgba(247,64,64, 0) 42%);
    background: -webkit-linear-gradient(left, #f74040 10%, rgba(247,64,64, 0) 42%);
    background: -o-linear-gradient(left, #f74040 10%, rgba(247,64,64, 0) 42%);
    background: -ms-linear-gradient(left, #f74040 10%, rgba(247,64,64, 0) 42%);
    background: linear-gradient(to right, #f74040 10%, rgba(247,64,64, 0) 42%);
    position: relative;
    -webkit-animation: ${animationLoad} 1.4s infinite linear;
    animation: ${animationLoad} 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  
    &::before {
    width: 50%;
    height: 50%;
    background: #f74040;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  
    &::after {
    background: #ffffff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`

export const ItemText = styled.p`
    margin-right: 10px;
    width: 350px;
    align-self: center;
    padding-left: 5px;
`
export const ButtonList = styled.button<{image: string}>`
    width: 30px;
    height: 30px;
    margin: 6px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.image});
`

export const LoaderBtn = styled.div`
  font-size: 10px;
  margin: 6px 26px;
  text-indent: -9999em;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: #f74040;
  background: linear-gradient(to right, #f74040 10%, rgba(247,64,64, 0) 42%);
  position: relative;
  animation: ${animationLoad} 1.4s infinite linear;
  transform: translateZ(0);

  &::before {
    width: 50%;
    height: 50%;
    background: #f74040;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  
  &::after {
    background: #ffffff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`

export const EditInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

export const EditButtons = styled.div`
  display: flex;
  margin: 10px;

  & > button {
    height: 39px;
    width: fit-content;
    padding: 0 13px;
    margin-right: 10px;
  }
`

export const Form = styled.form<{opacity: string}>`
  position: relative;
  opacity: ${(props) => props.opacity}
`

export const HiddenDiv = styled.div<{none: string}>`
  display: ${(props) => props.none};
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`