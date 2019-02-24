// This script is used to merge and condense the information that comes from the Api with the subradical info that was gathered manually.
// The resulting array is written to a file and must be included in the userscript.
// Needs to be run (and included) whenever something changes in the Api data for the radicals or in the subradical info file.

var radicals = require("./api_radicals.json");
var subradicalInfo = require("./subradicalInfo.js").subradicalInfo;
var fs = require('fs');

const strippedRadicals = radicals.data.map(radical => ({
    id: radical.id,
    level: radical.data.level,
    slug: radical.data.slug,
    characters: radical.data.characters,
    character_images: radical.data.characters ? [] : radical.data.character_images,
    subradicals: subradicalInfo[radical.data.slug] || []
}));

let orderedRadicals = strippedRadicals.sort((r1, r2) => (r1.level - r2.level) === 0 ?
    (r1.slug < r2.slug ? -1 : 1) : (r1.level - r2.level));

fs.writeFileSync('radicals.json', JSON.stringify(orderedRadicals), 'utf8');
