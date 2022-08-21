let boton = document.querySelector("#boton");
let listaAmigos = document.querySelector("#lista");
let botonBucar = document.querySelector("#search");
let idAmigo = document.querySelector("#input");
let amigoBuscado = document.querySelector("#amigo");
let inputDelete = document.querySelector("#inputDelete");
let botonBorrar = document.querySelector("#delete");
let mensajeBorrado = document.querySelector("#success")

$(boton).click(function(){
    $.get("http://localhost:5000/amigos",function(data){
        for(dato of data){
            let elementoLista = document.createElement("li")
            elementoLista.innerHTML = dato.name;
            listaAmigos.append(elementoLista)
        }
        listaAmigos.append(document.createElement("br"))

    })
});

$(botonBucar).click(
    function(){
        $.get("http://localhost:5000/amigos",function(info)
        {
            for(dato of info){
                if(dato.id == idAmigo.value)
                {
                    amigoBuscado.innerHTML = dato.name
                }
            }
        });
    }
);

/* $(botonBucar).click(
    function(){
        $.post("http://localhost:5000/amigos",function(info)
        {
            for(dato of info){
                console.log(dato)
                if(dato.id == idAmigo.value)
                {
                    amigoBuscado.innerHTML = dato.name
                }
            }
        });
    }
); */

$(botonBucar).click(
    function(){
        fetch("http://localhost:5000/amigos")
        .then(dato => dato.json())
        .then(dato => {
            for(dat of dato){
                if(dat.id == idAmigo.value)
                {
                    amigoBuscado.innerHTML = dat.name
                }
            }
        }
        )    
        }
);

$(botonBorrar).click(
    function(){
        $.ajax({
            url: `http://localhost:5000/amigos/${inputDelete.value}`,
            type: 'DELETE',
            success: function(data) {
                mensajeBorrado.innerHTML = `Tu amigo con ID ${inputDelete.value} fue eliminado`
                inputDelete.value = ""
            },
        });
    }
);

