function StepIndicator({ section, actualStep = 1, stepsNumber = 3 }) {
    return (
        <div className="step-indicator">
            <span className="step-indicator__count">
                { section.count_step } {actualStep} { section.count_on } {stepsNumber}
            </span>

            <p className="step-indicator__title">
                { section.steps.step1 }
            </p>

            <div className="step-indicator__bar">
                <div className="step-indicator__progress"></div>
                <div className="step-indicator__part"></div>
                <div className="step-indicator__part"></div>
            </div>

            <p className="step-indicator__next">
                <span className="step-indicator__next-important">{ section.next_important }</span>{ section.steps.step2 }
            </p>
        </div>
    );
}

export default StepIndicator;