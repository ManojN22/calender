export const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
export const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
export const dayNamesIndex = {"Sun":0,"Mon":1,"Tue":2,"Wed":3,"Thu":4,"Fri":5,"Sat":6};
export function generateCalendarData(year) {
    let calendarData = {};
    let date = new Date(year, 0, 1); // Start from January 1st of the given year

    // Initialize calendar data with months
    for (let i = 0; i < 12; i++) {
        calendarData[monthNames[i]] = [];
    }

    // Loop through each day of the year
    while (date.getFullYear() === year) {
        let monthIndex = date.getMonth(); // Get the month index
        let dayName = date.toLocaleDateString('en-US', { weekday: 'short' }); // Get the day name
        
        // Add the date and day to the respective month
        calendarData[monthNames[monthIndex]].push({
            Date: date.getDate(),
            Day: dayName
        });

        // Move to the next day
        date.setDate(date.getDate() + 1);
    }

    return calendarData;
}
export function formate(data){
    let formatedDates = {};
    let maxi=0;
    for(let j in dayNames){
    
        if(dayNamesIndex[dayNames[j]] <dayNamesIndex[data[0].Day])
        {formatedDates[dayNames[j]]=[0];}
        else{
            formatedDates[dayNames[j]]=[];
        }
    }
    
    for(let i in data){
        formatedDates[data[i].Day].push(data[i].Date);
        maxi = Math.max(maxi,formatedDates[data[i].Day].length)
    }
    for(let days in dayNames){
        if(maxi>formatedDates[dayNames[days]].length)
        {formatedDates[dayNames[days]].push(0);}
    }
    return formatedDates
}