import PropTypes from 'prop-types';

export default function Input({name, type, placeholder, value, onChange, error}){

    return(
        <>
            <input className={`border block w-full rounded-md p-2 mt-4 ${error ? `border-red-500` : ``}`} 
                   type={type} 
                   name={name} 
                   placeholder={placeholder} 
                   value={value} 
                   onChange={onChange} 
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
        </>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'number', 'password','datetime-local']).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
  };
  
  Input.defaultProps = {
    placeholder: ''
  };