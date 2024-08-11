import React, { useEffect, useState } from 'react';

const Users = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [contactData, setContactData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true);

  // Fetch contact data when the component mounts
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch('http://localhost:3000/ContactData');
        if (response.ok) {
          const data = await response.json();
          setContactData(data);
        } else {
          setSubmissionStatus('Failed to fetch contact data.');
        }
      } catch (error) {
        console.error('Error fetching contact data:', error);
        setSubmissionStatus('An error occurred while fetching contact data.');
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.message) formErrors.message = 'Message is required';
    if (!formData.phone) formErrors.phone = 'Phone is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch('http://localhost:3000/ContactData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          setSubmissionStatus('Form submitted successfully!');
          setFormData({ name: '', email: '', message: '', phone: '' });
          setErrors({});
          setContactData((prevData) => [...prevData, data]); // Update contact data with the new entry
        } else {
          const errorData = await response.json();
          setSubmissionStatus(`Failed to submit form: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        setSubmissionStatus('An error occurred while submitting the form.');
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
          {errors.phone && <p className="text-danger">{errors.phone}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          ></textarea>
          {errors.message && <p className="text-danger">{errors.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {submissionStatus && <p className="mt-3">{submissionStatus}</p>}
      <h3 className="mt-4">Contact Data</h3>
      {loading ? (
        <p>Loading contact data...</p>
      ) : contactData.length === 0 ? (
        <p>No contact data found.</p>
      ) : (
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
                <td>{entry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
