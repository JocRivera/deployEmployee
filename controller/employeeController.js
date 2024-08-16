const Employee = require('../model/employee')
//Generar rutas

const getEmployees = async (req, res) => {
    try {
        res.json(await Employee.find())
    } catch (error) {
        console.error(error)
    }
}
const getEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const employee = await Employee.findById(id)
        res.json(employee)
    }
    catch (error) {
        console.error(error)
    }
}

const postEmployee = async (req, res) => {
    try {
        //calcular los días trabajados
        const dateOfEntry = new Date(req.body.dateOfEntry)
        const dateOfRetirement = new Date(req.body.dateOfRetirement)
        const daysWorked = Math.floor((dateOfRetirement - dateOfEntry) / (1000 * 60 * 60 * 24)) //Math.floor redondea el resultado hacia abajo al número entero más cercano, asegurando que siempre se obtenga un valor entero (sin decimales) para los días trabajados.
        //setear los días trabajados
        req.body.daysWorked = daysWorked
        //calcular cesantías
        const severance = (req.body.salary * daysWorked) / 360
        //setear las cesantías
        req.body.severance = severance
        //guardar en la base de datos
        const employee = new Employee(req.body)
        await employee.save()
        res.json({ message: "Employee create success" })

    } catch (error) {
        console.error(error)
    }
}

const postDaysWorked = async (req, res) => {

}



const putEmployee = async (req, res) => {
    try {
        const { id } = req.params
        await Employee
            .findByIdAndUpdate(id, req.body)
        res.json({ message: "Employee updated successfully" })
    }
    catch (error) {
        console.error(error)
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params
        await Employee.findByIdAndDelete(id)
        res.json({ message: "Employee deleted successfully" })
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getEmployees,
    getEmployee,
    postEmployee,
    postDaysWorked,
    putEmployee,
    deleteEmployee
}