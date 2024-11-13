//Constructor para crear un nuebo empleado
function Empleado(nombre, edad, salario){
    this.nombre = nombre;
    this.edad = edad;
    this.salario = salario;
}
//Método para mostrar informacion del empleado
Empleado.prototype.mostrarInfo = function(){
    console.log("Nombre: " + this.nombre + ", Edad: " + this.edad + ", Salario: " + this.salario);
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, Salario: ${this.salario}`;
};
//Crear una clase de Gestión de empleados
class GestionEmpleados{
    constructor(){
        this.empleados = [];
    }
    //Método para agregar un empleado
    /**
     * Agrega un empleado al array de empleados.
     * 
     * @param {Object} empleado - El objeto empleado que se va a agregar.
     */
    agregarEmpleado(empleado){
        this.empleados.push(empleado);
    }
    //Método para mostrar los empleados
    mostrarEmpleados(){
        this.empleados.forEach(empleado => {
            console.log(empleado.mostrarInfo());
        });
    }
}
class GestionEmpleados{
    constructor(){
        this.empleados = [];
    }
    //Método para agregar un empleado
    agregarEmpleado(empleado){
        this.empleados.push(empleado);
    }
    //Método para mostrar los empleados
    mostrarEmpleados(){
        this.empleados.forEach(empleado => {
            console.log(empleado.mostrarInfo());
        });
    }
//Método para actualizar la información de un empleado
actualizarEmpleado(nombre, nuevosDatos){
    for (let empleado of this.empleados){
        if(empleado.nombre===nombre){
            Object.assign(empleado, nuevosDatos);
            return;
        }
    }
}
// Método para obtener la lista de empleados
listarEmpleados(){
    return this.empleados.map(empleado => empleado.mostrarInfo());
}
// Método para buscar un empleado por nombre
buscarEmpleado(nombre){
    return this.empleados.find(empleado => empleado.nombre === nombre);
}
// Método para calcular el salario total
calcularSalarioTotal(){
    return this.empleados.reduce((total, empleado) => total + empleado.salario, 0);
}
}
// Crear una instancia de Gestión de empleados
let gestionEmpleados = new GestionEmpleados();
// Añadir empleados
gestionEmpleados.agregarEmpleado(new Empleado("Juan", 30, 30000));
gestionEmpleados.agregarEmpleado(new Empleado("María", 35, 35000));
gestionEmpleados.agregarEmpleado(new Empleado("Carlos", 40, 40000));
//listar todos los empleados
console.log('Lista de empleados:');
console.log(gestionEmpleados.listarEmpleados());
//Buscar un empleado
console.log('Buscar un empleado:');
let empleadoBuscado = gestionEmpleados.buscarEmpleado("María"); 
if(empleadoBuscado){
    console.log(empleadoBuscado.mostrarInfo());
}
// Actializar  la información de un empleado
GestionEmpleados.actualizarEmpleado('María', {edad: 36, salario: 36000});
// Listar todos los empleados despues de actualizar
console.log('Lista de empleados después de actualizar:');
console.log(gestionEmpleados.listarEmpleados());
// Calcular el salario total
console.log('Salario total: ' + gestionEmpleados.calcularSalarioTotal());