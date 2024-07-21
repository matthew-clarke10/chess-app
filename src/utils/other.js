export const capitalise = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const getDayOfYear = (date = new Date()) => {
  // Create a date object for the start of the current year
  const startOfYear = new Date(date.getFullYear(), 0, 1);

  // Calculate the difference in time
  const diff = date - startOfYear;

  // Convert the time difference from milliseconds to days
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  return dayOfYear;
};

export const getFormattedDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};