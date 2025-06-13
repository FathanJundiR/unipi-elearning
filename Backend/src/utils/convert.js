const idToInteger = (data) => {
  for (const key in data) {
    if (key.includes("Id") || key.includes("id")) {
      data[key] = parseInt(data[key]);
    }
  }

  return data;
};

module.exports = { idToInteger };
