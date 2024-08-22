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
        birthdate: Date,
        gender: Gender,
        name: string,
    }
    
    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;
        constructor ( {email, role, birthdate, gender, name}: UserProps ) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email      = email;
            this.role       = role;

        }

        checkCredentials() {
            return true;
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

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenForlder: string

        constructor(
            {workingDirectory,
            lastOpenForlder,
            email,
            role,
            name,
            gender,
            birthdate}: UserSettingsProps

        ) {
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenForlder = lastOpenForlder;
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