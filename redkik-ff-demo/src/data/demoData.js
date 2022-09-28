export function addDays(date, numberOfDaysToAdd) {
  const result = date.setDate(date.getDate() + numberOfDaysToAdd);
  return new Date(result);
}

const demoData = [
  {
    originCountry: "a0fbbabe-26cd-47e5-b9ad-88b72f06ac45",
    originStreet: "Länsikatu 15",
    originPostcode: "80110",
    originCity: "Joensuu",
    originState: "Pohjois-Karjala",
    //originState: "7934909b-3cf4-4256-882f-e262cb177473", //WRONG
    destinationCountry: "321d7c76-2234-415a-878b-7768d9ceecdd",
    destinationStreet: "202 Bank St.",
    destinationPostcode: "21654",
    destinationCity: "Oxford",
    destinationState: "MD",
    //destinationState: "7934909b-3cf4-4256-882f-e262cb177473",
  },
  {
    startDate: addDays(new Date(), 7).toISOString().slice(0, 10),
    commodityId: "010",
    insuredValue: 100000,
  },
  {
    customerEmail: "antti.vikman@redkik.com", //CHANGE TO PRESENTATION ACCOUNT
    customerOrganization: "Redkik",
    customerStreet: "Länsikatu 15",
    customerCity: "Joensuu",
    customerState: "Pohjois-Karjala",
    //customerState: "7934909b-3cf4-4256-882f-e262cb177473", //WRONG
    customerPostcode: "80110",
    customerCountry: "a0fbbabe-26cd-47e5-b9ad-88b72f06ac45",
  },
];
export default demoData;
