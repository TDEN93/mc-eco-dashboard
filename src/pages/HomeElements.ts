import styled from 'styled-components';
export const Container = styled.main`
  z-index: 13;
  position: absolute;
  display: flex;
  
  width: 100%;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;    
  background: #4c4947;
  color: #000;
  
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    `

export const CookBook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #333;
  height: 9.375rem;
  width: 9.375rem;
  margin: 1.875rem 1.875rem
    `