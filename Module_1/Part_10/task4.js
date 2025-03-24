const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  }
  
const giveJobToStudent = (student, jobName) => {
    student.jobName = jobName;
    alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${student.jobName}`);
    return student;
}



const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(updatedStudent);