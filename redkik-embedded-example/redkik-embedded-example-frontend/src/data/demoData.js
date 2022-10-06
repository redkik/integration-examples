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
    originState: "FI_13",
    destinationCountry: "FI",
    destinationStreet: "Mannerheimintie 3",
    destinationPostcode: "00100",
    destinationCity: "Helsinki",
    destinationState: "FI_18",
  },
  {
    startDate: addDays(new Date(), 7).toISOString().slice(0, 10),
    commodityId: "72568ce6-3d12-4a0b-b05d-f2ab282c1589",
    insuredValue: 1000,
  },
  {
    customerEmail: "customer@example.com",
    customerOrganization: "Redkik",
    customerStreet: "Länsikatu 15",
    customerCity: "Joensuu",
    customerState: "FI_13",
    customerPostcode: "80110",
    customerCountry: "FI",
  },
];
export default demoData;
