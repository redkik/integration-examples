export function addDays(date, numberOfDaysToAdd) {
  const result = date.setDate(date.getDate() + numberOfDaysToAdd);
  return new Date(result);
}

const demoData = {
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
  startDate: addDays(new Date(), 7).toISOString().slice(0, 10),
  commodities: [
    {
      commodityId: "3eeada1d-ab9b-4f39-80a5-d4ff9f89614b",
      insuredValue: 100,
      currencyId: "USD",
    },
  ],
  customerEmail: "customer@example.com",
  customerOrganization: "Redkik",
  customerStreet: "Länsikatu 15",
  customerCity: "Joensuu",
  customerState: "FI_13",
  customerPostcode: "80110",
  customerCountry: "FI",
};
export default demoData;
