//Separates each Google Maps place into its own object
const output = [];

for (const item of $input.all()) {
  const places = item.json.places || [];

  for (const place of places) {
    output.push({
      json: place,
    });
  }
}

return output;
