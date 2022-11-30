import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, FieldArray } from "formik";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import {
  useGetOfferMutation,
  usePurchaseOfferMutation,
  useSetupMutation,
  useGetStatesMutation,
} from "./redkikApi";
import {
  Header,
  Logo,
  HeaderButton,
  WorkArea,
  Page,
  makeSelectField,
  makeField,
  makeCheckbox,
  createNavigation,
  PageContents,
  H2,
  FieldArrayButton,
} from "./styledComponents";
import logo from "./logo.svg";
import demoData, { addDays } from "./data/demoData";
import { AddressField } from "./components/AddressField";

function joinAddress(
  direction,
  data,
  countries = [],
  state,
  addPostcode = false
) {
  return [
    data[`${direction}Street`],
    addPostcode ? data[`${direction}Postcode`] : undefined,
    data[`${direction}City`],
    state,
    countries.find((country) => country.id === data[`${direction}Country`])
      ?.name,
  ]
    .filter((x) => x)
    .join(", ");
}

function buildRequest(
  data,
  countries,
  originState,
  destinationState,
  customerState
) {
  return {
    ...data,
    commodities: data.commodities,
    isPublic: false,
    transportType: "1",
    customerType: "1",
    originFormatted: joinAddress("origin", data, countries, originState),
    destinationFormatted: joinAddress(
      "destination",
      data,
      countries,
      destinationState
    ),
    customerFormatted: joinAddress("customer", data, countries, customerState),
  };
}

function renderOffer(offer) {
  return !offer.accepted ? (
    <div>
      We are unable to insure the shipment because:{" "}
      {offer.amendments.join(", ")}
    </div>
  ) : (
    <div>
      {makeCheckbox(
        "purchaseInsurance",
        `Add insurance with price of €${(
          offer.totalCost / offer.currencyDivisionModifier
        ).toFixed(offer.currencyDecimalPlaces)}`
      )}
    </div>
  );
}

