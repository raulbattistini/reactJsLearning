import React from "react";
export default function Delete(){
    return(
        <div> last function
        </div>
    )
}

//o que precisa fazer:
// fazer um axios.get(db)
// com base no que tiver, dar a opcao de remover o objeto
//reaproveitar o codigo de formulario e validacao do create
// depois da opcao de remover, poder salvar ou cancelar e ja renderizar na tela os objetos restantes
//para achar o objeto a ser deletado: query selector na rota de url onde esta o get (/create) e fazer axios.delete('url'/).innerhtml