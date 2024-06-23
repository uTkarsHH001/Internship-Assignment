import axios from "axios";
import { useEffect, useState } from "react"
import BooleanQuestion from "./BooleanQuestion"
import useBooleanQuestions from '../hooks/useBooleanQuestions'

export default function AdditionalQuestion(){
    const { questions, loading } = useBooleanQuestions();
    
    return(
        <>
            <div className="mt-8">
                <p className="text-2xl">Addition Questions</p>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {questions.map((question) => (
                            <div key={3}>
                                <p>{question.question}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}