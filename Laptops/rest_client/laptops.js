const IP = "192.168.3.201";
const PORT = 3001;
const URL = "http://" + IP + ":" + PORT + "/";
export const getAllLaptops = (fnRefreshList) => {
  fetch(URL + "laptops")
    .then((response) => {
      return response.json();
    })
    .then((laptops) => {
      fnRefreshList(laptops);
    });
};
