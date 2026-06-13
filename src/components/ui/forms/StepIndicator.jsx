import { registerStepIndicator } from "@/data";

function StepIndicator({ actualStep = 1, stepsNumber = 3 }) {
    return (
        <div className="step-indicator">
            <span className="step-indicator__count">
                { registerStepIndicator.count_step } {actualStep} { registerStepIndicator.count_on } {stepsNumber}
            </span>

            <p className="step-indicator__title">
                { registerStepIndicator.steps.step1 }
            </p>

            <div className="step-indicator__bar">
                <div className="step-indicator__progress"></div>
                <div className="step-indicator__part"></div>
                <div className="step-indicator__part"></div>
            </div>

            <p className="step-indicator__next">
                <span className="step-indicator__next-important">{ registerStepIndicator.next_important }</span>{ registerStepIndicator.steps.step2 }
            </p>
        </div>
    );
}

export default StepIndicator;