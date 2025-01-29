import * as React from "react"
import { PageProps } from "gatsby"
import { navigate } from "gatsby"

const NotFound = (_props: PageProps) => {
    React.useEffect(() => {
       navigate("/")
    }, [])

}

export default NotFound
