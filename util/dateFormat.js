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
}