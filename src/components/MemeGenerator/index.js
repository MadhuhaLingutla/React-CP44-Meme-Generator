import {Component} from 'react'
import {
  InputHeading,
  InputField,
  MemeContainer,
  InputFrom,
  InputFieldContainer,
  Heading,
  DropdownList,
  DropdownListItem,
  GenerateButton,
  MemeDisplayContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '8px',
    showMeme: false,
  }

  updateImageUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  updateTopText = event => {
    this.setState({topText: event.target.value})
  }

  updateBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  updateFontSize = event => {
    const tempString = `${event.target.value}px`
    this.setState({fontSize: tempString})
  }

  showMeme = event => {
    event.preventDefault()
    this.setState({showMeme: true})
  }

  displayMeme = () => {
    const {imgUrl, topText, bottomText, fontSize} = this.state

    return (
      <MemeDisplayContainer bgImage={imgUrl} size={fontSize} data-testid="meme">
        <MemeText size={fontSize}>{topText}</MemeText>
        <MemeText size={fontSize}>{bottomText}</MemeText>
      </MemeDisplayContainer>
    )
  }

  render() {
    const {imgUrl, topText, bottomText, showMeme} = this.state

    return (
      <MemeContainer>
        <InputFrom onSubmit={this.showMeme}>
          <Heading>Meme Generator</Heading>
          <InputFieldContainer>
            <InputHeading htmlFor="imageURL">Image URL</InputHeading>
            <InputField
              id="imageURL"
              placeholder="Enter the Image URL"
              onChange={this.updateImageUrl}
              value={imgUrl}
            />
          </InputFieldContainer>
          <InputFieldContainer>
            <InputHeading htmlFor="topText">Top Text</InputHeading>
            <InputField
              id="topText"
              placeholder="Enter the Top Text"
              onChange={this.updateTopText}
              value={topText}
            />
          </InputFieldContainer>
          <InputFieldContainer>
            <InputHeading htmlFor="bottomText">Bottom Text</InputHeading>
            <InputField
              id="bottomText"
              placeholder="Enter the Bottom Text"
              onChange={this.updateBottomText}
              value={bottomText}
            />
          </InputFieldContainer>
          <InputFieldContainer>
            <InputHeading htmlFor="fontSizeDropdown">Font Size</InputHeading>
            <DropdownList
              id="fontSizeDropdown"
              name="fontsize"
              onChange={this.updateFontSize}
            >
              {fontSizesOptionsList.map(each => (
                <DropdownListItem value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </DropdownListItem>
              ))}
            </DropdownList>
          </InputFieldContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </InputFrom>
        {showMeme ? this.displayMeme() : null}
      </MemeContainer>
    )
  }
}

export default MemeGenerator
