import { Profile } from "../../models/profile/profile.interface";

const userList: Profile[] = [
    {
        firstName: "Abhishek",
        lastName: "Maurya",
        avatar: "http://placehold.it/20x20",
        email: "abhishek@maurya.com",
        dateOfBirth: new Date()
    },
    {
        firstName: "Himanshu",
        lastName: "Gupta",
        avatar: "http://placehold.it/20x20",
        email: "himanshu@gupta.com",
        dateOfBirth: new Date()
    },
    {
        firstName: "Tanvi",
        lastName: "Sehgal",
        avatar: "http://placehold.it/20x20",
        email: "tanvi@sehgal.com",
        dateOfBirth: new Date()
    },
    {
        firstName: "Simran",
        lastName: "Singhal",
        avatar: "http://placehold.it/20x20",
        email: "simran@singhal.com",
        dateOfBirth: new Date()
    }
];

export const USERS_LIST = userList;