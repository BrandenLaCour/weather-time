export function currentWeek(dayIndex) {

  const week = ["Sun", "Mon", "Tues","Wed", 'Thur', 'Fri','Sat']

  let currentWeek = [];

  for (let i= 0; i< 7; i++){
    
     if(dayIndex !== 7){
       currentWeek.push(week[dayIndex])
       dayIndex ++
     }
    else {
      currentWeek.push(week[0])
      dayIndex = 1
    }
    
  }


  return currentWeek;
}
