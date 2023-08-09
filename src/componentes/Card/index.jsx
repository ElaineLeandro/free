import styled from '@emotion/styled'

const DivEstilizada = styled.div`
    background-color:#EBEAF9;
    padding:32px;
    border: 1px solid #5754ED;
    border-radius: 16px;
`

export function Card({children}) {
    return(
        <DivEstilizada >
            {children}
        </DivEstilizada>
    )
}