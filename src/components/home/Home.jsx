import { useAuth } from "../../context/AuthContext";

// COMPONENTS
import { TopBanner } from "./TopBanner";
import { TopHeader } from "./TopHeader";
import { Slide } from "./Slide";
import { Collection } from "./Collection";
import { BannerTwinning } from "./BannerTwinning";

// HELPERS
import { dataTopBanner } from '../../helpers/dataTopBanner'
import { imagesBanner } from '../../helpers/imagesBanner'
import { dataCollection } from '../../helpers/dataCollection'
import { imagesBannerTwinning } from '../../helpers/imagesBannerTwinning'

export const Home = () => {

  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container__home">

      <TopBanner text={dataTopBanner.text} description={dataTopBanner.description} />

      <TopHeader handleLogout={handleLogout} logo={imagesBannerTwinning.logoWeb} />

      <Slide imagesBanner={imagesBanner} />

      <Collection user={user.displayName || user.email} text={dataCollection.text} image={dataCollection.image} />

      <BannerTwinning imagesBannerTwinning={imagesBannerTwinning} />

    </div>
  );
}
