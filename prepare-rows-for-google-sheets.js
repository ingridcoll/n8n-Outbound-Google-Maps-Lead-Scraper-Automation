//Get state or states from Google Sheets
const states = $('When Executed by Another Workflow').first().json?.states.split(',').map(s => s.trim());

//Build row object and exclude out-of-state places
const allPlaces = [];
for (const item of $input.all()) {
  const address = item.json?.address?.toLowerCase() || '';
  
  //Check if address contains any of the state codes
  const matchesState = states.some(state => address.includes(state.toLowerCase()));
  
  if (matchesState) {
    allPlaces.push({
      Name: item.json.title || '',
      Website: item.json.website || '',
      Category: item.json.category || '',
      Phone: item.json.phoneNumber || '',
      Address: item.json.address || '',
      Rating: item.json.rating || '',
      NumberOfRatings: item.json.ratingCount || '',
      Source: 'Google Maps',
      //UID is used to update existing rows if needed, instead of append
      UID: item.json.title + item.json.address
    });
  }
}

return allPlaces.map(row => ({ json: row }));
