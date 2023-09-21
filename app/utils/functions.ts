import { Button } from "@/types";
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const buttonMaker = (role: string, href?: string) => {
    if(href){
        const button : Button = {
            text: role == 'deployed' ? 'Visit the site' : 'See the Code',
            href: href,
            icon: role == 'deployed' ? faGlobe : faCode
        }
        return button;
    }
    return null;
}