const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`aluno = ${aluno} e a nota = ${mediaAluno}`);
    } else {
        console.log('Estudante nao existe no array ou foi escrito errado o seu nome na função exibeNomeENoeta');
    }
}

exibeNomeENota('Caio');
exibeNomeENota('Afonso');
