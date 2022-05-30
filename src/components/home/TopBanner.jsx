export const TopBanner = ({ text, description }) => {
    return (
        <div className="container__top_banner">
            <h3>{text}</h3> <span>{description}</span>
        </div>
    )
}

TopBanner.defaultProps = {
    text: 'Black Friday',
    description: 'Descuentos en toda la colección'
}
