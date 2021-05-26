import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useForm = (callback, validate, loginUser) => {
	const history = useHistory();
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		type: "password",
		type1: "password",
		age: "",
		genderSelection: "",
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (Object.keys(errors) === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	const handleSubmit = (event, link) => {
		if (event) event.preventDefault();
		history.push(link);
	};

	const handleSubmitEdit = (event, setEdit) => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
		// console.log(validate(values));
		if (Object.keys(validate(values)).length <= 0) setEdit(() => false);
	};

	const handleChange = (value, name) => {
		console.log(value, "value");
		setValues((values) => ({ ...values, [name]: value }));
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
		setValues,
		handleSubmitEdit,
	};
};

export default useForm;
