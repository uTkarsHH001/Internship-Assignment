import { useState } from 'react';
import Input from './Input';

export default function EventRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.age <= 0) {
      alert('Age must be a number greater than 0')
    }
    else{
      setSubmitted(true)
    }  
  }

  if (submitted) {
    return (
      <div className="summary">
        <h2>Summary</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Attending with Guest:</strong> {formData.attendingWithGuest}</p>
        {formData.attendingWithGuest === 'Yes' && (
          <p><strong>Guest Name:</strong> {formData.guestName}</p>
        )}
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-2/5">
        <Input
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          name="age"
          type="number"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
        />
        <div className="mt-4">
          <label>Are you attending with a guest?</label>
          <div>
            <input
              id="attendingWithGuestYes"
              type="radio"
              name="attendingWithGuest"
              value="Yes"
              checked={formData.attendingWithGuest === 'Yes'}
              onChange={handleChange}
            />
            <label htmlFor="attendingWithGuestYes">Yes</label>
            <br />
            <input
              id="attendingWithGuestNo"
              type="radio"
              name="attendingWithGuest"
              value="No"
              checked={formData.attendingWithGuest === 'No'}
              onChange={handleChange}
            />
            <label htmlFor="attendingWithGuestNo">No</label>
          </div>
        </div>

        {formData.attendingWithGuest === 'Yes' && (
          <Input
            name="guestName"
            type="text"
            placeholder="Enter your guest's name"
            value={formData.guestName}
            onChange={handleChange}
          />
        )}

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
