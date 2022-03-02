import fetch from 'node-fetch';
interface Employee {
    id: number
    employee_name: string
    employee_salary: number
    employee_age: number
    profile_image: string
}

// // const fetchEmployees = async (): Promise<Array<Employee> | string> => {
// //     const api = 'http://dummy.restapiexample.com/api/v1/employees'
// //     try {
// //         const response = await fetch(api)
// //         const {data} = await response.json();
// //        console.log("Data Fetched");
// //        //console.log(data);
// //        return data;
       
// //     } catch (error) {
// //         if (error) {
// //             console.error( error)
// //         }
// //     }
    
// // }

async function fetchEmployees() {
    try
    {
        let response=await fetch('https://dummy.restapiexample.com/api/v1/employees');
        let data=await response.json();
        return data;

    }

    catch(error)
    {
        console.log(error);
    }
    
}

fetchEmployees().then(data=>console.log(data));

// async function fetchMoviesJSON() {
//     const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
//     const movies = await response.json();
//     return movies;
//   }
//   fetchMoviesJSON().then(movies => {
//     console.log(movies); // fetched movies
//   });