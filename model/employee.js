const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
    documentNumber: {
        type: String,
        unique: true,
        required: [true, "The field document number is required"],
        maxlength: [15, "Max 15 characters"],
    },
    names: {
        type: String,
        required: [true, "The field names is required"],
        minlength: [3, "Min 3 characters"],
        maxlength: [100, "Max 100 characters"],
    },
    dateOfEntry: {
        type: Date,
        required: [true, "The field date of entry is required"],
    },
    dateOfRetirement: {
        type: Date,
        required: [true, "The field date of retirement is required"],
    },
    salary: {
        type: Number,
        required: [true, "The field salary is required"],
    },
    daysWorked: {
        type: Number,
        // required: [true, "The field days worked is required"],
        default: 0,
    },
    severance: {
        type: Number,
        default: 0, // Se puede calcular más tarde
    }
})
// Exportar el modelo
module.exports = model("Employee", employeeSchema, "employee");
// Primer argumento: "Employee":
// Es el nombre del modelo.Este nombre será utilizado para identificar y trabajar con este modelo en otros archivos.

// Segundo argumento: employeeSchema:
// Este es el esquema que define la estructura de los documentos en la colección.El esquema incluye los campos, tipos de datos, validaciones, etc., que los documentos deben cumplir.

// Tercer argumento: "employee":
// Especifica el nombre exacto de la colección en MongoDB.Si no se especifica, Mongoose toma el nombre del modelo(Employee) y lo pluraliza automáticamente a "employees".Al incluir este argumento, se le indica a Mongoose que la colección se llama exactamente "employe