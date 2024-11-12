import {useState} from 'react'

import {
  BgContainer,
  DetailedContainer,
  MainHeading,
  CaptionElement,
  ImgElement,
  DescriptionElement,
  ButtonElement,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isClicked, setValue] = useState(false)

  const onChangeValue = () => setValue(previousValue => !previousValue)

  const btnText = isClicked ? 'Read Less' : 'Read More'

  const slicedText = reactHooksDescription.slice(0, 170)

  return (
    <BgContainer>
      <DetailedContainer>
        <MainHeading>React Hooks</MainHeading>
        <CaptionElement>Hooks are a new addition to React</CaptionElement>
        <ImgElement
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <DescriptionElement>
          {`${isClicked ? reactHooksDescription : slicedText}`}
        </DescriptionElement>
        <ButtonElement onClick={onChangeValue} type="button">
          {btnText}
        </ButtonElement>
      </DetailedContainer>
    </BgContainer>
  )
}

export default ReadMore
