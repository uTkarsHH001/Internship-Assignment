import PropTypes from 'prop-types';

export default function Summary({ formData }) {
    return (
        <div className="summary">
            <h2>Summary</h2>
            <p><strong>Fullname:</strong> {formData.fullname}</p>
            <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
            <p><strong>Position:</strong> {formData.position}</p>
            {formData.experience !== '' && <p><strong>Experience:</strong> {formData.experience}</p>}
            {formData.portfolio !== '' && <p><strong>Portfolio:</strong> {formData.portfolio}</p>}
            {formData.managementExperience !== '' && <p><strong>Management Experience:</strong> {formData.managementExperience}</p>}
            <p><strong>Addition Skills:</strong> {formData.additionalSkills}</p>
            <p><strong>Interview Time:</strong> {formData.interviewTime}</p>
        </div>
    );
}

Summary.propTypes = {
    formData: PropTypes.shape({
        fullname: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        experience: PropTypes.string,
        portfolio: PropTypes.string,
        managementExperience: PropTypes.string,
        additionalSkills: PropTypes.string.isRequired,
        interviewTime: PropTypes.string.isRequired,
    }).isRequired,
};
