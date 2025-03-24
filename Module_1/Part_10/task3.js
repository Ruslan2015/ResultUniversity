const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
 }

 const handleObject = (student, key, action) => {
    switch(action) {
        case 'get':
            return student[key];
        case 'add':
            student[key] = "";
            return student;
        case 'delete':
            delete student[key];
            return student;
        default:
            return student;
    }
 }
  
 const result = handleObject(student, 'programmingLanguage', 'delete');
 console.log('result', result); // { name: 'Maxim' }