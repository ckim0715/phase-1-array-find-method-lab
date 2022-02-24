// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin (arrayName) {
    if (arrayName.find(item => item.result === 'W')) {
    return (arrayName.find(item => item.result === 'W')).year;
}   

}


superbowlWin(record);
