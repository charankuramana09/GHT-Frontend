import { PersonalDetails } from './personal-details.model';

export class TutorDetails {
    personalDetails: PersonalDetails = new PersonalDetails();
    resume: string;
    drivingLicense: string;
    addressProof: string;
    photo: string;
}
