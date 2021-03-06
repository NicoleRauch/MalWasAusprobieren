// this script generates a list of radical slugs with an empty array. This is used as the template for filling in the data.
// Should not be needed subsequently.

var radicals = require("./api_radicals.json");
var subradicalInfo = require("./subradicalInfo.js").subradicalInfo;
var fs = require('fs');

const strippedRadicals = radicals.data.map(radical => ({
    level: radical.data.level,
    slug: radical.data.slug,
}));

let orderedRadicals = strippedRadicals.sort((r1, r2) => (r1.level - r2.level) === 0 ?
    (r1.slug < r2.slug ? -1 : 1) : (r1.level - r2.level));


let radicalsString = "const x = {";

orderedRadicals.forEach(radical =>
    radicalsString += '"' + radical.slug + '": [],'
)
radicalsString += "};";

fs.writeFileSync('subradicalInfoTemplate.js', radicalsString, 'utf8');
