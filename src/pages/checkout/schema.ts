import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup.string().required("Required field"),
    email: yup
      .string()
      .email("Please provide valid email address")
      .required("Required field"),
    additionalNotes: yup
      .string()
      .notRequired()
      .test("additionalNotes", "Minimum of 2 characters", function (value) {
        if (!!value) {
          const schema = yup.string().min(2);
          return schema.isValidSync(value);
        }
        return true;
      }),
  });