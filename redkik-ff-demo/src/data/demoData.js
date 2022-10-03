export function addDays(date, numberOfDaysToAdd) {
  const result = date.setDate(date.getDate() + numberOfDaysToAdd);
  return new Date(result);
}

const demoData = [
  {
    originCountry: "FI",
    originStreet: "Länsikatu 15",
    originPostcode: "80110",
    originCity: "Joensuu",
    originState: "14f7f3b8-7479-4226-9543-d08bd4003a47", //TODO: Update when state id changed
    destinationCountry: "FI",
    destinationStreet: "Mannerheimintie 3",
    destinationPostcode: "00100",
    destinationCity: "Helsinki",
    destinationState: "d4b00618-8cc2-4e50-8234-eb5a64d6db73", //TODO: Update when state id changed
  },
  {
    startDate: addDays(new Date(), 7).toISOString().slice(0, 10),
    commodityId: "72568ce6-3d12-4a0b-b05d-f2ab282c1589",
    insuredValue: 1000,
  },
  {
    customerEmail: "customer@example.com", //CHANGE TO PRESENTATION ACCOUNT
    customerOrganization: "Redkik",
    customerStreet: "Länsikatu 15",
    customerCity: "Joensuu",
    customerState: "14f7f3b8-7479-4226-9543-d08bd4003a47", //TODO: Update when state id changed
    customerPostcode: "80110",
    customerCountry: "FI",
  },
];
export default demoData;
