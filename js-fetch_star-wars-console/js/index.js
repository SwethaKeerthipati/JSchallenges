console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);

    const data = await response.json();
    console.log("Data from url is :", data);
    console.log("Count of the data:", data.count);
    console.log("Results is :", data.results);
    const result = data.results;
    console.log(result[7].eye_color);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
  //const r2d2 = data.results.includes("R2-D2")
}

fetchData();
