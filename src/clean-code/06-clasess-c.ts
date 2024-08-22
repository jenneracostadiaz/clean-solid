(() => {
    type Gender = 'M'|'F';

    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate}: PersonProps ) {
            this.name       = name;
            this.gender     = gender;
            this.birthdate  = birthdate;
        }
    }

    interface UserProps {
        email: string,
        role: string,
    }
    
    class User {
        public email: string;
        public role: string;
        public lastAccess: Date;
        constructor ( {email, role}: UserProps ) {
            this.lastAccess = new Date();
            this.email      = email;
            this.role       = role;

        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string,
        lastOpenForlder: string,
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenForlder: string

        constructor( {workingDirectory, lastOpenForlder}: SettingsProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenForlder = lastOpenForlder;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string,
        lastOpenForlder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date,
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({workingDirectory,
            lastOpenForlder,
            email,
            role,
            name,
            gender,
            birthdate}: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenForlder });
        }
    }

    const userSettings = new UserSettings({
        workingDirectory:'/user/working/directory',
        lastOpenForlder: '/user/last/open/folder',
        email: 'jenner@gmail.com',
        role: 'admin',
        name: 'Jenner',
        gender: 'M',
        birthdate: new Date('1990-01-01')
    });

    console.log(userSettings);
    
}) ();