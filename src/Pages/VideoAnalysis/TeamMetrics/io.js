const getSummedItems = (data) => {
  if(!data) return []
  const result = data.map((item) => {
    const sum = item.reduce((a, b) => a + b, 0);

    return sum;
  });

  return result;
};



export default getSummedItems
