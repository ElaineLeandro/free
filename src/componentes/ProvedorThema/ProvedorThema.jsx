import { ThemeProvider } from "@emotion/react"

const tema = {
    cores:{

        branco: '',
        atencao:'',
        focus:'',

        primarias:{
            a: '',
            b: '',
            c:''
        },
        secundarias:{
            a:'',
            b:'',
            c:''
        },
        neutras:{
            a:'',
            b:'',
            c:'',
            d:''
        },
        dark:{
            a:'',
            b:''
        }


    }
}


export function ProvedorThema({children}){
    return( <ThemeProvider>
        {children}
    </ThemeProvider>
        
    )
}