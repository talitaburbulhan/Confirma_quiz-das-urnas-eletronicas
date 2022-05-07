
var somNumero = document.querySelector('.som-numero') 
var somConfirma = document.querySelector('.som-confirma') 

var lista = [
    {
        contexto: "🗳️ A urna eletrônica é um computador, que funciona a partir de programas e dados. Programas são as instruções que dizem o que o aparelho deve fazer. Todos os programas usados nas eleições são desenvolvidos por técnicos da Justiça Eleitoral. Meses antes do pleito, é realizado o Teste Público de Segurança, o mais recente ocorreu de 22 a 27 de novembro de 2021. <b>O que acontece nessa etapa?</b>",
        explicacao: "🤔 No Teste Público de Segurança os programas da urna são violados de propósito. Participam dessa etapa técnicos de computação, hackers, policiais federais, representantes de partidos políticos e quem mais quiser se habilitar.",
        comoVotar:"Se você acha que a explicação (🤔) é<b>verdadeira vote 1</b>. Se, pelo contrário, considera que ela é<b>falsa vote 2.</b> Em seguida, aperte<b class='confirmaVerde'>CONFIRMA</b>para checar o resultado. ⬇️",
        correta: true,
        resposta: "<p><b>SAIBA MAIS</b></p><p>Essa etapa colaborativa permite o aprimoramento das camadas de proteção do sistema informatizado das eleições e a elaboração de novos mecanismos de segurança.</p><p>De acordo com o calendário eleitoral, de 11 a 13 de maio de 2022 ocorrerá o<b>Teste de Confirmação.</b> Nele serão checadas as correções aplicadas decorrentes dos resultados obtidos no Teste Público de Segurança de novembro passado."

    },
    
    {
        contexto: "🗳️ O Brasil possui cerca de 150 milhões de pessoas eleitoras. No dia em que elas vão às urnas, o resultado da eleição é divulgado horas depois de encerradas as votações.<b>Como isso é possível?</b>",
        explicacao: "🤔 O resultado sai na noite do mesmo dia das eleições, porque as urnas eletrônicas são conectadas à internet. Assim os dados sobre cada voto conseguem ser, quase que, instantaneamente enviados para a sede do Tribunal Superior Eleitoral (TSE), em Brasília, onde é feita a apuração final.",
        comoVotar:"Se você acha que a explicação (🤔) é<b>verdadeira vote 1</b>. Se, pelo contrário, considera que ela é<b>falsa vote 2.</b> Em seguida, aperte<b class='confirmaVerde'>CONFIRMA</b>para checar o resultado. ⬇️",
        correta: false,
        resposta:"<p><b>SAIBA MAIS</b></p><p>A urna não é conectada à internet, por isso, ela<b>não pode ser atacada remotamente.</b>A única ligação externa que ela tem é com a tomada de eletricidade da sala de votação. 🔦 Detalhe, a urna possui uma bateria com capacidade de 10 horas de duração, em caso de falta de luz.</p><p>Encerrada a votação, desconecta-se da urna um dispositivo, semelhante a um<i>pen drive</i>, que contém os votos registrados pelo aparelho. O “<i>pen drive</i>” é levado para o Tribunal Regional Eleitoral (TRE) de referência.</p><p>De lá os dados são<b>enviados digitalmente para o Tribunal Superior Eleitoral (TSE) via fibras óticas, contratadas especialmente para essa finalidade.</b>Além do mais, a transmissão das informações eleitorais é feita de forma criptografada e com barreiras de segurança, para evitar qualquer tipo de interceptação e adulteração dos dados."

    },

    {
        contexto: "🗳️ Em outubro de 2022, quando se encerrar a votação, a pessoa presidente da seção eleitoral irá imprimir e disponibilizar para acesso da população local o boletim de urna. Um extrato dos votos recebidos por cada candidato e dos votos nulos e em brancos. Quem não receber voto naquela seção não terá o nome registrado no papel. O boletim de urna será impresso antes mesmo do envio dos resultados ao Tribunal Superior Eleitoral.<b>Por que isso será feito?</b>",
        explicacao: "🤔 Para que qualquer pessoa possa confrontar os resultados dos votos do boletim de urna da sua respectiva seção com os resultados posteriormente divulgados no site do Tribunal Superior Eleitoral.",
        comoVotar:"Se você acha que a explicação (🤔) é<b>verdadeira vote 1</b>. Se, pelo contrário, considera que ela é<b>falsa vote 2.</b> Em seguida, aperte<b class='confirmaVerde'>CONFIRMA</b>para checar o resultado. ⬇️",
        correta: true,
        resposta:"<p><b>SAIBA MAIS</b></p><p>Essa é uma novidade criada para<b>aumentar a transparência da totalização dos votos e a auditabilidade das eleições</b>pela sociedade civil 🔎.</p><p>Até o pleito passado, ocorrido em 2020, os boletins de urna ficavam disponíveis para o público em até três dias úteis. Agora eles serão disponibilizados no mesmo dia da eleição. Isso<b>permitirá à população fazer apurações simultâneas e em tempo real com o Tribunal Superior Eleitoral (TSE)</b>.</p><p>Verificar se os dados do boletim de urna (disponibilizados em primeira mão no local de cada seção) correspondem aos dados divulgados pelo TSE é um dos mecanismos que as pessoas que votaram têm de<b>checar a integridade do processo eleitoral</b>.</p>"

    }

]

