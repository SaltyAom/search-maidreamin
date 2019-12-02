import './header.styl'

const Header = ({ children, title }) => (
    <header id="header">
        <h1 className="title">{title}</h1>
        <h2 className="detail">{children}</h2>
    </header>
)

export default Header