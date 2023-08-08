import { css, Global } from "@emotion/react"

const estilos = css`

    *{ 
        font-family="Montserrat", sans-serif;
        font-weight= 400;
    }
`

export function Estilos(){
    return(
        <Global styles={estilos}/>
    )
}