import ReactModal from 'react-modal';
import styled from 'styled-components';
export const Container = styled.main`
  // z-index: 13;
  position: absolute;
  // display: flex;
  
  // width: 100%;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;    
  background: #4c4947;
  color: #000;
  
`
export const IconContainer = styled.div`
  margin: 10px 10px;
  cursor: pointer;
`
export const LeftSide = styled.div`
    // display: flex;
    // flex-direction: column;
    // align-items: flex-start;
    // justify-content: flex-start;
    // height: 100%;
    // width: 100%;
    // margin: 0 auto;
    `

export const ToolBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 70px;
    // width: 100%;
    // margin: 0 auto;
    `

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
    // height: 100%;
    // width: 100%;
    // margin: 0 auto;
    `

export const CookBook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #efedef;
  height: 9.375rem;
  width: 9.375rem;
  margin: 1.875rem 1.875rem
    `

export const CookBookModal = styled(ReactModal)`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  // margin: 0 auto;
  width: 300px;
  height: 300px;
  background-color: #efedef;
  color: #222022;
  box-shadow: 0px 3px 6px #222022;
  border: 2px solid #6ead3a;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  :focus {
    outline: none;
  };
  padding: 10px 20px;
`

export const TextInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: #efedef;
  color: #222022;
  outline: none;
  border: 1px solid #222022;
  padding: 0;
  margin-bottom: 20px;
  
 
`

export const ModalForm = styled.form`
  

  
 
`