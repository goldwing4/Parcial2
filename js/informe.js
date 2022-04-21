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
    formDatos["nEstudiante"] = document.getElementById("nEstudiante").value;
    formDatos["fechaSesion"] = document.getElementById("fechaSesion").value;
    formDatos["horaSesion"] = document.getElementById("horaSesion").value;
    formDatos["cObserva"] = document.getElementById("cObserva").value;
    return formDatos;
}

let nuevoRegistro=(data)=> {
    let tabla = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let nuevaFila = tabla.insertRow(tabla.length);
    cell1 = nuevaFila.insertCell(0);
    cell1.innerHTML = data.nEstudiante;
    cell2 = nuevaFila.insertCell(1);
    cell2.innerHTML = data.fechaSesion;
    cell3 = nuevaFila.insertCell(2);
    cell3.innerHTML = data.horaSesion;
    cell4 = nuevaFila.insertCell(3);
    cell4.innerHTML = data.cObserva;
    cell4 = nuevaFila.insertCell(4);
    cell4.innerHTML = `<button class="btn btn-outline-info my-2 my-sm-0" onClick="editarRegistro(this)">Editar</button>
                       <button class="btn btn-outline-danger my-2 my-sm-0" onClick="eliminarRegistro(this)">Borrar</button>`;
}

let limpiarForm=()=> {
    document.getElementById("nEstudiante").value = "";
    document.getElementById("fechaSesion").value = "";
    document.getElementById("horaSesion").value = "";
    document.getElementById("cObserva").value = "";
    filaSeleccionada = null;
}

let editarRegistro=(td)=> {
    filaSeleccionada = td.parentElement.parentElement;
    document.getElementById("nEstudiante").value = filaSeleccionada.cells[0].innerHTML;
    document.getElementById("fechaSesion").value = filaSeleccionada.cells[1].innerHTML;
    document.getElementById("horaSesion").value = filaSeleccionada.cells[2].innerHTML;
    document.getElementById("cObserva").value = filaSeleccionada.cells[3].innerHTML;
}
let actualizarRegistro=(formDatos)=> {
    filaSeleccionada.cells[0].innerHTML = formDatos.nEstudiante;
    filaSeleccionada.cells[1].innerHTML = formDatos.fechaSesion;
    filaSeleccionada.cells[2].innerHTML = formDatos.horaSesion;
    filaSeleccionada.cells[3].innerHTML = formDatos.cObserva;
}

let eliminarRegistro=(td)=> {
    if (confirm('Estas seguro de eliminar este informe ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        limpiarForm();
    }
}
let validarNombre=()=> {
    let esValido = true;
    if (document.getElementById("nEstudiante").value == "") {
        esValido = false;
        document.getElementById("validarNombre").classList.remove("d-none");
    } else {
        esValido = true;
        if (!document.getElementById("validarNombre").classList.contains("d-none"))
            document.getElementById("validarNombre").classList.add("d-none");
    }
    return esValido;
}