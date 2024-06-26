export type AnsweredBy = {
    id: string;
    roundId: string;
    schoolRegistrationId: string;
    score: number;
    position: number;
    schoolRegistration?: SchoolRegistration;
  };
  
  export type Question = {
    id: string;
    roundId: string;
    question_number: number;
    answered_by: AnsweredBy | null;
    answered_correctly: boolean | null;
    bonus_to: AnsweredBy | null;
  };
  
  export type School = {
    id: string;
    name: string;
    state: string;
    address: string;
  };
  
  export type Quiz = {
    id: string;
    year: number;
    title: string;
    description: string | null;
    date: string;
  };
  
  export type SchoolRegistration = {
    id: string;
    quizId: string;
    schoolId: string;
    quiz: Quiz;
    school: School;
    rounds: RoundParticipation[];
    score: number;
    position: number;
  };
  
  export type RoundParticipation = {
    id: string;
    roundId: string;
    schoolRegistrationId: string;
    score: number;
    position: number;
    answered_questions: Question[];
    bonus_questions: Question[];
  };
  
  export type Round = {
    id: string;
    quizId: string;
    name: string;
    round_number: number;
    no_of_questions: number;
    no_of_schools: number;
    marks_per_question: number;
    marks_per_bonus_question: number;
    schoolParticipations: RoundParticipation[];
    questions: Question[];
  };
  
  export type IQuiz = {
    id: string;
    year: number;
    title: string;
    description: string | null;
    date: string;
    rounds: Round[];
    schoolRegistrations: SchoolRegistration[];
  };