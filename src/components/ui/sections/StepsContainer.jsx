import { InfoWarning } from "../messages";

function StepsContainer({ questions = [], warning, band, info, explain, footer, screenshot, reminder, items = [], }) {
    return (
        <div className="step-container">
            {warning && (
                <InfoWarning
                    title={warning.title}
                    description={warning.description}
                    variant={warning.warningColor}
                    icon={warning.icon}
                    iconColor={warning.iconColor}
                />
            )}

            {band && (
                <div className="steps-container__band">
                    <p className="steps-container__band-title">
                        {band.title}
                    </p>
                    <p className="steps-container__band-description">
                        {band.description}
                    </p>
                </div>
            )}

            <div className="steps-container__body">
                <div className="steps-container__content">
                    {info && (
                        <div className="steps-container__info">
                            <p className="steps-container__info-title">
                                {info.title}
                            </p>

                            {info.description.map((item) => (
                                <p key={item.title} className="steps-container__info-text">
                                    <strong>{item.title}</strong>
                                    {item.text}
                                </p>
                            ))}
                        </div>
                    )}

                    {explain && (
                        <div className="steps-container__explain">
                            <p className="steps-container__explain-title">
                                {explain.title}
                            </p>
                            <p className="steps-container__explain-description">
                                {explain.description}
                            </p>
                        </div>
                    )}

                    {questions.map((question) => (
                        <div key={question.title} className="steps-container__question">
                            <p className="steps-container__question-title">
                                {question.title}
                            </p>

                            {Array.isArray(question.description) ? (
                                question.description.map((text) => (
                                    <p key={text} className="steps-container__question-description">
                                        {text}
                                    </p>
                                ))
                            ) : (
                                <p className="steps-container__question-description">
                                    {question.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {screenshot && (
                    <div className="steps-container__visual">
                        <img
                            src={screenshot}
                            alt=""
                            className="steps-container__img"
                        />
                    </div>
                )}
            </div>

            {footer && (
                <div className="steps-container__footer">
                    <p className="steps-container__footer-title">
                        {footer.title}
                    </p>
                    <p className="steps-container__footer-conclusion">
                        {footer.conclusion}
                    </p>
                </div>
            )}
        </div>
    )
}

export default StepsContainer;