import { useEffect, useState } from 'react';
import axios from 'axios';

const useBooleanQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchQ = async() => {
      const res = await axios.get("https://opentdb.com/api.php?amount=3&category=18&difficulty=easy&type=boolean")
      setQuestions(res.data.results)
      console.log(res.data.results)
      setLoading(false)
    }
    fetchQ();
  }, [])

    return { questions, loading };
};

export default useBooleanQuestions;
