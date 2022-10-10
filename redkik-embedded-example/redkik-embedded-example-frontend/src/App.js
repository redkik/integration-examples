import React, { useState, useRef, useEffect } from "react";
import { Formik, Form } from "formik";
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
  H,
} from "./styledComponents";
import logo from "./logo.svg";
import demoData, { addDays } from "./data/demoData";
import { AddressField } from "./components/AddressField";

function joinAddress(
  direction,
  data,
  countries = [],
  states = [],
  addPostcode = false
) {
  return [
    data[`${direction}Street`],
    addPostcode ? data[`${direction}Postcode`] : undefined,
    data[`${direction}City`],
    states?.find((state) => state.id === data[`${direction}State`])?.name, //TODO: Figure out a way to get states
    countries.find((country) => country.id === data[`${direction}Country`])
      ?.name,
  ]
    .filter((x) => x)
    .join(", ");
}

function buildRequest(data, countries, states) {
  return {
    ...data,
    commodities: [
      { commodityId: data.commodityId, insuredValue: data.insuredValue },
    ],
    isPublic: false,
    transportType: "1",
    customerType: "1",
    originFormatted: joinAddress("origin", data, countries, states),
    destinationFormatted: joinAddress("destination", data, countries, states),
    customerFormatted: joinAddress("customer", data, countries, states),
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
  const [getStates, getStatesState] = useGetStatesMutation();
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
  const [purchaseMessage, setPurchaseMessage] = useState("");

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
        buildRequest(
          {
            ...formRef.current.values,
            endDate: fakeEndDate.toISOString().slice(0, 10),
          },
          setupState.data?.countries,
          getStatesState.data
        )
      );
    }
  }, [page, formRef, getOffer, setupState, getStatesState.data]);

  useEffect(() => {
    setup();
  }, [setup]);

  useEffect(() => {
    if (purchaseOfferState.isUninitialized || purchaseOfferState.isLoading) {
      setPurchaseMessage("loading");
    } else if (purchaseOfferState.isSuccess) {
      setPurchaseMessage("success");
    }
  }, [purchaseMessage, setPurchaseMessage, purchaseOfferState]);
  console.log("purchaseMessage", purchaseMessage);

  console.log({ purchaseOfferState });

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
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              if (values.purchaseInsurance) {
                setPage(page + 1);
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
                      <AddressField
                        type="origin"
                        countries={setupState.data?.countries}
                      />
                      <H>To Address</H>
                      <AddressField
                        type="destination"
                        countries={setupState.data?.countries}
                      />
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
                        setupState.data?.commodities
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
                      <AddressField
                        type="customer"
                        countries={setupState.data?.countries}
                      />
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
                        From{" "}
                        <u>
                          {joinAddress(
                            "origin",
                            values,
                            setupState.data?.countries,
                            getStatesState.data,
                            true
                          )}
                        </u>{" "}
                        to{" "}
                        <u>
                          {joinAddress(
                            "destination",
                            values,
                            setupState.data?.countries,
                            getStatesState.data,
                            true
                          )}
                        </u>
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
                <>
                  <Page>
                    <PageContents>
                      <H>Purchase</H>
                      <div>{purchaseMessage}</div>
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
