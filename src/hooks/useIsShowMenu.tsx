import { useLocation } from "react-router-dom"

import { type RouterKeys ,routersData} from "@/config";

function useIsShowMenu(){
    const location = useLocation()
    const key:RouterKeys = location.pathname.split('/')[1] as RouterKeys

    return routersData[key].hasMenu
}

export default useIsShowMenu