async function Conectar(){
    const t={
        hola:'hola'
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(t)
    };

    const data = await fetch('http://localhost:3000/input', options);
    const json = await data.json();

    modalast();
    alert(json)
    console.log(json);
    resultado = json;
}