export interface Question {
  id: number;
  createdBy: number;
  content: string;
  createdAtUtc: string;
}

export const questions: Question[] = [
  {
    id: 1,
    content: 'The Awakening',
    createdBy: 2,
    createdAtUtc: '1'
  },
  {
    id: 2,
    content: 'City of Glass',
    createdBy: 1,
    createdAtUtc: '2'
  },
]
