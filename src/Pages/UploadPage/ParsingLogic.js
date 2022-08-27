import Papa from "papaparse";

export const changeHandler = (event) => {
  Papa.parse(event.target.files[0], {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      console.log(results.data);
    },
  });
};
