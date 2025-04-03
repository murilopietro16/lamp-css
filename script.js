function turnlights() {
    const lampada = document.getElementById('bulb')
    const interruptor = document.getElementById('switch')

    console.log('lampada ::', lampada.classname);
    console.log('interruptor ::', interruptor.classname);
    lampada.classList.toggle('on');
    interruptor.classList.toggle('on');
}