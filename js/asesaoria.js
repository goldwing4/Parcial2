var filaSeleccionada = null

let enviarFormulario=()=> {
    if (validarNombre()) {
        let formDatos = leerDatos();
        if (filaSeleccionada == null)
            nuevoRegistro(formDatos);
        else
            actualizarRegistro(formDatos);
        limpiarForm();
    }
}

let leerDatos=()=> {
    let formDatos = {};
    formDatos["nomb"] = document.getElementById("nomb").value;
    formDatos["apell"] = document.getElementById("apell").value;
    formDatos["TypeDocument"] = document.querySelector('input[name="TypeDocument"]:checked').value;
    formDatos["numDocument"] = document.getElementById("numDocument").value;
    formDatos["promg"] = document.getElementById("promg").value;
    formDatos["semestre"] = document.getElementById("semestre").value;
    formDatos["telf"] = document.getElementById("telf").value;
    formDatos["correo"] = document.getElementById("correo").value;
    formDatos["psyco"] = document.querySelector('input[name="psyco"]:checked').value;
    formDatos["fecha"] = document.getElementById("fecha").value;
    formDatos["hora"] = document.getElementById("hora").value;
    
    return formDatos;
}

let nuevoRegistro=(data)=> {
    let tabla = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let nuevaFila = tabla.insertRow(tabla.length);
    cell2 = nuevaFila.insertCell(1);
    cell2.innerHTML = data.nomb;
    cell3 = nuevaFila.insertCell(2);
    cell3.innerHTML = data.apell;
    cell4 = nuevaFila.insertCell(3);
    cell4.innerHTML = data.TypeDocument;
    cell5 = nuevaFila.insertCell(4);
    cell5.innerHTML = data.numDocument;
    cell6 = nuevaFila.insertCell(5);
    cell6.innerHTML = data.promg;
    cell7 = nuevaFila.insertCell(6);
    cell7.innerHTML = data.semestre;
    cell8 = nuevaFila.insertCell(7);
    cell8.innerHTML = data.telf;
    cell9 = nuevaFila.insertCell(8);
    cell9.innerHTML = data.correo;
    cell10 = nuevaFila.insertCell(9);
    cell10.innerHTML = data.psyco;
    cell11 = nuevaFila.insertCell(10);
    cell11.innerHTML = data.fecha;
    cell12 = nuevaFila.insertCell(11);
    cell12.innerHTML = data.hora;
    cell13 = nuevaFila.insertCell(12);
    cell13.innerHTML = `<button class="btn btn-outline-info my-2 my-sm-0" onClick="editarRegistro(this)">Editar</button>
                       <button class="btn btn-outline-danger my-2 my-sm-0" onClick="eliminarRegistro(this)">Borrar</button>`;
}

let limpiarForm=()=> {
    document.getElementById("nomb").value = "";
    document.getElementById("apell").value = "";
    let radio = document.querySelector('input[name="TypeDocument"]:checked');
    radio.checked = false;
    document.getElementById("numDocument").value = "";
    document.getElementById("promg").value = "";
    document.getElementById("semestre").value = "";
    document.getElementById("telf").value = "";
    document.getElementById("correo").value = "";
    let radio1 = document.querySelector('input[name="psyco"]:checked');
    radio1.checked = false;
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    filaSeleccionada = null;
}

let editarRegistro=(td)=> {
    filaSeleccionada = td.parentElement.parentElement;
    document.getElementById("nomb").value = filaSeleccionada.cells[1].innerHTML;
    document.getElementById("apell").value = filaSeleccionada.cells[2].innerHTML;
    document.getElementById("numDocument").value = filaSeleccionada.cells[4].innerHTML;
    document.getElementById("promg").value = filaSeleccionada.cells[5].innerHTML;
    document.getElementById("semestre").value = filaSeleccionada.cells[6].innerHTML;
    document.getElementById("telf").value = filaSeleccionada.cells[7].innerHTML;
    document.getElementById("correo").value = filaSeleccionada.cells[8].innerHTML;
    document.getElementById("fecha").value = filaSeleccionada.cells[10].innerHTML;
    document.getElementById("hora").value = filaSeleccionada.cells[11].innerHTML;
}

let actualizarRegistro=(formDatos)=> {
    filaSeleccionada.cells[1].innerHTML = formDatos.nomb;
    filaSeleccionada.cells[2].innerHTML = formDatos.apell;
    filaSeleccionada.cells[3].innerHTML = formDatos.TypeDocument;
    filaSeleccionada.cells[4].innerHTML = formDatos.numDocument;
    filaSeleccionada.cells[5].innerHTML = formDatos.promg;
    filaSeleccionada.cells[6].innerHTML = formDatos.semestre;
    filaSeleccionada.cells[7].innerHTML = formDatos.telf;
    filaSeleccionada.cells[8].innerHTML = formDatos.correo;
    filaSeleccionada.cells[9].innerHTML = formDatos.psyco;
    filaSeleccionada.cells[10].innerHTML = formDatos.fecha;
    filaSeleccionada.cells[11].innerHTML = formDatos.hora; 
}

let eliminarRegistro=(td)=> {
    if (confirm('Estas seguro de eliminar esta solicitud ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        limpiarForm();
    }
}
let validarNombre=()=> {
    let esValido = true;
    if (document.getElementById("nomb").value == "") {
        esValido = false;
        document.getElementById("validarNombre").classList.remove("d-none");
    } else {
        esValido = true;
        if (!document.getElementById("validarNombre").classList.contains("d-none"))
            document.getElementById("validarNombre").classList.add("d-none");
    }
    return esValido;
}