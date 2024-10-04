// Interview Question: Write me a function in javascript with if else conditions where we have user, age and salary and if the
// name matches then the console should print age and salary

const users = [
    { name: "Alice", age: 30, salary: 50000 },
    { name: "Bob", age: 25, salary: 45000 },
    { name: "Charlie", age: 35, salary: 60000 }
  ];

  

  function printAgeAndSalary(users, name) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].name === name) {
        console.log("Age:", users[i].age);
        console.log("Salary:", users[i].salary);
        return; // Exit the function after finding a match
      }
    }
  
    console.log("User not found.");
  }
  const searchName = "Bob";
  printAgeAndSalary(users, searchName);

  