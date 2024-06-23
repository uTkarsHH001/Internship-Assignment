import axios from "axios";
import { useEffect, useState } from "react"
import BooleanQuestion from "./BooleanQuestion"
import useBooleanQuestions from '../hooks/useBooleanQuestions'

export default function AdditionalQuestion(){
    const { questions, loading } = useBooleanQuestions();
    console.log(questions)
    return(
        <>
            <div className="mt-8">
                <p className="text-2xl text-center">Addition Questions</p>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {questions.map((q) => (
                            <div key={3}>
                                <BooleanQuestion key={q.question} ques={q.question}/>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}