function comecar(){

    loadQuestion(0)

    document.querySelector(".comecar").style.display = 'none'
    document.querySelector(".urna").classList.remove("escondida")
    document.querySelector(".instrucoes").style.display = 'none'


}


document.querySelector(".comecar").addEventListener('click', comecar)


let perguntaAtual = 0

function loadQuestion(n){

    const elContexto = document.querySelector(".contexto")
    const elExplicacao = document.querySelector(".explicacao")
    const elComoVotar = document.querySelector(".comoVotar")
    const elResposta = document.querySelector(".resposta")
    
    elContexto.innerHTML = lista[n].contexto
    elExplicacao.innerHTML = lista[n].explicacao
    elComoVotar.innerHTML = lista[n].comoVotar
    elResposta.innerHTML = lista[n].resposta

    document.querySelector(".proximaPergunta").style.display = "none"

}



let opcao 

function selecionarResposta(event) {

    somNumero.play()

    if (event.target.id == "numero1") {
    opcao = true
    document.querySelector('#numero2').classList.remove('clicado')
}
    else if (event.target.id == "numero2") {
    opcao = false
    document.querySelector('#numero1').classList.remove('clicado')
}

    event.target.classList.add('clicado')            
}


function checarResposta() {

    somConfirma.play()

    pergunta = lista[perguntaAtual]

    if (pergunta.correta == opcao)
    document.querySelector(".resultado").textContent = "😁 ACERTOU!"
    else
    document.querySelector(".resultado").textContent = "😫 ERROU!"

    document.querySelector(".complemento").style.display = "initial"

    document.querySelector(".proximaPergunta").style.display = "initial"

    if (perguntaAtual == lista.length-1) {

        document.querySelector('.proximaPergunta').style.display = "none"

        console.log('teste')

    }

    console.log(perguntaAtual, lista.length)

}


function avancar() {

    perguntaAtual++
    document.querySelector(".complemento").style.display = "none" 
    loadQuestion(perguntaAtual)   

    document.querySelector('#numero1').classList.remove('clicado')
    document.querySelector('#numero2').classList.remove('clicado')

}

document.querySelector('#botaoVerde').addEventListener('click', checarResposta);
document.querySelector('#numero1').addEventListener('click', selecionarResposta);
document.querySelector('#numero2').addEventListener('click', selecionarResposta);
document.querySelector('.proximaPergunta').addEventListener('click', avancar);
































