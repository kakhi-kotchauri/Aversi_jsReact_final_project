import { useEffect, useState } from "react"



export function Resolution() {

    const [resolution, setresolution] = useState(window.innerWidth)

    useEffect(() => {
      window.addEventListener('resize', size)
    }, [])

    function size(e) {
        // console.log(e.target.innerWidth)
        setresolution(e.target.innerWidth)
    }

    // console.log(resolution)

    return resolution
}