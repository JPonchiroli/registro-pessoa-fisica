import TesteConexao from '../TesteConexao'

export default function Title({children, style}){
    return(
        <>
            <TesteConexao />
            <h1 style={style}>{children}</h1>
        </>
    )
}