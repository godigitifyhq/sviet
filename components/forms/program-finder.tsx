'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StepOne } from './program-finder-steps/step-one';
import { StepTwo } from './program-finder-steps/step-two';
import { StepThree } from './program-finder-steps/step-three';
import { StepFour } from './program-finder-steps/step-four';
import { Results, type UserSelections } from './program-finder-steps/results';
import { ProgressBar } from './program-finder-steps/progress-bar';
import { Sparkles } from 'lucide-react';

const TOTAL_STEPS = 4;

export function ProgramFinderForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<UserSelections>({});
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelection = (key: keyof UserSelections, value: string) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowResults(true);
      }, 1500);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const skip = () => {
    if (currentStep === TOTAL_STEPS - 1) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowResults(true);
      }, 1500);
    } else {
      nextStep();
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setSelections({});
    setShowResults(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-12 h-12 text-[#FF6A00]" />
          </motion.div>
          <h2 className="text-lg font-light text-gray-900">Finding your perfect programs...</h2>
        </motion.div>
      </div>
    );
  }

  if (showResults) {
    return <Results selections={selections} onRestart={restart} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="py-8 px-4 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-light mb-2 text-gray-900"
          >
            Find Your Perfect Program
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-gray-600"
          >
            Answer a few quick questions to discover programs tailored to your goals
          </motion.p>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <ProgressBar currentStep={currentStep + 1} totalSteps={TOTAL_STEPS} />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <StepOne
                key="step-1"
                selected={selections.interest}
                onSelect={(value) => handleSelection('interest', value)}
                onNext={nextStep}
              />
            )}
            {currentStep === 1 && (
              <StepTwo
                key="step-2"
                selected={selections.career}
                onSelect={(value) => handleSelection('career', value)}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}
            {currentStep === 2 && (
              <StepThree
                key="step-3"
                selected={selections.academicPreference}
                onSelect={(value) => handleSelection('academicPreference', value)}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}
            {currentStep === 3 && (
              <StepFour
                key="step-4"
                selectedLocation={selections.location}
                selectedBudget={selections.budget}
                onSelectLocation={(value) => handleSelection('location', value)}
                onSelectBudget={(value) => handleSelection('budget', value)}
                onNext={nextStep}
                onBack={prevStep}
                onSkip={skip}
              />
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto text-center text-xs text-gray-600">
          <p>All programs at SVIET are designed with industry standards and placement excellence in mind</p>
        </div>
      </footer>
    </div>
  );
}
