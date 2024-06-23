import PropTypes from 'prop-types';

export default function Summary({ formData }) {
    return (
        <div className="summary">
            <h2 className='bold-thinner text-3xl text-center my-5'>Summary</h2>
            <p><strong>Fullname:</strong> {formData.fullname}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Survey Topic:</strong> {formData.surveyTopic}</p>
            {formData.favoriteProgrammingLanguage !== '' && <p><strong>Favourite Language:</strong> {formData.favoriteProgrammingLanguage}</p>}
            {formData.yearsOfExperience !== '' && <p><strong>Experience:</strong> {formData.yearsOfExperience}</p>}
            {formData.exerciseFrequency !== '' && <p><strong>Exercise Frequency</strong> {formData.exerciseFrequency}</p>}
            {formData.dietPreference !== '' && <p><strong>Diet Prefernce</strong> {formData.dietPreference}</p>}
            {formData.highestQualification !== '' && <p><strong>Highest Qualification</strong> {formData.highestQualification}</p>}
            {formData.fieldOfStudy !== '' && <p><strong>Field of Study</strong> {formData.fieldOfStudy}</p>}
            <p><strong>Feedback:</strong> {formData.feedback}</p>
        </div>
    );
}

Summary.propTypes = {
    formData: PropTypes.shape({
        fullname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        surveyTopic: PropTypes.string.isRequired,
        favoriteProgrammingLanguage: PropTypes.string,
        yearsOfExperience: PropTypes.number,
        exerciseFrequency: PropTypes.string,
        dietPreference: PropTypes.string,
        highestQualification: PropTypes.string,
        fieldOfStudy: PropTypes.string,
        feedback: PropTypes.string.isRequired,
    }).isRequired,
};
