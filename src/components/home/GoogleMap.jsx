export const GoogleMap = ({text,src}) => {
    return (
        <div className="container__google_map">

            <div className="container__google_map_text">
                <h3>Visitanos </h3>
                <p>{text}</p>
                <button>Ver Mas ..</button>
            </div>

            <div className="container__google_map_iframe">
                <iframe
                    src={src}            
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </div>

        </div>
    )
}
