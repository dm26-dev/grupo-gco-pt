export const Collection = ({ user, text, image }) => {
    return (
        <div className="container__collection">

            <div className="container__collection_text">
                <h3> Bienvenido {user}</h3>
                <p>{text}</p>
                <button>Ver Mas ..</button>
            </div>

            <div className="container__collection_img">
                <img src={image} alt="" />
            </div>

        </div>
    )
}
