(() => {
    type Gender = 'M'|'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    }
    
    class User extends Person {
        public lastAccess: Date;
        constructor (
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super( name, gender, birthdate)
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenForlder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date

        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/user/working/directory',
        '/user/last/open/folder',
        'jenner@gmail.com',
        'admin',
        'Jenner',
        'M',
        new Date('1990-01-01')
    );

    console.log(userSettings);
    
    
    
}) ();