import { Profile } from "../profile/profile.interface";

export interface Message {
    // user: Profile;
    // date: Date;
    // lastMessage: string;
    userFromId: string;
    userToId: string;
    userFromProfile: {
        firstName: string;
        lastName: string;
    };
    userToProfile: {
        firstName: string;
        lastName: string;
    };
    content: string;
    
}