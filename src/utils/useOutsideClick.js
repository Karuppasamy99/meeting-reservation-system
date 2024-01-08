import { useEffect } from "react"

export const useOutsideClick = (ref, handler) => {
    useEffect(()=>{

        function listener(event) {
            if(!ref.current || ref.current.contains(event.target)){
                return
            }

            handler(event)

        }
        document.addEventListener("touchstart", listener)
        document.addEventListener("mousedown", listener)

        return ()=> {
            document.removeEventListener("touchstart", listener)
            document.removeEventListener("mousedown", listener)
        }
    },[])
}