import fetch from 'node-fetch';
interface Employee {
    id: number
    employee_name: string
    employee_salary: number
    employee_age: number
    profile_image: string
}

const fetchEmployees = async (): Promise<Array<Employee> | string> => {
    const api = 'http://dummy.restapiexample.com/api/v1/employees'
    try {
        const response = await fetch(api)
        const data:Employee={} = await response.json();
       return data
        console.log(data);
    } catch (error) {
        if (error) {
            console.log( error.message)
        }
    }
}

