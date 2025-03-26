const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level += 1;
        if (this.level === 2) {
            this.stack.push('CSS');
            return this;
        } else if (this.level === 3) {
            this.stack.push('JavaScript');
            return this;
        } else if (this.level === 4) {
            this.stack.push('React');
            return this;
        } else if (this.level === 5) {
            this.stack.push('NodeJS');
            return this;
        } else {
            console.log(this);
            alert("Студент выучил все технологии");
            return this;
        }
    }
}

student
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
