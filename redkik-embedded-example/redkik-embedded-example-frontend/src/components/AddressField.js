import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import { makeSelectField, makeField } from "../styledComponents";
import { useGetStatesMutation } from "../redkikApi";

export function AddressField({ type, countries, setSelectedStateName }) {
  const { values } = useFormikContext();
  const [getStates, getStatesState] = useGetStatesMutation();

  const selectedCountry = values[`${type}Country`];

  useEffect(() => {
    if (selectedCountry) {
      getStates(selectedCountry);
    }
  }, [selectedCountry, getStates]);

  const selectedState = values[`${type}State`];
  useEffect(() => {
    if (selectedState) {
      const stateName = getStatesState.data?.find(
        (state) => state.id === selectedState
      )?.name;
      setSelectedStateName(stateName);
    }
  }, [values, setSelectedStateName, getStatesState.data, selectedState]);

  return (
    <>
      {makeSelectField(`${type}Country`, "Country", countries)}
      {makeField(`${type}Street`, "Street Address")}
      {makeField(`${type}Postcode`, "Postal code")}
      {makeField(`${type}City`, "City")}
      {makeSelectField(`${type}State`, "State", getStatesState.data)}
    </>
  );
}
