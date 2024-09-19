function getWeeks(startDate, endDate) {
  var sd = new Date(startDate);
  var weeks = [];
  var week = [];
  var weekCounter = 1;

  // Start from today and go until the end date
  for (var d = sd; d <= new Date(endDate); d.setDate(d.getDate() + 1)) {
    week.push(d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear());

    // Check if the current day is the end of the week (Wednesday)
    if (d.getDay() === 2 || d >= new Date(endDate)) {
      // Week ends on Wednesday
      weeks.push("Week " + weekCounter + ":");
      weeks.push(week);
      weekCounter++;
      week = [];
    }
  }

  return weeks;
}

// Call the function and log the result
console.log(getWeeks(new Date(), "12/31/2024")); // Adjust the end date accordingly
