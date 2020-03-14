export const getTime = num => {
  //   let time = new Date(num);
  //   return time;
  //   let nu = Math.floor(new Date().getTime() / 1000.0);
  //   var myDate = new Date(nu * 1000);

  var myDate = new Date(num * 60000 * num);
  //   return myDate;
  return myDate.toLocaleTimeString();
};

export const convertTimes = num => {
  return new Date(num).toLocaleTimeString();
};
