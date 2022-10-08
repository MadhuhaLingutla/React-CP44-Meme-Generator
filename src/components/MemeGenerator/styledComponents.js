// Style your components here
import styled from 'styled-components'

export const MemeContainer = styled.div`
  padding: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`
export const InputFrom = styled.form`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 40px;
`
export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`
export const InputHeading = styled.label`
  color: #7e858e;
  margin-bottom: 10px;
`
export const InputField = styled.input`
  height: 40px;
  color: #7e858e;
  border: 1px #7e858e solid;
  border-radius: 5px;
  padding-left: 10px;
  outline: none;
`
export const DropdownList = styled.select`
  height: 40px;
  color: #7e858e;
  border: 1px #7e858e solid;
  border-radius: 5px;
  padding-left: 10px;
  outline: none;
`
export const DropdownListItem = styled.option``
export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 5px;
  border: none;
  margin-bottom: 30px;
`
export const MemeDisplayContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  height: 400px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`
export const MemeText = styled.p`
  font-size: ${props => props.size};
  color: #ffffff;
`
