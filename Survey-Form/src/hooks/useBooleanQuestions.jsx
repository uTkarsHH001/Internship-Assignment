import { useEffect, useState } from 'react';
import axios from 'axios';

const useBooleanQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('https://opentdb.com/api.php?amount=3&category=18&difficulty=medium&type=boolean');
                if (!response.results || response.results.length === 0) {
                    throw new Error('No data found');
                }
                setQuestions(response.results);
                setLoading(false);
                console.log(response.results)
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []); 

    return { questions, loading };
};

export default useBooleanQuestions;
