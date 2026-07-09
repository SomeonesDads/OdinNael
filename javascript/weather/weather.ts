const form = document.getElementById("input") as HTMLFormElement;
const locinput = document.getElementById("location") as HTMLInputElement;
const key = "TX9GLLPLXKGZ7AN3JKP8ZUVC2";
const output = document.getElementById("output")?.firstChild as HTMLFieldSetElement;

form.addEventListener("submit", async e => {
    e.preventDefault();
    const loc = locinput.value;
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?key=${key}`);
    const res = await response.json();
    output.textContent = JSON.stringify(res, null, 2);
})