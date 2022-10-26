/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, ActivatorButton, DropdownList } from './styles'

interface IDropdownItem {
  id: number;
  url: string;
  text: string;
}

interface IProps {
  activatorText?: string;
  items?: IDropdownItem[];
}

const dropdownItems = [
  {
    id: 1,
    url: '/album/veistokset',
    text: 'veistokset',
  },
  {
    id: 2,
    url: '/album/piirustukset',
    text: 'piirustukset',
  },
]

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Dropdown = ({
  activatorText = 'Dropdown',
  items = dropdownItems,
}: IProps): JSX.Element => {
  const activatorRef = React.useRef<HTMLButtonElement | null>(null)
  const listRef = React.useRef<HTMLUListElement | null>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(-1)

  const handleClick = (): void => {
    setIsOpen(!isOpen)
  }

  const keyHandler = (event: React.KeyboardEvent): void => {
    if (isOpen) {
      // eslint-disable-next-line default-case
      switch (event.key) {
        case 'Escape':
          setIsOpen(false)
          break
        case 'ArrowDown':
          // eslint-disable-next-line no-case-declarations
          const nodeList = listRef.current!.querySelectorAll('a')
          if (activeIndex === items.length - 1) return
          nodeList[activeIndex + 1].focus()
          break
        case 'ArrowUp':
          // eslint-disable-next-line no-case-declarations
          const nodeList2 = listRef.current!.querySelectorAll('a')
          if (activeIndex === 0) return
          nodeList2[activeIndex - 1].focus()
          break
      }
    }
  }

  const handleClickOutside = (event: any): void => {
    if (
      listRef.current!.contains(event.target)
      || activatorRef.current!.contains(event.target)
    ) {
      return
    }
    setIsOpen(false)
  }

  React.useEffect(() => {
    if (isOpen) {
      listRef.current!.querySelector('a')!.focus()
      document.addEventListener('mouseup', handleClickOutside)
    } else {
      document.removeEventListener('mouseup', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [isOpen])

  React.useEffect(() => {
    if (!isOpen) {
      setActiveIndex(-1)
    }
  }, [isOpen])

  const focusHandler = (index: number): void => {
    setActiveIndex(index)
  }

  return (
    <Wrapper onKeyUp={keyHandler}>
      <ActivatorButton
        aria-haspopup="true"
        aria-controls="dropdown1"
        onClick={handleClick}
        ref={activatorRef}
        onFocus={() => setActiveIndex(-1)}
      >
        {activatorText}
      </ActivatorButton>
      <DropdownList id="dropdown1" ref={listRef} active={isOpen} role="list">
        {items.map((item, index) => (
          <li key={item.id}>
            <Link to={item.url} onFocus={() => focusHandler(index)}>
              {item.text}
            </Link>
          </li>
        ))}
      </DropdownList>
    </Wrapper>
  )
}

export default Dropdown

// eslint-disable-next-line no-lone-blocks
{ /* <a href={item.url} onFocus={() => focusHandler(index)}>
              {item.text}
            </a> */ }
