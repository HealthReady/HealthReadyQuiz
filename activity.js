function get_activities() {
    // TODO: Get activities from LocalStorage and return them as an Array of Objects
    // Refer: http://www.w3schools.com/html/html5_webstorage.asp
}

function add() {
    // TODO: Create new activity Object and add it to LocalStorage

    show();

    return false;
}

function remove() {
    // TODO: Remove activity from LocalStorage

    show();

    return false;
}

function show() {
    var html = '<h4>No activities</h4>'
    var activities = get_activities();

    if (activities.length > 0) {
        // TODO: sort the activities by ascending start date

        // Build HTML to be inserted into <div id="activities"></div>
        html = '<ul>';
        // TODO: build the list of activities in HTML displaying it's type, start date, start time, duration, reminder and intensity
        // TODO: each activity also needs to be able to be deleted
        html += '</ul>'
    }
    // TODO: add our newly created list of activities to our index.html page
}

// Helper function to correctly display date
function getDate(datestr) {
    var datetime = new Date(datestr);
    var DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday"];
    var MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day = DAY_NAMES[datetime.getDay()];
    var date = datetime.getDate();
    var month = MONTH_NAMES[datetime.getMonth()];
    var year = datetime.getFullYear();
    return day + ' ' + date + ' ' + month + ' ' + year;
}

// Helper function to correctly display time
function getTime(datestr) {
    var datetime = new Date(datestr);
    var hours = datetime.getHours();
    var suffix = hours >= 0 && hours < 12 ? 'am' : 'pm';
    if (hours === 0) {
        hours = '12';
    } else if (hours < 10) {
        hours = '0' + hours;
    }
    var minutes = datetime.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return hours + ':' + minutes + suffix;
}

show();