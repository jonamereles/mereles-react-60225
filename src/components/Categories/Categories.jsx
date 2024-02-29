// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faHome, faTree, faSeedling, faPoo } from "@fortawesome/free-solid-svg-icons"
import { FaHome } from "react-icons/fa";
import { GiGuitar } from "react-icons/gi";
import { LiaDrumSolid } from "react-icons/lia";
import { GiTrumpet } from "react-icons/gi";
import { RxMixerVertical } from "react-icons/rx";
import { Link } from "react-router-dom"

export const Categories = () => {
    return (
        <>
            <li className="text-white">
                <Link  to={'/'}>
                    <button className="bg-sky-700 text-white px-4 py-2 rounded flex items-center">
                    <FaHome />
                    </button>
                </Link>
                
            </li>

            <li className="text-white">
                <Link to={'category/cuerdas'}>
                    <button className="bg-neutral-950 text-white px-4 py-2 rounded flex items-center">
                    <GiGuitar />
                    </button>
                </Link>
                
            </li>

            <li className="text-white">
                <Link to={'category/percusion'}>
                    <button className="bg-neutral-950 text-white px-4 py-2 rounded flex items-center">
                    <LiaDrumSolid /> 
                    </button>
                </Link>
                
            </li>

            <li className="text-white">
                <Link to={'category/vientos'}>
                    <button className="bg-neutral-950 text-white px-4 py-2 rounded flex items-center">
                    <GiTrumpet />
                    </button>
                </Link>
                
            </li>

            <li className="text-white">
                <Link to={'category/varios'}>
                    <button className="bg-neutral-950 text-white px-4 py-2 rounded flex items-center">
                    <RxMixerVertical />
                    </button>
                </Link>
                
            </li>
        </>
    )
}