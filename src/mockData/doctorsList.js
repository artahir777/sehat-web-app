const getFullDate = () => {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"];
    let d = new Date();
    return String( days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() );
}

const doctorsList = [
    {
        id: 1, dr_name: "John Doe", license_no: 11223344,  
        specialization: ["General Physician", "Neurologist"], address: "I-10/1, Islamabad",
        rating: 4.5, contact: {phoneNo: "0333-4422333", mail: "abc@gmail.com"}, date_joined: getFullDate(),
    },
    {
        id: 2, dr_name: "John Doe", license_no: 11223344,  
        specialization: ["General Physician", "Neurologist"], address: "I-10/1, Islamabad",
        rating: 4.5, contact: {phoneNo: "0333-4422333", mail: "abc@gmail.com"}, date_joined: getFullDate(),
    },
    {
        id: 3, dr_name: "John Doe", license_no: 11223344,  
        specialization: ["General Physician", "Neurologist"], address: "I-10/1, Islamabad",
        rating: 4.5, contact: {phoneNo: "0333-4422333", mail: "abc@gmail.com"}, date_joined: getFullDate(),
    },
    {
        id: 4, dr_name: "John Doe", license_no: 11223344,  
        specialization: ["General Physician", "Neurologist"], address: "I-10/1, Islamabad",
        rating: 4.5, contact: {phoneNo: "0333-4422333", mail: "abc@gmail.com"}, date_joined: getFullDate(),
    },
    {
        id: 5, dr_name: "John Doe", license_no: 11223344,  
        specialization: ["General Physician", "Neurologist"], address: "I-10/1, Islamabad",
        rating: 4.5, contact: {phoneNo: "0333-4422333", mail: "abc@gmail.com"}, date_joined: getFullDate(),
    },
    {
        id: 6, dr_name: "John Doe", license_no: 11223344,  
        specialization: ["General Physician", "Neurologist"], address: "I-10/1, Islamabad",
        rating: 4.5, contact: {phoneNo: "0333-4422333", mail: "abc@gmail.com"}, date_joined: getFullDate(),
    },
    {
        id: 7, dr_name: "John Doe", license_no: 11223344,  
        specialization: ["General Physician", "Neurologist"], address: "I-10/1, Islamabad",
        rating: 4.5, contact: {phoneNo: "0333-4422333", mail: "abc@gmail.com"}, date_joined: getFullDate(),
    },
    {
        id: 8, dr_name: "John Doe", license_no: 11223344,  
        specialization: ["General Physician", "Neurologist"], address: "I-10/1, Islamabad",
        rating: 4.5, contact: {phoneNo: "0333-4422333", mail: "abc@gmail.com"}, date_joined: getFullDate(),
    },
    {
        id: 9, dr_name: "John Doe", license_no: 11223344,  
        specialization: ["General Physician", "Neurologist"], address: "I-10/1, Islamabad",
        rating: 4.5, contact: {phoneNo: "0333-4422333", mail: "abc@gmail.com"}, date_joined: getFullDate(),
    },
    {
        id: 10, dr_name: "John Doe", license_no: 11223344,  
        specialization: ["General Physician", "Neurologist"], address: "I-10/1, Islamabad",
        rating: 4.5, contact: {phoneNo: "0333-4422333", mail: "abc@gmail.com"}, date_joined: getFullDate(),
    },

] ;

export default doctorsList;