window.onload = () => {
    caregakeyBindingDeEventos();
    console.log('Carregou');
}

function caregakeyBindingDeEventos() {
    const teclaR = 82;
    const teclaI = 73;
    const teclaS = 83;
    document.addEventListener('keydown', (e) => {
        if(e.ctrlKey && e.altKey && e.which == teclaR){
            iniciarReconhecimento();
        } else if(e.ctrlKey && e.altKey && e.which == teclaS){
            pararReconhecimento();
        }
    })
}