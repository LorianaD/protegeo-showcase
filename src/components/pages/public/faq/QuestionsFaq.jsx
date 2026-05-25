import { Accordion, SectionContainer } from "@/components/ui";
import { faqQuestions } from "@/data";

function QuestionsFaq() {
    return (
        <SectionContainer variant="withoutborder">
            {faqQuestions.map((category)=>(
                <Accordion key={category.categoryTitle} title={category.categoryTitle}>
                    {category.questions.map((question)=>(
                        <div key={question.questionTitle}>

                            <h4>{question.questionTitle}</h4>

                            {question.questionAnswer.map((answer, index) => {

                                if (answer.type === "list") {
                                    return (
                                        <ul key={index} className="accordion__list">

                                            {answer.content.map((item, itemIndex) => (
                                                <li key={itemIndex} className="accordion__list-item">
                                                    {item}
                                                </li>
                                            ))}

                                        </ul>
                                    );
                                }

                                return (
                                    <p key={index} className="accordion__answer">
                                        {answer.content}
                                    </p>
                                );

                            })}

                        </div>
                    ))}
                </Accordion>
            ))}
        </SectionContainer>
    )
}

export default QuestionsFaq;