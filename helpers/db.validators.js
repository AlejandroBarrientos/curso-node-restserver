const Role = require('../models/role');
const Usuario = require('../models/usuario');

//Middlewares personalizados

const esRoleValido = async (rol = '') => {
    //Encuentra si el nombre del rol coincide con el que esta mandadno
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la BD`);
    }
}


const emailExiste = async (correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado`);
    }
}




const existeUsuarioPorId = async (id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe: ${id}`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}







// //Verificar si el correo existe
// const existeEmail = await Usuario.findOne({ correo });
// if (existeEmail) {
//     return res.status(400).json({
//         msg: 'Ese correo ya está registrado'
//     });
// }