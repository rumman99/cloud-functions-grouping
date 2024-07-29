export interface Observation {
    observationId: string;
    language: string;
    topic: string; // e.g., 'VPC', 'HAZ'
    relatesTo?: string; // Optional field
    content: string;
  }
  