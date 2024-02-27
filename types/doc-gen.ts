export type IdentityForm = {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  city?: string;
  postalCode?: string;
};

export type SkillsForm = {
  skills: string[];
};

export type Training = {
  schoolName: string;
  diploma: string;
  schoolType: string;
  degree?: string;
  graduationDate: string;
  skillsRelated: string[];
};

export type TrainingKeys = keyof Training;

export type EducationForm = {
  trainings: Training[];
};

type Experience<T> = {
  type: 'work' | 'project';
  data: T;
};

type Project = {
  type: 'project';
  name: string;
  description: string;
  skillsRelated: string[];
};

type Work = {
  type: 'work';
  jobTitle: string;
  contractType: string;
  companyName: string;
  startDate: string;
  endDate: string;
  skillsRelated: string[];
};

export type ExperienceForm = {
  experiences: Experience<Work | Project>[];
};

export type JobOfferForm = {
  companyName: string;
  companyDescription: string;
  jobTitle: string;
  jobDescription: string;
  jobRequirements: string;
};

export type JobInterestForm = {
  interest?: string;
};

export type DocGenerationContext = {
  identity: IdentityForm;
  skills: SkillsForm;
  education: EducationForm;
  experience: ExperienceForm;
  jobOffer: JobOfferForm;
  interest: JobInterestForm;
};
