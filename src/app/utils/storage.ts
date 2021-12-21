export const loadSearchValues = () => {
  const item = localStorage.getItem("searchValues");

  if (!item) return [];
  return JSON.parse(item);
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export const saveSearchValues = (value: string) => {
  let updatedValues = loadSearchValues() || ([] as string[]);
  const valueIndex = updatedValues.indexOf(value);

  if (valueIndex !== 1 && value) {
    if (updatedValues.length === 5) {
      updatedValues.shift();
    }
    updatedValues.push(value);
    localStorage.setItem(
      "searchValues",
      JSON.stringify(updatedValues.filter(onlyUnique))
    );
  }
};
