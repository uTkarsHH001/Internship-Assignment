import { useState } from 'react';
import Input from './Input';
import Summary from './Summary';

export default function ApplicationForm() {
  
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    position: '',
    experience: '',
    portfolio: '',
    managementExperience: '',
    additionalSkills: [],
    interviewTime: '',
  });
  const[errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if(type === 'checkbox'){
      if(checked){
        setFormData((prev) => ({
          ...prev,
          additionalSkills: [...prev.additionalSkills, value]
        }))
      }
      else{
        setFormData((prev) => ({
          ...prev,
          additionalSkills: prev.additionalSkills.filter(skill => skill !== value)
        }))
      }
    }
    else{
      setFormData({
        ...formData,
        [name]: value
      });
    }
    setErrors({
      ...errors,
      [name] : ''
    })
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullname) newErrors.fullname = 'Full Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.phoneNumber || isNaN(formData.phoneNumber)) newErrors.phoneNumber = 'Valid Phone Number is required';
    if (!formData.position) newErrors.position = 'Please choose a position';
    if (formData.position === ('developer' || 'designer')){ if(!formData.experience || formData.experience <= 0){newErrors.experience = 'Relevant Experience is required and must be greater than 0'}}
    if (formData.position === 'designer' && (!formData.portfolio || !/^https?:\/\/.*\..*/.test(formData.portfolio))) newErrors.portfolio = 'Valid Portfolio URL is required'
    if ((formData.position === 'manager' && (!formData.managementExperience || formData.managementExperience <= 0))) newErrors.managementExperience = 'Management Experience is required and must be greater than 0'
    if (formData.additionalSkills.length === 0) newErrors.additionalSkills = 'At least one skill must be selected';
    if (!formData.interviewTime) newErrors.interviewTime = 'Preferred Interview Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidate = validate();
    console.log(errors)
    console.log(isValidate)
    if(isValidate) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <Summary formData={formData} />
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-2/5">
        <Input
          name="fullname"
          type="text"
          placeholder="Enter your Full name"
          value={formData.fullname}
          onChange={handleChange}
          error={errors.fullname}
        />
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          name="phoneNumber"
          type="text"
          placeholder="Enter your Phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
        />
        <div>
          <label htmlFor="position">Select Position</label>
          <select name="position" id="position" value={formData.position} onChange={handleChange}>
            <option value="">Select</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
          {errors.position !== '' && <p className="text-red-600 text-sm">{errors.position}</p>}
        </div>
        {(formData.position === 'developer' || formData.position === 'designer') &&
          <Input
          name="experience"
          type="number"
          placeholder="Enter your experience"
          value={formData.experience}
          onChange={handleChange}
          error={errors.experience}
          />
        }
        {(formData.position === 'designer') &&
          <Input
          name="portfolio"
          type="text"
          placeholder="Enter your portfolio URL"
          value={formData.portfolio}
          onChange={handleChange}
          error={errors.portfolio}
          />
        }
        {(formData.position === 'manager') &&
          <Input
          name="managementExperience"
          type="number"
          placeholder="Enter your Management Experience"
          value={formData.managementExperience}
          onChange={handleChange}
          error={errors.managementExperience}
          />
        }
        <div className="mt-4">
          <label>Additional Skills:</label>
          <div>
            <input
              type="checkbox"
              name="JavaScript"
              value="JavaScript"
              checked={formData.additionalSkills.includes("JavaScript")}
              onChange={handleChange}
            />
            &nbsp;JavaScript
            <br />
            <input
              type="checkbox"
              name="CSS"
              value="CSS"
              checked={formData.additionalSkills.includes("CSS")}
              onChange={handleChange}
            />
            &nbsp;CSS
            <br />
            <input
              type="checkbox"
              name="Python"
              value="Python"
              checked={formData.additionalSkills.includes("Python")}
              onChange={handleChange}
            />
            &nbsp;Python
            <br />
            {errors.additionalSkills !== '' && <p className="text-red-600 text-sm">{errors.additionalSkills}</p>}
          </div>
          
        </div>
        <Input
          name="interviewTime"
          type="datetime-local"
          placeholder="Preferred Interview Time"
          value={formData.interviewTime}
          onChange={handleChange}
          error={errors.interviewTime}
        />

        <button
          className="w-full bg-slate-200 p-3 rounded-lg mt-3 hover:bg-slate-400"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
