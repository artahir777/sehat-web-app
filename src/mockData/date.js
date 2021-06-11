let d = new Date();
const getFullDate = () => {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"];
    return String( days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() );
}

export {getFullDate};

const getTime = () => {
    return (
        (d.getHours() > 9 ? "0" : "") +
         d.getHours()%12 + ":" + d.getMinutes() +
          (d.getHours() >= 12 ? " PM" : " AM") );
}

export {getTime};