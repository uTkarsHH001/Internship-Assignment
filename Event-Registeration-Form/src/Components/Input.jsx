import PropTypes from 'prop-types';

export default function Input({name, type, placeholder, value, onChange}){

    return(
        <>
            <input className={`border block w-full rounded-md p-2 mt-4`} 
                   type={type} 
                   name={name} 
                   placeholder={placeholder} 
                   value={value} 
                   onChange={onChange} 
                   required
            />
        </>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'number', 'password']).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
  Input.defaultProps = {
    placeholder: ''
  };