import './descCurso.css'


function DescCurso() {
    return (

        <div className='containerDescCurso'>

            <div className='left'>

                <div className="conteudo-topo">
                    <h1>
                        Curso de Liturgia
                    </h1>
                    <p>
                        Assista as aulas e tenha acesso aos módulos especiais, com exercícios e material exclusivo!
                    </p>
                </div>

                <div className="conteudo-curso">
                    <h2> O que você irá aprender: </h2>

                    <ul>
                        <li> Nam suscipit turpis vel diam vestibulum, at volutpat. </li>
                        <li> Mauris quis nisi vestibulum, mollis risus vel, dapibus lorem. </li>
                        <li> Aenean non est consequat, aliquet ipsum ac, pellentesque velit. </li>
                    </ul>

                    <h2> Conteúdo e materiais: </h2>

                    <span> MÓDULO 1 </span>
                    <ul>
                        <li> AULA 01 - TEMA 01 </li>
                        <li> AULA 02 - TEMA 02 </li>
                        <li> MATERIAL AULA 02 </li>
                        <li> AULA 03 - TEMA 03 </li>
                        <li> AULA 04 - TEMA 04 </li>
                        <li> TESTE DE CONHECIMENTO </li>
                    </ul>

                    <span> MÓDULO 2 </span>
                    <ul>
                        <li> AULA 01 - TEMA 01 </li>
                        <li> AULA 02 - TEMA 02 </li>
                        <li> MATERIAL AULA 02 </li>
                        <li> AULA 03 - TEMA 03 </li>
                        <li> AULA 04 - TEMA 04 </li>
                        <li> TESTE DE CONHECIMENTO </li>
                    </ul>
                    <h2> Descrição: </h2>
                    <p>
                        Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico.
                        Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura
                        latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney
                        College na Virginia, pesquisou uma das mais obscuras palavras em latim...
                    </p>

                </div>
            </div>

            <div className='right'>
                

            </div>

        </div>

    );

}

export default DescCurso;