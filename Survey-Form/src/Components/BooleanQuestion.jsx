import { useState } from 'react';
import PropTypes from 'prop-types';

const BooleanQuestions = ({ ques }) => {
    const [answer, setAnswer] = useState('');

    const handleOptionChange = (event) => {
        setAnswer(event.target.value); 
    };

    return (
        <div className="flex gap-5 mt-5">
            <div>
                <p>{ques}</p>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="yes"
                        className="mx-1"
                        checked={answer === 'yes'}
                        onChange={handleOptionChange}
                    />
                    Yes
                </label>
                &nbsp;&nbsp;
                <label>
                    <input
                        type="radio"
                        value="no"
                        className="mx-1"
                        checked={answer === 'no'}
                        onChange={handleOptionChange}
                    />
                    No
                </label>
            </div>
        </div>
    );
};

BooleanQuestions.propTypes = {
    ques: PropTypes.string.isRequired, // Ensure 'ques' prop is a required string
};

export default BooleanQuestions;