function App() {
  const formRef = useRef();
  const [getOffer, getOfferState] = useGetOfferMutation();
  const [purchaseOffer, purchaseOfferState] = usePurchaseOfferMutation();
  const [setup, setupState] = useSetupMutation();
  const [page, setPage] = useState(0);
  const [getStates, getStatesState] = useGetStatesMutation({});
  let date = new Date();
  const [sampleData, setSampleData] = useState({
    originStreet: "",
    originPostcode: "",
    originCity: "",
    originState: "",
    originCountry: "",

    destinationStreet: "",
    destinationPostcode: "",
    destinationCity: "",
    destinationState: "",
    destinationCountry: "",

    customerOrganization: "",
    customerEmail: "",
    customerStreet: "",
    customerPostcode: "",
    customerCity: "",
    customerState: "",
    customerCountry: "",

    startDate: date.toISOString().split("T")[0],
    commodities: [{ commodityId: "", insuredValue: "", currencyId: "" }],
  });
  const [fakeShippingPrice, setFakeShippingPrice] = useState(0);
  const [purchaseMessage, setPurchaseMessage] = useState("");
  const [originState, setOriginState] = useState("");
  const [destinationState, setDestinationState] = useState("");
  const [customerState, setCustomerState] = useState("");

  useEffect(() => {
    if (page === 3 && formRef.current) {
      const { startDate } = formRef.current.values;
      const distance = 1200;
      const fakeEndDate = addDays(
        new Date(startDate),
        Math.ceil(distance / 500000)
      );
      setFakeShippingPrice(distance * 0.01);
      getOffer(
        buildRequest(
          {
            ...formRef.current.values,
            endDate: fakeEndDate.toISOString().slice(0, 10),
          },
          setupState.data?.countries,
          originState,
          destinationState,
          customerState
        )
      );
    }
  }, [
    page,
    formRef,
    getOffer,
    setupState,
    getStatesState.data,
    originState,
    destinationState,
    customerState,
  ]);

  useEffect(() => {
    setup();
  }, [setup]);

  useEffect(() => {
    if (purchaseOfferState.isUninitialized || purchaseOfferState.isLoading) {
      setPurchaseMessage("Loading...");
    } else if (purchaseOfferState.isSuccess) {
      setPurchaseMessage(
        "Purchase successful! An email has been sent regarding your purchase."
      );
    } else {
      setPurchaseMessage(`Error: ${purchaseOfferState.error.data.message}`);
    }
  }, [purchaseMessage, setPurchaseMessage, purchaseOfferState]);

  return (
    <>
      <Header>
        <Logo src={logo} alt="logo" />
        <HeaderButton onClick={() => setSampleData(demoData)}>
          Quick fill
        </HeaderButton>
      </Header>
      <WorkArea>
        <Formik
          innerRef={formRef}
          initialValues={sampleData}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            if (values.purchaseInsurance) {
              purchaseOffer(getOfferState.data[0].id);
              setTimeout(() => {
                setPage(page + 1);
              }, 400);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values }) => {
            return (
              <Form>
                <AwesomeSlider
                  buttons={false}
                  mobileTouch={false}
                  selected={page}
                >
                  <>
                    <Page>
                      <PageContents>
                        <H2>From Address</H2>
                        <AddressField
                          type="origin"
                          countries={setupState.data?.countries}
                          setSelectedStateName={setOriginState}
                        />
                        <H2>To Address</H2>
                        <AddressField
                          type="destination"
                          countries={setupState.data?.countries}
                          setSelectedStateName={setDestinationState}
                        />
                        {createNavigation(page, setPage, isSubmitting)}
                      </PageContents>
                    </Page>
                  </>
                  <>
                    <Page>
                      <PageContents>
                        <H2>Shipping Details</H2>
                        {makeField("startDate", "Shipment date", "date")}
                        <H2>Commodities</H2>
                        <FieldArray
                          name="commodities"
                          render={(arrayHelpers) => (
                            <div>
                              {values.commodities.map((commodity, index) => (
                                <div key={index}>
                                  {makeField(
                                    `commodities[${index}].insuredValue`,
                                    "Value"
                                  )}
                                  {makeSelectField(
                                    `commodities[${index}].commodityId`,
                                    "Commodity type",
                                    setupState.data?.commodities
                                  )}
                                  {makeSelectField(
                                    `commodities[${index}].currencyId`,
                                    "Currency",
                                    setupState.data?.currencies
                                  )}
                                  <FieldArrayButton
                                    color="red"
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    Remove
                                  </FieldArrayButton>
                                </div>
                              ))}
                              <FieldArrayButton
                                type="button"
                                color="green"
                                onClick={() =>
                                  arrayHelpers.push({
                                    commodityId: "",
                                    insuredValue: "",
                                    currencyId: "",
                                  })
                                }
                              >
                                Add
                              </FieldArrayButton>
                            </div>
                          )}
                        />
                        {createNavigation(page, setPage, isSubmitting)}
                      </PageContents>
                    </Page>
                  </>
                  <>
                    <Page>
                      <PageContents>
                        <H2>Contact Information</H2>
                        {makeField("customerOrganization", "Company name")}
                        <AddressField
                          type="customer"
                          countries={setupState.data?.countries}
                          setSelectedStateName={setCustomerState}
                        />
                        {makeField("customerEmail", "Email")}
                        {createNavigation(page, setPage, isSubmitting)}
                      </PageContents>
                    </Page>
                  </>
                  <>
                    <Page>
                      <PageContents>
                        <H2>Shipment:</H2>
                        <p>
                          From{" "}
                          <u>
                            {joinAddress(
                              "origin",
                              values,
                              setupState.data?.countries,
                              originState,
                              true
                            )}
                          </u>{" "}
                          to{" "}
                          <u>
                            {joinAddress(
                              "destination",
                              values,
                              setupState.data?.countries,
                              destinationState,
                              true
                            )}
                          </u>
                        </p>
                        <H2>Insurance:</H2>
                        <div>
                          {getOfferState.isUninitialized ||
                          getOfferState.isLoading ? (
                            <div>Loading...</div>
                          ) : getOfferState.isSuccess ? (
                            renderOffer(getOfferState.data[0])
                          ) : (
                            <div>{getOfferState.error.data.message}</div>
                          )}
                        </div>
                        {createNavigation(page, setPage, isSubmitting)}
                      </PageContents>
                    </Page>
                  </>
                  <>
                    <Page>
                      <PageContents>
                        <H2>Purchase</H2>
                        <div>{purchaseMessage}</div>
                        {createNavigation(page, setPage, isSubmitting)}
                      </PageContents>
                    </Page>
                  </>
                </AwesomeSlider>
              </Form>
            );
          }}
        </Formik>
      </WorkArea>
    </>
  );
}

export default App;
