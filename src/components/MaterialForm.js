import React from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  RadioGroup,
  InputLabel,
  FormControl,
  Radio,
  Button,
  Box,
} from "@mui/material";
import * as Yup from "yup";

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "Ind", label: "India" },
];

const hobbies = [
  { value: "reading", label: "Reading" },
  { value: "gaming", label: "Gaming" },
  { value: "sports", label: "Sports" },
  { value: "dancing", label: "Dance" },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  gender: Yup.string().required("Gender is required"),
  interests: Yup.array().required("Interests are required"),
});

const initialValues = {
  name: "",
  address: "",
  country: "",
  gender: "",
  interests: [],
};

const handleSubmit = (values) => {
  console.log(values);
};

const MaterialForm = () => {
  return (
    <div className="MaterialForm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field as={TextField} label="Name" name="name" error />
          <Box height={14} />
          <Field
            as={TextField}
            label="Address"
            name="address"
            multiline
            rows={4}
            error
          />
          <Box height={14} />
          <FormControl error>
            <InputLabel>Country</InputLabel>
            <Field as={Select} name="country">
              <MenuItem value="">
                <em>Select Country</em>
              </MenuItem>
              {countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
          <Box height={16} />

          <FormControl label="Gender" error>
            <Field as={RadioGroup} name="gender">
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </Field>
          </FormControl>

          <Box height={16} />
          <FormControl error>
            <InputLabel>Interest</InputLabel>
            <Field as={Select} multiple name="interests">
              {hobbies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
          <Box height={16} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default MaterialForm;
