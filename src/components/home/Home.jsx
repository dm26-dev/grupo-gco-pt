import { useAuth } from "../../context/AuthContext";
import { TopBanner } from "./TopBanner";

import { dataTopBanner } from '../../helpers/dataTopBanner'

export function Home() {
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

      {/* <div className="Header Pendiente">
        <p >welcome {user.displayName || user.email}</p>
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}
        >
          logout
        </button>
      </div> */}

      <TopBanner text={dataTopBanner.text} description={dataTopBanner.description}/>

    </div>
  );
}
