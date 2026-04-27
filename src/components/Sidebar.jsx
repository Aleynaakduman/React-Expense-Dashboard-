import { LuWallet } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FaRegLightbulb } from "react-icons/fa";
import { CiHome, CiWallet, CiSettings  } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { LiaWalletSolid } from "react-icons/lia";
import { LuChartNoAxesCombined } from "react-icons/lu";
import '../css/Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar-container" >
       <div className="sidebar-baslik">
        <div className="icon-1"> <LuWallet /></div> <h2>Takip</h2>
           </div>
            <div className="sidebar-list">
                <ul>
                    <li>
                        <Link> <div className="icon"><CiHome /></div>
 Özet </Link>
                    </li>

                      <li>
                        <Link><div className="icon"> <CiWallet /></div> Harcamalar </Link>
                    </li>

                      <li>
                        <Link> <div className="icon"><BiCategory /> </div>Kategoriler </Link>
                    </li>

                      <li>
                        <Link> <div className="icon"><FiActivity /></div> Raporlar</Link>
                    </li>

                      <li>
                        <Link><div className="icon"> <LiaWalletSolid /></div> Bütçe </Link>
                    </li>

                      <li>
                        <Link><div className="icon"> <CiSettings/></div> Ayarlar </Link>
                    </li>
                </ul>
            </div>

     

       <div className="sidebar-card">
        <p style={{display:'flex', alignItems:'center'}} > <div className="icon-3" style={{color:'orange', fontSize: '18px', marginRight:'5px'}}><FaRegLightbulb /></div> İpucu</p>
        <p>Daha iyi bir finansal gelecek için harcamalarını takip etmeye devam et</p>
        <div className="end-icon">
            <LuChartNoAxesCombined />
        </div>
       </div>


    </div>
  )
}

export default Sidebar