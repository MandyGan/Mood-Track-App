export const getTimeRange = (units) => {
  if (units === "hour") {
    return 1000 * 60 * 60;
  } else if (units === "day") {
    return 1000 * 60 * 60 * 24;
  } else if (units === "week") {
    return 1000 * 60 * 60 * 24 * 7;
  } else {
    return 1000 * 60 * 60 * 24 * 30;
  }
};
