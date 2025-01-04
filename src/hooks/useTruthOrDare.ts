import { useState } from 'react';
import { getTruthQuestions, getDareChallenges } from '../data/truth-or-dare-data';

export function useTruthOrDare() {
  const [currentChallenge, setCurrentChallenge] = useState<string | null>(null);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [skippedChallenges, setSkippedChallenges] = useState<string[]>([]);

  const generateChallenge = (type: 'truth' | 'dare') => {
    const challenges = type === 'truth' ? getTruthQuestions() : getDareChallenges();
    const availableChallenges = challenges.filter(
      challenge => !completedChallenges.includes(challenge)
    );
    
    if (availableChallenges.length === 0) {
      setCompletedChallenges([]); // Reset if all challenges are used
      setCurrentChallenge(challenges[Math.floor(Math.random() * challenges.length)]);
    } else {
      setCurrentChallenge(
        availableChallenges[Math.floor(Math.random() * availableChallenges.length)]
      );
    }
  };

  const completeChallenge = () => {
    if (currentChallenge) {
      setCompletedChallenges([...completedChallenges, currentChallenge]);
    }
  };

  const skipChallenge = () => {
    if (currentChallenge) {
      setSkippedChallenges([...skippedChallenges, currentChallenge]);
    }
  };

  return {
    currentChallenge,
    generateChallenge,
    completeChallenge,
    skipChallenge,
  };
}