import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DetailedContainer = styled.div`
  max-width: 400px;
  text-align: center;
`

export const MainHeading = styled.h1`
  color: #1e293b;
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 44px;
  }
`

export const CaptionElement = styled.p`
  color: #334155;
  font-size: 12px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const ImgElement = styled.img`
  width: 100%;
  height: 150px;
  @media (min-width: 768px) {
    height: 200px;
  }
`

export const DescriptionElement = styled.p`
  color: #334155;
  font-size: 9px;
  font-family: 'Roboto';
  text-align: left;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`

export const ButtonElement = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  width: 110px;
  padding: 10px 0px;
  border-radius: 6px;
  border-width: 0px;
  outline: none;
  font-size: 15px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 17px;
  }
`
