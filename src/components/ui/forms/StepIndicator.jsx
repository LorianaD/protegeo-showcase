function StepIndicator({ section, actualStep = 1, stepsNumber = 3 }) {

    const stepTitle = section.steps[`step${actualStep}`];
    const nextStepTitle = section.steps[`step${actualStep + 1}`];
    const classActualStep2 = actualStep >= 2 ? "step-indicator__progress" : "";
    const classActualStep3 = actualStep >= 3 ? "step-indicator__progress" : "";

    return (
        <div className="step-indicator">
            <span className="step-indicator__count">
                { section.count_step } {actualStep} { section.count_on } {stepsNumber}
            </span>

            <p className="step-indicator__title">
                {stepTitle}
            </p>

            <div className="step-indicator__bar">
                <div className="step-indicator__progress"></div>
                <div className={`step-indicator__part ${classActualStep2}`}></div>
                <div className={`step-indicator__part ${classActualStep3}`}></div>
            </div>

            {actualStep < stepsNumber && (
                <p className="step-indicator__next">
                <span className="step-indicator__next-important">
                    {section.next_important}
                </span>
                {nextStepTitle}
                </p>
            )}
        </div>
    );
}

export default StepIndicator;