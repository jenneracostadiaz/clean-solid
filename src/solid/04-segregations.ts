interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunnigBird {
    run(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly(): void { }
    public eat(): void { }
}

class Humminbird implements Bird, FlyingBird {
    public fly(): void { }
    public eat(): void { }
}

class Strich implements Bird, FlyingBird, RunnigBird {
    public fly(): void { }
    public eat(): void { }
    public run(): void { }
}

class Penguin implements Bird, RunnigBird {
    public eat(): void { }
    public run(): void { }
}