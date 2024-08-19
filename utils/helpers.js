// helper functions can go here
// possible helper functions:
// - getFormattedDate
// - getFormattedTime
// - getFormattedDateTime
// - getFormattedDateTimeFromTimestamp
// - getFormattedDateFromTimestamp

//getFormattedDate
module.exports = {
  format_date: (date) => {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  },
};
