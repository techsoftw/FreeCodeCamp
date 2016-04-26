/* jshint esversion: 6 */
/* jshint node: true */
'use strict';
function makeFriendlyDates(arr) {
  const days = {
    "0": "th",
    "1": "st",
    "2": "nd",
    "3": "rd",
    "4": "th",
    "5": "th",
    "6": "th",
    "7": "th",
    "8": "th",
    "9": "th"
  };
  const months = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  const date1 = new Date(arr[0]);
  const date2 = new Date(arr[1]);
  const curYear = new Date().getFullYear();
  const diff = Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
  const parts1 = arr[0].split('-');
  const parts2 = arr[1].split('-');
  const month1 = parseInt(parts1[1]);
  const month2 = parseInt(parts2[1]);
  const day1 = parseInt(parts1[2]);
  const day2 = parseInt(parts2[2]);
  let year1 = parseInt(parts1[0]);
  let year2 = parseInt(parts2[0]);
  
  let m1 = months[month1];
  let m2 = months[month2];
  let d1 = (day1 >= 20 || day1 < 10) ? day1 + days[day1 % 10] : day1 + 'th';
  let d2 = (day2 >= 20 || day2 < 10) ? day2 + days[day2 % 10] : day2 + 'th';
  
  if (arr[0] === arr[1])
    return [`${m1} ${d1}, ${year1}`];
  if (diff < 365) {
    year2 = '';
    if (year1 === curYear)
      year1 = '';
  }
  if (month1 === month2 && year1 === year2)
    m2 = '';
  
  const comma1 = (year1 === '') ? '' : ', ';
  const comma2 = (year2 === '') ? '' : ', ';
  const space = (m2 === '') ? '' : ' ';
  const fd1 = `${m1} ${d1}${comma1}${year1}`; 
  const fd2 = `${m2}${space}${d2}${comma2}${year2}`;
  
  return [fd1,fd2];
}

makeFriendlyDates(["2016-07-01", "2016-07-04"]);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);
