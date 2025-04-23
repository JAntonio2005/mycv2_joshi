export class WorkExperience {
  id?: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  accomplishment: string;

  constructor() {
    this.company = '';
    this.position = '';
    this.location = '';
    this.startDate = '';
    this.endDate = '';
    this.accomplishment = '';
  }
}