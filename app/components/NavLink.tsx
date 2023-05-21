import { navLinkProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export const NavLink = ({route, icon, text}: navLinkProps) => {
    const router = useRouter();
    
    return(
    <>
    <li className='navIcon group' onClick={()=> router.push(route)} onTouchEnd={(e) => e.currentTarget.blur()}>
        <FontAwesomeIcon icon={icon} className="w-6 h-6" />
        <span className="navIcon-tooltip group-hover:scale-100">{text}</span>
    </li>
    </>
    );
}    