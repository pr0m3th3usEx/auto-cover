declare module '@autocover/components/stepper' {
    export type StepperStep = {
        id: string;
        name: string;
    };
    
    export type GlobalStepperProps = {
        steps: StepperStep[];
        currentStep?: string;
    };
    
    export const GENERATION_STEPS = [
        'identity',
        'skills',
        'education',
        'experiences-and-projects',
        'job-offer',
        'job-interest',
        'result',
    ] as const;
    export type GenerationStepTuple = typeof GENERATION_STEPS;
    export type GenerationStep = GenerationStepTuple[number];     
}