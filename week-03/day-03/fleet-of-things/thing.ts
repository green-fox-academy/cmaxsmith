class Thing {
    name: string;
    completed: boolean;

  constructor(name: string){
      this.name = name;
  }

    complete() {
      this.completed = true;
  }
}

export { Thing };