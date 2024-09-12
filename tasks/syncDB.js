
let times = 0;
const syncDB = () => {
    times += 1
    console.log('running every minute 1, 2, 4 and 5');
    return times
}


module.exports = {
    syncDB
}