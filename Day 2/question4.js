let country = ["Indonesia", "India", "United Kingdom", "France", "Chech", "Saudi Arabia", "Egypt", "Swiss"];
let search;
for (let i = 0; i < country.length; i++) {
    search = country[i].search('a');
    if (search >= 0) {
        console.log(country[i]);
        document.write(country[i]);
    }
}