interface HeaderProps {
    title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header>
            <span className="category">
                Categoria:<span> {title}</span>
            </span>
        </header>
    )
}