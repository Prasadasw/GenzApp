// Couple-specific questions and dares
const COUPLE_TRUTHS = [
    "What was your first impression of your partner?",
    "What's your favorite physical feature of your partner?",
    "What's the most romantic thing your partner has done for you?",
    "What's one thing you'd like to change about your relationship?",
    "When did you first realize you were in love?",
  ];
  
  const COUPLE_DARES = [
    "Give your partner a 30-second massage",
    "Slow dance with your partner for one minute",
    "Write a short love note and read it out loud",
    "Feed each other a snack with your eyes closed",
    "Do your best impression of how your partner laughs",
  ];
  
  // Group-friendly questions and dares
  const GROUP_TRUTHS = [
    "What's the most embarrassing thing you've done in public?",
    "What's your biggest fear?",
    "What's the worst date you've ever been on?",
    "What's your biggest regret?",
    "What's the most trouble you've ever been in?",
  ];
  
  const GROUP_DARES = [
    "Do your best dance move",
    "Sing your favorite song for 30 seconds",
    "Tell a joke that makes someone laugh",
    "Do 10 jumping jacks",
    "Make up a short rap about someone in the room",
  ];
  
  export function getTruthQuestions(isCouple = false) {
    return isCouple ? COUPLE_TRUTHS : GROUP_TRUTHS;
  }
  
  export function getDareChallenges(isCouple = false) {
    return isCouple ? COUPLE_DARES : GROUP_DARES;
  }