import React from 'react'
import { Dropdown } from 'primereact/dropdown'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'

const DropDownComponent = props => {
  // const onChange = (e) => {
  // 	props.onChange(e.value);
  // };

  // const selectedTemplate = (option, props) => {
  // 	if (option) {
  // 		return (
  // 			<div className="category">
  // 				<div>{option.name}</div>
  // 			</div>
  // 		);
  // 	}

  // 	return <span>{props.placeholder}</span>;
  // };

  // const optionTemplate = (option) => {
  // 	return (
  // 		<div className="country-item">
  // 			<div>{option.name}</div>
  // 		</div>
  // 	);
  // };

  return (
    <div>
      <Dropdown
        value={props.value}
        options={props.options}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default DropDownComponent
