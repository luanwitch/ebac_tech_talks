AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00"); // Atualizei o ano para 2024
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; // Corrigido!

    if (distanciaAteOEvento <= 0) { 
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
        return;
    }

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundoEmMs = 1000; 

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / segundoEmMs);

    document.getElementById('contador').innerHTML = 
        `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

}, 1000);
