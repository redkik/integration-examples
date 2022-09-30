export function addDays(date, numberOfDaysToAdd) {
  const result = date.setDate(date.getDate() + numberOfDaysToAdd);
  return new Date(result);
}

const demoData = [
  {
    originCountry: "eecc86cd-d3fc-4f23-b3de-e30a04ad33d6",
    originStreet: "Länsikatu 15",
    originPostcode: "80110",
    originCity: "Joensuu",
    // originState: "Pohjois-Karjala",
    originState: "14f7f3b8-7479-4226-9543-d08bd4003a47",
    destinationCountry: "eecc86cd-d3fc-4f23-b3de-e30a04ad33d6",
    destinationStreet: "Länsikatu 15",
    destinationPostcode: "70820",
    destinationCity: "Kuopio",
    // destinationState: "MD",
    destinationState: "8ad84e18-8309-4830-85eb-b89e74f0362c",
  },
  {
    startDate: addDays(new Date(), 7).toISOString().slice(0, 10),
    commodityId: "72568ce6-3d12-4a0b-b05d-f2ab282c1589",
    insuredValue: 1000,
  },
  {
    customerEmail: "anni.monttinen@nolwenture.com", //CHANGE TO PRESENTATION ACCOUNT
    customerOrganization: "Redkik",
    customerStreet: "Länsikatu 15",
    customerCity: "Joensuu",
    //customerState: "Pohjois-Karjala",
    customerState: "14f7f3b8-7479-4226-9543-d08bd4003a47",
    customerPostcode: "80110",
    customerCountry: "eecc86cd-d3fc-4f23-b3de-e30a04ad33d6",
  },
];
export default demoData;
