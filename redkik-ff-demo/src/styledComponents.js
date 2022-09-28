import React from "react";
import styled from "styled-components";
import { Field } from "formik";

export const Header = styled.header`
  background: rgb(109, 10, 164);
  height: 5rem;
`;

export const H = styled.h2`
  color: #222;
  font-weight: normal;
`;

export const Logo = styled.img`
  height: 3rem;
  margin: 1rem;
`;
export const HeaderButton = styled.button`
  border: none;
  padding: 0.5rem 2rem;
  background: rgb(109, 10, 164);
  text-decoration: underline;
  color: white;
  float: right;
  margin: 1.5rem;
`;

export const WorkArea = styled.div`
  .awssld {
    --control-bullet-color: #666;
    --control-bullet-active-color: #0c8bc1;
    height: calc(100vh - 5rem - 54px);
  }
`;
export const FieldWrapper = styled.div`
  margin-bottom: 0.5rem;

  input:not([type="checkbox"]),
  select {
    box-sizing: border-box;
    padding: 1rem 0.5rem;
    border: 1px solid #ccc;
    width: 28rem;
  }
`;
export const Label = styled.label`
  display: inline-block;
  margin-right: 1rem;
  color: #666;
  width: 10rem;
`;
export const CheckboxLabel = styled.label`
  display: inline-block;
  margin-right: 1rem;
`;

export const Page = styled.div`
  position: relative;
  width: 40rem;
  height: calc(100vh - 5rem - 54px - 8rem);
  background-color: #eeeeee;
  padding: 3rem;
`;

export const PageTitle = styled.div`
  font-weight: bold;
`;

export const PageNavigation = styled.div`
  position: absolute;
  bottom: 1rem;
  width: calc(100% - 6rem);
  display: flex;
  justify-content: space-between;
`;
export const PageNavigationButton = styled.button`
    border: none;
    padding: 0.8rem 2rem;
    /* border-radius: 0.5rem; */
    color: white;
    margin-bottom: 2rem;
    background-color: #0c8bc1;
    font-size: 1.2rem;
}
`;
export const PageSubmitButton = styled(PageNavigationButton)`
  background-color: green;
  color: white;
`;

export function makeCheckbox(name, label) {
  return (
    <FieldWrapper>
      <Field name={name} type={"checkbox"} />
      <CheckboxLabel htmlFor={name}>{label}</CheckboxLabel>
    </FieldWrapper>
  );
}
export function makeField(name, label, type = "text") {
  return (
    <FieldWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Field name={name} type={type} />
    </FieldWrapper>
  );
}
export function makeSelectField(name, label, options) {
  return (
    <FieldWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Field name={name} as="select">
        <option disabled value=""></option>
        {options
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.title}
            </option>
          ))}
      </Field>
    </FieldWrapper>
  );
}

export function createNavigation(page, setPage, isSubmitting) {
  return (
    <PageNavigation>
      {page === 0 ? (
        <div></div>
      ) : (
        <PageNavigationButton
          disabled={isSubmitting}
          onClick={(e) => {
            setPage(page - 1);
            e.preventDefault();
          }}
        >
          Previous
        </PageNavigationButton>
      )}
      {page < 3 ? (
        <PageNavigationButton
          disabled={isSubmitting}
          onClick={(e) => {
            setPage(page + 1);
            e.preventDefault();
          }}
        >
          Next
        </PageNavigationButton>
      ) : (
        <PageSubmitButton type="submit" disabled={isSubmitting}>
          Order
        </PageSubmitButton>
      )}
    </PageNavigation>
  );
}
