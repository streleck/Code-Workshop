// example
const getArrayOfPhoneNumbers = (employeesArray) => {
    const finalArray = []
    
    for (let employee of employeesArray) {
        finalArray.push(employee.phone)
    }

    return finalArray
}

// should have the form "lastName, firstName"
const getArrayOfCompleteNames = (employeesArray) => {
   
}

const employeeIsLazy = (employee) => {
    
}

// returned array should contain whole employee objects
const getArrayOfLazyEmployees = (employeesArray) => {
   
}

// include duplicates
const getAllLazyEmployeeTags = (employeesArray) => {
   
}

const removeDuplicatesFromTagArray = (tagsArray) => {

}


export {
    getArrayOfPhoneNumbers,
    getArrayOfCompleteNames,
    employeeIsLazy,
    getArrayOfLazyEmployees,
    getAllLazyEmployeeTags,
    removeDuplicatesFromTagArray,
}