import {useState} from 'react'
import {MainContainer, Image, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [islock, setLock] = useState(false)

  const onClickBtn = () => {
    setLock(prevState => !prevState)
  }
  const ImageUrl = islock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const text = islock ? 'Locked' : 'Unlocked'
  const buttonText = islock ? 'Unlock' : 'Lock'
  return (
    <MainContainer>
      <Image src={ImageUrl} alt="lock" />
      <Paragraph>Your Device is {text}</Paragraph>
      <Button type="button" onClick={onClickBtn}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}
export default Unlock
