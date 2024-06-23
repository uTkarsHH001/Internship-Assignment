import { useState } from 'react';
import Input from './Input';
import Summary from './Summary';
import AdditionalQuestion from './AdditionQuestion';

export default function ApplicationForm() {
  
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    surveyTopic: "",
    favoriteProgrammingLanguage: "",
    yearsOfExperience: 0,
    exerciseFrequency: "",
    dietPreference: "",
    highestQualification: "",
    fieldOfStudy: "",
    feedback: ""
  });
  const[errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value} = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name] : ''
    })
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullname) newErrors.fullname = 'Full Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.surveyTopic) newErrors.surveyTopic = 'Please choose a topic';
    if (formData.surveyTopic === 'technology'){ 
      if(!formData.favoriteProgrammingLanguage) newErrors.favoriteProgrammingLanguage = 'Please chosse a language'
      if(!formData.yearsOfExperience || formData.yearsOfExperience <= 0) newErrors.yearsOfExperience = 'Experience is required and must be greater than 0'
      }
    if (formData.surveyTopic === 'health'){ 
      if(!formData.exerciseFrequency) newErrors.exerciseFrequency = 'Please chosse a frequency'
      if(!formData.dietPreference) newErrors.dietPreference = 'Please chosse a diet'
      }
    
    if (formData.surveyTopic === 'education'){ 
      if(!formData.highestQualification) newErrors.highestQualification = 'Please chosse a qualification'
      if(!formData.fieldOfStudy) newErrors.fieldOfStudy = 'Please enter you field of study'
      } 

    if(!formData.feedback) newErrors.feedback = 'Please enter your feedback'

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidate = validate();
    if(isValidate) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <>
        <Summary formData={formData} />
        <AdditionalQuestion />
      </>
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
        <div>
          <label htmlFor="surveyTopic">Select Survey Topic</label>
          <select className='m-2 p-2 rounded-lg' name="surveyTopic" id="surveyTopic" value={formData.surveyTopic} onChange={handleChange}>
            <option value="">Select</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
          </select>
          {errors.surveyTopic !== '' && <p className="text-red-600 text-sm">{errors.surveyTopic}</p>}
        </div>

        {/* Technology Section */}
        {formData.surveyTopic === 'technology' && 
          <>
            <div>
              <label htmlFor="favoriteProgrammingLanguage">Select your favourite programming language</label>
              <select className='m-2 p-2 rounded-lg' name="favoriteProgrammingLanguage" id="favoriteProgrammingLanguage" value={formData.favoriteProgrammingLanguage} onChange={handleChange}>
                <option value="">Select</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="chash">C#</option>
              </select>
              {errors.favoriteProgrammingLanguage !== '' && <p className="text-red-600 text-sm">{errors.favoriteProgrammingLanguage}</p>}
            </div>
            <Input
              name="yearsOfExperience"
              type="number"
              placeholder="Enter your experience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              error={errors.yearsOfExperience}
            />
          </>
        }

        {/* Health Section */}
        {formData.surveyTopic === 'health' && 
          <>
            <div>
              <label htmlFor="exerciseFrequency">Exercise Frequency</label>
              <select className='m-2 p-2 rounded-lg' name="exerciseFrequency" id="exerciseFrequency" value={formData.exerciseFrequency} onChange={handleChange}>
                <option value="">Select</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="rarely">Rarely</option>
              </select>
              {errors.exerciseFrequency !== '' && <p className="text-red-600 text-sm">{errors.exerciseFrequency}</p>}
            </div>
            <div>
              <label htmlFor="dietPreference">Diet Preference</label>
              <select className='m-2 p-2 rounded-lg' name="dietPreference" id="dietPreference" value={formData.dietPreference} onChange={handleChange}>
                <option value="">Select</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="non-vegetarian">Non-Vegetarian</option>
              </select>
              {errors.dietPreference !== '' && <p className="text-red-600 text-sm">{errors.dietPreference}</p>}
            </div>
          </>
        }

        {/* Education Section */}
        {formData.surveyTopic === 'education' &&
          <>
            <div>
              <label htmlFor="highestQualification">Highest Qualification</label>
              <select className='m-2 p-2 rounded-lg' name="highestQualification" id="highestQualification" value={formData.highestQualification} onChange={handleChange}>
                <option value="">Select</option>
                <option value="highSchool">High School</option>
                <option value="bachelors">Bachelo&apos;s</option>
                <option value="masters">Master&apos;s</option>
                <option value="phd">PhD</option>
              </select>
              {errors.highestQualification !== '' && <p className="text-red-600 text-sm">{errors.highestQualification}</p>}
            </div>
            <Input
              name="fieldOfStudy"
              type="text"
              placeholder="Enter your field of study"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              error={errors.fieldOfStudy}
            />
          </>
        }
        
        <textarea
          name="feedback"
          type="text"
          placeholder="Feedback..."
          value={formData.feedback}
          onChange={handleChange}
          className='border-2 border-slate-100 rounded-lg p-2 w-full h-28 mt-3'
        />
        {errors.surveyTopic !== '' && <p className="text-red-600 text-sm">{errors.feedback}</p>}


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
