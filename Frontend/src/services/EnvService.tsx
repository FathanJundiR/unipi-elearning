const envUrl = () => {
  // env = 1 => production. env = 2 => development
  var env = 2;
  var url = "";
  if (env === 1) {
    return (url = "/api");
  } else {
    return (url = "http://localhost:3000/api");
  }
};

export const EnvService = {
  envUrl,
};
