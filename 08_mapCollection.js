const map = new Map();

map.set("Height", "6ft");
map.set("Weight", 78);
map.set("name", "Gajanan");
map.set("city", "Pune");
map.set("married_status", true);
console.log(map);


//get
console.log(map.get("name"));

console.log(`Adding duplicate key - name`);
map.set("name", "Gajanan Kharat");
console.log(map);
map.set("country", "Pune");


//table
console.table(map);
console.log(`Map size is: ${map.size}`);



//delete
map.delete("country");
console.table(map);


//has
console.log(`Is key available: ${map.has("name")}`);
console.log(`Is key available: ${map.has("gender")}`);
console.log(map.keys());
console.log(map.values());

//traversing
console.log(`Map traversing...`);
const keys = map.keys();
for (const key of keys) {
  console.log(`${key} ==> ${map.get(key)}`);
}
