import { useState } from "react"

type HeaderProps = {
    content: string,
}


const Header = ({ content }: HeaderProps) => {

    const [ isOpen, setIsOpen ] = useState(false)
    setIsOpen(!isOpen)

  return (
    <div className={`${isOpen ? "fixed" : "hidden"} top-0 w-full h-[40px]`}>
        <p>{content}</p>
    </div>
  )
}

export default Header