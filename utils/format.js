export function fixNumber(number) {
  const fixedNumber = number.toFixed(1);
  return fixedNumber;
}

export function getYear(date) {
  const releaseDate = new Date(date);
  const year = releaseDate.getFullYear();
  return year;
}

export function findDirector(crew) {
  const director = crew.find((member) => member.job === "Director");

  if (director) {
    return director.name;
  } else {
    return "Unknown";
  }
}
