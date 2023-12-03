function timeConversion(s) {
  // Write your code here
  //first, find if AM or PM
  const AMorPM = s.slice(-2)
  //and find value of hour
  const hour = s.slice(0,2)
  const hourNumber = Number(hour)
  //get rest of string
  const minutesAndSeconds = s.slice(2,-2)
  //if PM, add 12 to first number
  if (AMorPM == "PM") {
    if (hourNumber == 12) {
      return("12" + minutesAndSeconds)
    } else {
      return((12+hourNumber) + minutesAndSeconds)
    }
    //if AM, start from 00:00:00
  } else {
    if (hourNumber == 12) {
      return("00" + minutesAndSeconds)
    } else if (hourNumber < 10) {
      return("0" + hourNumber + minutesAndSeconds)
    } else {
      return(hourNumber + minutesAndSeconds)
    }
  }
}

timeConversion("01:00:00AM")

