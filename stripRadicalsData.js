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
