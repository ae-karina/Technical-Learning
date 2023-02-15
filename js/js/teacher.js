function Teacher(opt) {
      this.name = opt.name;
      this.sex = opt.sex;
      this.weight = opt.weight;
      this.course = opt.course;
      this.smoke = function () {
        this.weight--;
        console.log(this.weight);
      }
      this.eat = function () {
        this.weight++;
        console.log(this.weight);
      }
    }