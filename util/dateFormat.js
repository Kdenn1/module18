// this is the date document as referenced in the post.js file 
const addDate = date => {
    let dateStart = date.toString();

    //get the date data from the string 
    const lastChar = dateStart.charAt(dateStart.length - 1);
    // basically set dates so they end in proper suffix 
    if (lastChar === '1' && dateStart !== '11') {
        dateStart = `${dateStart}st`;
    } else if (lastChar === '2' && dateStart !== '12') {
        dateStart = `${dateStart}nd`;
    } else if (lastChar === '3' && dateStart !== '13') {
        dateStart = `${dateStart}rd`;
    } else {
        dateStart = `${dateStart}th`;
    }
    return dateStart;
};

// this function formats and accepts the timestamp. It also establishes an options object 
module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
) => {
    let months;

    if (monthLength === 'short') {
        //set numeric values of the months to their shortened abreviations 
        months = {
            0: 'Jan',
            1: 'Feb',
            2: 'Mar',
            3: 'Apr',
            4: 'May',
            5: 'Jun',
            6: 'Jul',
            7: 'Aug',
            8: 'Sep',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec'
        };
    } else {
        //else they are the normal version of their names 
        months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        };
    }

    const dateObj = new Date(timestamp);
    //do a const for the month 
    const monthForm = months[dateObj.getMonth()];

    let dayOfMonth;

    if (dateSuffix) {
        dayOfMonth = addDateSuffix(dateObj.getDate())
    } else {
        dayOfMonth = dateObj.getDate();
    }

    const year = dateObj.getFullYear();

    let hour;
    // get the time in 24 hour day cycle 
    if(dateObj.getHours > 12) {
        hour = Math.floor(dateObj.getHours() / 2);
    } else {
        hour = dateObj.getHours();
    }
    //if the time says zero then change it to 12 for starting time 
    if(hour === 0) {
        hour = 12;
    }
    // last but not least get the minutes 
    const minutes = dateObj.getMinutes();
    // set the time to be either AM or PM
    let timeofday;

    if(dateObj.getHours() >= 12) {
        timeofday = 'pm';
    } else {
        timeofday = 'am';
    }

    const timestampform = `${monthForm} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${timeofday}`;
};