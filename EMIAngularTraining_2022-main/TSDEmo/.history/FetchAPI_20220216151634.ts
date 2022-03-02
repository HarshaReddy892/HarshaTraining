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
        const {data} = await response.json();
       console.log("Data Fetched");
       console.log(data);
       return data;
       
    } catch (error) {
        if (error) {
            console.log( error.message)
        }
    }
    
}



var s=fetchEmployees();
//console.log(JSON.stringify(s));
//console.log("%j",s);

