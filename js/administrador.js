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
    formDatos["idestudiante"] = document.getElementById("idestudiante").value;
    formDatos["nnombre"] = document.getElementById("nnombre").value;
    formDatos["napellido"] = document.getElementById("napellido").value;
    formDatos["ncorreo"] = document.getElementById("ncorreo").value;
    formDatos["fechaEs"] = document.getElementById("fechaEs").value;
    
    return formDatos;
}

let nuevoRegistro=(data)=> {
    let tabla = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let nuevaFila = tabla.insertRow(tabla.length);
    cell1 = nuevaFila.insertCell(0);
    cell1.innerHTML = data.idestudiante;
    cell2 = nuevaFila.insertCell(1);
    cell2.innerHTML = data.nnombre;
    cell3 = nuevaFila.insertCell(2);
    cell3.innerHTML = data.napellido;
    cell4 = nuevaFila.insertCell(3);
    cell4.innerHTML = data.ncorreo;
    cell5 = nuevaFila.insertCell(4);
    cell5.innerHTML = data.fechaEs;
    cell6 = nuevaFila.insertCell(5);
    cell6.innerHTML = `<button class="btn btn-outline-info my-2 my-sm-0" onClick="editarRegistro(this)">Editar</button>
                       <button class="btn btn-outline-danger my-2 my-sm-0" onClick="eliminarRegistro(this)">Borrar</button>`;
}

let limpiarForm=()=> {
    document.getElementById("idestudiante").value = "";
    document.getElementById("nnombre").value = "";
    document.getElementById("napellido").value = "";
    document.getElementById("ncorreo").value = "";
    document.getElementById("fechaEs").value = "";
    
    filaSeleccionada = null;
}

let editarRegistro=(td)=> {
    filaSeleccionada = td.parentElement.parentElement;
    document.getElementById("idestudiante").value = filaSeleccionada.cells[0].innerHTML;
    document.getElementById("nnombre").value = filaSeleccionada.cells[1].innerHTML;
    document.getElementById("napellido").value = filaSeleccionada.cells[2].innerHTML;
    document.getElementById("ncorreo").value = filaSeleccionada.cells[3].innerHTML;
    document.getElementById("fechaEs").value = filaSeleccionada.cells[4].innerHTML;
}
let actualizarRegistro=(formDatos)=> {
    filaSeleccionada.cells[0].innerHTML = formDatos.idestudiante;
    filaSeleccionada.cells[1].innerHTML = formDatos.nnombre;
    filaSeleccionada.cells[2].innerHTML = formDatos.napellido;
    filaSeleccionada.cells[3].innerHTML = formDatos.ncorreo;
    filaSeleccionada.cells[4].innerHTML = formDatos.fechaEs;
}

let eliminarRegistro=(td)=> {
    if (confirm('Estas seguro de eliminar este estudiante ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        limpiarForm();
    }
}
let validarNombre=()=> {
    let esValido = true;
    if (document.getElementById("nnombre").value == "") {
        esValido = false;
        document.getElementById("validarNombre").classList.remove("d-none");
    } else {
        esValido = true;
        if (!document.getElementById("validarNombre").classList.contains("d-none"))
            document.getElementById("validarNombre").classList.add("d-none");
    }
    return esValido;
}