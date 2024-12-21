export interface JobDetails {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  compensation: string;
  description: string;
  responsibilities: string;
  qualifications: {
    required: string;
    skills: string;
    education: string;
  };
  benefits: string;
  projects: string;
}
