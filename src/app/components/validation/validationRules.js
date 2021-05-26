const Validate = (values) => {
  let errors = {};
  console.log(window.location.pathname);
  if (values.name !== null && values.name !== undefined) {
    if (values.name === "") {
      errors.name = "Name is required";
    }
  }

  if (values.email !== null && values.email !== undefined) {
    if (values.email === "") {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  }

  if (
    values.password !== undefined &&
    values.password !== null
    // &&
    // values.password.length !== 0
  ) {
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 or more characters";
    }
  }
  // console.log(values.genderSelection);
  // console.log(values.age);

  if (
    values.confirmPassword !== undefined &&
    values.confirmPassword !== null
    // &&
    // values.confirmPassword.length !== 0
  ) {
    if (!values.confirmPassword) {
      errors.confirmPassword = "confirmation of password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "password is not same as the above";
    }
  }

  // For validations to be only done on triage Page
  if (window.location.pathname.split("/").includes("triagePage")) {
    if (values.age !== undefined && values.age !== null) {
      if (!values.age) {
        errors.age = "ageValidation";
      }
    }

    if (
      values.genderSelection !== undefined &&
      values.genderSelection !== null
    ) {
      if (!values.genderSelection) {
        errors.genderSelection = "genderValidation";
      }
    }
  }

  return errors;
};
export default Validate;
