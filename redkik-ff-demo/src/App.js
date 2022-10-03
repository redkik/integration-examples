import React, { useState, useRef, useEffect } from "react";
import { Formik, Form } from "formik";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import { useGetOfferMutation, usePurchaseOfferMutation } from "./redkikApi";
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
  H,
} from "./styledComponents";
import logo from "./logo.svg";

import countries from "./data/countries";
import states from "./data/states";
import demoData, { addDays } from "./data/demoData";
import commodityTypes from "./data/commodityTypes";

function joinAddress(direction, data, addPostcode = false) {
  return [
    data[`${direction}Street`],
    addPostcode ? data[`${direction}PostalCode`] : undefined,
    data[`${direction}City`],
    states.find((state) => state.value === data[`${direction}State`])?.title,
    countries.find((country) => country.value === data[`${direction}Country`])
      ?.title,
  ]
    .filter((x) => x)
    .join(", ");
}

function buildRequest(data) {
  return {
    ...data,
    isPublic: false,
    transportType: "1",
    customerType: "1",
    originFormatted: joinAddress("origin", data),
    destinationFormatted: joinAddress("destination", data),
    customerFormatted: joinAddress("customer", data),
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
  const [page, setPage] = useState(0);
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

    startDate: "",
    commodityId: "",
    insuredValue: "",
  });
  const [fakeShippingPrice, setFakeShippingPrice] = useState(0);
  useEffect(() => {
    if (page === 3 && formRef.current) {
      const { startDate } = formRef.current.values;
      const distance = 1200; //getDistance(from, to);
      const fakeEndDate = addDays(
        new Date(startDate),
        Math.ceil(distance / 500000)
      );
      setFakeShippingPrice(distance * 0.01);
      getOffer(
        buildRequest({
          ...formRef.current.values,
          endDate: fakeEndDate.toISOString().slice(0, 10),
        })
      );
    }
  }, [page, formRef, getOffer]);

  return (
    <>
      <Header>
        <Logo src={logo} alt="logo" />
        <HeaderButton
          onClick={() => setSampleData({ ...sampleData, ...demoData[page] })}
        >
          Presentation quick fill
        </HeaderButton>
      </Header>
      <WorkArea>
        <Formik
          innerRef={formRef}
          initialValues={sampleData}
          enableReinitialize
          //  validate={values => {
          //    const errors = {};
          //    if (!values.email) {
          //      errors.email = 'Required';
          //    } else if (
          //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //    ) {
          //      errors.email = 'Invalid email address';
          //    }
          //    return errors;
          //  }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              if (values.purchaseInsurance) {
                purchaseOffer(getOfferState.data[0].id);
              }
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <AwesomeSlider
                buttons={false}
                mobileTouch={false}
                selected={page}
              >
                <>
                  <Page>
                    <PageContents>
                      <H>From Address</H>
                      {makeSelectField("originCountry", "FROM", countries)}
                      {makeField("originStreet", "Address")}
                      {makeField("originPostcode", "Postal code")}
                      {makeField("originCity", "City")}
                      {makeSelectField(
                        "originState",
                        "State",
                        states.filter(
                          (s) => s.countryId === values.originCountry
                        )
                      )}

                      <H>To Address</H>
                      {makeSelectField("destinationCountry", "TO", countries)}
                      {makeField("destinationStreet", "Address")}
                      {makeField("destinationPostcode", "Postal code")}
                      {makeField("destinationCity", "City")}
                      {makeSelectField(
                        "destinationState",
                        "State",
                        states.filter(
                          (s) => s.countryId === values.destinationCountry
                        )
                      )}
                      {createNavigation(page, setPage, isSubmitting)}
                    </PageContents>
                  </Page>
                </>
                <>
                  <Page>
                    <PageContents>
                      <H>Shipping Details</H>
                      {makeField("startDate", "Shipment date", "date")}
                      {makeField("insuredValue", "Value")}
                      {makeSelectField(
                        "commodityId",
                        "Commodity type",
                        commodityTypes
                      )}
                      {createNavigation(page, setPage, isSubmitting)}
                    </PageContents>
                  </Page>
                </>
                <>
                  <Page>
                    <PageContents>
                      <H>Contact Information</H>
                      {makeField("customerOrganization", "Company name")}
                      {makeSelectField("customerCountry", "Country", countries)}
                      {makeField("customerStreet", "Address")}
                      {makeField("customerPostcode", "Postal code")}
                      {makeField("customerCity", "City")}
                      {makeSelectField(
                        "customerState",
                        "State",
                        states.filter(
                          (s) => s.countryId === values.customerCountry
                        )
                      )}
                      {makeField("customerEmail", "Email")}
                      {createNavigation(page, setPage, isSubmitting)}
                    </PageContents>
                  </Page>
                </>
                <>
                  <Page>
                    <PageContents>
                      <H>Shipment:</H>
                      <p>
                        From <u>{joinAddress("origin", values, true)}</u> to{" "}
                        <u>{joinAddress("destination", values, true)}</u>
                      </p>
                      <H>Insurance:</H>
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
              </AwesomeSlider>
            </Form>
          )}
        </Formik>
      </WorkArea>
    </>
  );
}

export default App;
