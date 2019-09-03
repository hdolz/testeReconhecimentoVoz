//módulo de reconhecimento de voz

function iniciarReconhecimento() {
    const SpeechRecognition = webkitSpeechRecognition
    const SpeechGrammarList = webkitSpeechGrammarList
    const SpeechRecognitionEvent = webkitSpeechRecognitionEvent

    let palavras = ['Manaus', 'Escopo', 'Programa', 'html', 'black', 'blue', 'Bloco html', 'chocolate', 'coral'];

    let grammar = '#JSGF V1.0; grammar palavras; public <palavra> = ' + palavras.join(' | ') + ' ;'


    var recognition = new SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();

    speechRecognitionList.addFromString(grammar, 1);

    recognition.grammars = speechRecognitionList;
    recognition.continuous = true;
    recognition.lang = 'pt-br';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    let div = document.getElementById('texto');

    recognition.onresult = (event) => {
        var last = event.results.length - 1;
        var color = event.results[last][0].transcript;
        switch (color.toUpperCase().trim()) {
            case 'MANAUS':
                console.log('Cidade de manaus');
                break;
            case 'ESCOPO':
                console.log('Escopo foi dito');
                break;
            case 'HTML':
                console.log('Código HTML iniciado!');
                break;
            case 'PROGRAMA':
                console.log('Programa citado');
                break;
            case 'BLOCO HTML':
                console.log('Base do HTML');
                break;
            default:
                console.log('Não reconhecido');
        }
        console.log(event);
    }

    recognition.start();
    console.log('Pronto para receber um comando');

}





// SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// SpeechGrammarList = webkitSpeechGrammarList;

// const recognition = new SpeechRecognition();

// function iniciarReconhecimento() {
//     recognition.continuous = true;
//     //updates the recognition value as you speakes
//     recognition.interimResults = true;

//     recognition.addEventListener('result', e => {
//         const transcript = Array.from(e.results)
//             .map(result => result[0])
//             .map(result => result.transcript)
//             .join('');
//         console.log(transcript);
//         if(transcript.toUpperCase() == 'MEU TESTE'){
//             console.log('Reconheceu comando')
//         }
//     });
//     recognition.start();
//     console.log('Reconhecimento Iniciado');
// }

// function pararReconhecimento() {
//     recognition.stop();
//     console.log('Reconhecimento finalizado');
// }

