export const sortSimpsons = (simpsons, sortSelection) => {
  let sorted = [...simpsons];
  switch (sortSelection) {
    case "A-Z":
      sorted = sorted.sort((a, b) => {
        if (a.character < b.character) {
          return -1;
        } else {
          return 1;
        }
      });
      break;
    case "Z-A":
      sorted = sorted.sort((a, b) => {
        if (a.character > b.character) {
          return -1;
        } else {
          return 1;
        }
      });
      break;
    case "liked":
      sorted = sorted.sort((a) => {
        if (a.liked) {
          return -1;
        } else {
          return 1;
        }
      });
      break;
  }
  return sorted;
};
