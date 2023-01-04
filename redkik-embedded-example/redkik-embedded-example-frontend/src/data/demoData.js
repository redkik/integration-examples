export function addDays(date, numberOfDaysToAdd) {
  const result = date.setDate(date.getDate() + numberOfDaysToAdd);
  return new Date(result);
}

const demoData = {
  policyId: "",
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
      commodityId: "",
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
