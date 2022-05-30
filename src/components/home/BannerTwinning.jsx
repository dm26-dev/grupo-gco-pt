import { imagesBannerTwinning } from '../../helpers/imagesBannerTwinning'

export const BannerTwinning = () => {
    return (
        <div className="container__banner_twinning">
            <div className="container__banner_twinning_img">
                <img src={imagesBannerTwinning.image} alt="" />
            </div>
            <div className="container__banner_twinning_desc">

                <div className='container__banner_twinning_desc_img'>
                    <img src={imagesBannerTwinning.logo} alt="" />
                </div>

                <div className='container__banner_twinning_desc_desc'>
                    <p>
                        {imagesBannerTwinning.description}
                    </p>
                    <button>VER MÁS</button>
                </div>
            </div>
        </div>
    )
}
