function determinarParImpar() {
    const numero = document.getElementById('numero').value;
    if (isNaN(numero) || numero.trim() === '') {
        document.getElementById('resultado').textContent = 'Por favor, ingrese un número válido';
        return;
    }
    const esPar = numero % 2 === 0;
    const mensaje = esPar ? 'El número es par' : 'El número es impar';
    document.getElementById('resultado').textContent = mensaje;
}
function determinarParImparAlert(){
    const numero = document.getElementById('numero').value;
    if (isNaN(numero) || numero.trim() === '') {
        alert('Por favor, ingrese un número válido');
        return;
    }
    const esPar = numero % 2 === 0;
    const mensaje = esPar ? 'El número es par' : 'El número es impar';
    alert(mensaje);
}