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

export const saveLaptopRest = (laptop, fnShowMessage) => {
  const config = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      marca: laptop.marca,
      procesador: laptop.procesador,
      memoria: laptop.memoria,
      disco: laptop.disco,
    })
  };
  fetch(URL + "laptops", config)
    .then((response) => {
      return response.json();
    })
    .then((laptops) => {
      fnShowMessage();
      console.log(laptops);
    });
};
