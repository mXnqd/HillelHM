class User {
  constructor(firstName, lastName, birthYear) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this._birthYear;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

class Student extends User {
  constructor(firstName, lastName, birthYear) {
    super(firstName, lastName, birthYear);
    this._marks = new Array(30).fill(null);
    this._attendance = new Array(30).fill(null);
  }

  present() {
    const index = this._attendance.findIndex(
      (attendance) => attendance === null
    );
    if (index !== -1) {
      this._attendance[index] = true;
    }
  }

  absent() {
    const index = this._attendance.findIndex(
      (attendance) => attendance === null
    );
    if (index !== -1) {
      this._attendance[index] = false;
    }
  }

  setMark(mark) {
    const index = this._marks.findIndex((m) => m === null);
    if (index !== -1) {
      this._marks[index] = mark;
    }
  }

  get mediumMark() {
    const validMarks = this._marks.filter((mark) => mark !== null);
    if (validMarks.length > 0) {
      const sum = validMarks.reduce((acc, mark) => acc + mark, 0);
      return sum / validMarks.length;
    }
    return 0;
  }

  get mediumVisit() {
    const validAttendance = this._attendance.filter(
      (attendance) => attendance !== null
    );
    if (validAttendance.length > 0) {
      const sum = validAttendance.reduce(
        (acc, attendance) => acc + attendance,
        0
      );
      return sum / validAttendance.length;
    }
    return 0;
  }

  get summary() {
    const mediumMark = this.mediumMark;
    const mediumAttendance = this.mediumVisit;

    if (mediumMark > 9 && mediumAttendance > 0.9) {
      return `Середня оцінка: ${mediumMark.toFixed(
        2
      )} Середнє відвідування: ${mediumAttendance.toFixed(
        2
      )} Молодець! Так тримати!`;
    } else if (mediumMark > 9 || mediumAttendance > 0.9) {
      return `Середня оцінка: ${mediumMark.toFixed(
        2
      )} Середнє відвідування: ${mediumAttendance.toFixed(
        2
      )} Норм. Але можна постаратись і краще.`;
    } else {
      return `Середня оцінка: ${mediumMark.toFixed(
        2
      )} Середнє відвідування: ${mediumAttendance.toFixed(
        2
      )} Погано! Так ти нічому не навчишся.`;
    }
  }
}

class Teacher extends User {
  constructor(firstName, lastName, birthYear) {
    super(firstName, lastName, birthYear);
    this._groups = [];
  }

  get groups() {
    return this._groups;
  }

  addGroup(group) {
    this._groups.push(group);
  }

  changeStatus(group) {
    const existingGroup = this._groups.find((grp) => grp.name === group.name);
    if (existingGroup) {
      existingGroup.active = group.active;
    }
  }

  get activeGroups() {
    return this._groups.filter((group) => group.active);
  }
}
