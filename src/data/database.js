export const db = {
    role: [
        {
            role_id: 1,
            role_name: "Patient"
        },
        {
            role_id: 2,
            role_name: "Pharmacist"
        }
    ],
    user: [
        {
            user_id: 1, // NOTE: This is auto-increment
            username: "svalerio",
            password: "0522",
            role_id: 1 // Foreign Key
        },
        {
            user_id: 2, // NOTE: This is auto-increment
            username: "aruiz",
            password: "1234",
            role_id: 1// Foreign Key
        },
        {
            user_id: 3, // NOTE: This is auto-increment
            username: "dmelvin",
            password: "5678",
            role_id: 2// Foreign Key
        },
        {
            user_id: 4,
            username: "intet",
            password: "bscs",
            role_id: 1
        }
    ],
    pharmacist: [
        {
            pharmacist_id: 1, // NOTE: This is auto-increment
            pharmacist_name: "Doctor Melvin",
            user_id: 3// Foreign Key
        }
    ],
    concern: [
        {
            concern_id: 1, // NOTE: This is auto-increment
            user_id: 1, // Foreign Key
            patient_name: "Shella Valerio",
            contact_number: "09123456789",
            gender: "Female",
            height: 166, // in cm eg. 155 (no need to add cm)
            weight: 57.2, // in kg eg 46 (no need to add kg)
            age: 20,
            concern_content: "Fever", // up to 255 characters only
            previous_medication: "ibuprofen", // up to 255 characters only
            current_medication: "acetaminophen", // up to 255 characters only
            date_submitted: "2024-03-25", // YYYY-MM-DD
            date_last_updated: "2024-03-25" // YYYY-MM-DD
        },
        {
            concern_id: 2, // NOTE: This is auto-increment
            user_id: 2, // Foreign Key
            patient_name: "Andre Ruiz",
            contact_number: "09876543219",
            gender: "Male",
            height: 172, // in cm eg. 155 (no need to add cm)
            weight: 81.72, // in kg eg 46 (no need to add kg)
            age: 20,
            concern_content: "Sore Throat", // up to 255 characters only
            previous_medication: "Water", // up to 255 characters only
            current_medication: "Water and Ice", // up to 255 characters only
            date_submitted: "2024-03-25", // YYYY-MM-DD
            date_last_updated: "2024-03-25" // YYYY-MM-DD
        },
        {
            concern_id: 3,
            user_id: 4,
            patient_name: "Princess Mae Tulod",
            contact_number: "09999999999",
            gender: "Female",
            height: 163,
            weight: 47,
            age: 20,
            concern_content: "Sakit sa ulo",
            previous_medication: "",
            current_medication: "rest",
            date_submitted: "2024-03-26",
            date_last_updated: "2024-03-26"
        }
    ],
    feedback: [
        {
            feedback_id: 1, // NOTE: This is auto-increment
            concern_id: 1, // Foreign Key
            pharmacist_id: 3, // Foreign Key
            feedback_content: "aspirin", // up to 255 characters only
            date_submitted: "2024-03-26", // YYYY-MM-DD
            date_last_updated: "2024-03-26" // YYYY-MM-DD
        },
        {
            feedback_id: 2, // NOTE: This is auto-increment
            concern_id: 2, // Foreign Key
            pharmacist_id: 3, // Foreign Key
            feedback_content: "aspirin", // up to 255 characters only
            date_submitted: "2024-03-26", // YYYY-MM-DD
            date_last_updated: "2024-03-26" // YYYY-MM-DD
        }

    ]
}