export function fixNumber(number) {
  const fixedNumber = number.toFixed(1);
  return fixedNumber;
}

export function getYear(date) {
  const releaseDate = new Date(date);
  const year = releaseDate.getFullYear();
  return year;
}
