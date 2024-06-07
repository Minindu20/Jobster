import Logo from "./Logo";

const FormRow = ({type,name,value,handleChange,labelText}) => {
  return (
    <div className='form-row'>
    <label htmlFor={name} className='form-label'>
       {name}
    </label>
    <input
    type={type}
    name={name}
    values={value}
    onChange={handleChange}
    className='form-input'
    />
   </div>
  )
}

export default FormRow