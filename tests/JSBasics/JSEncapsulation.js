class Employee {
    setEmpDetails(name, id, phoneNo) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }

    getEmpName() {
        return this.name;
    }

    getEmpId() {
        return this.id;
    }

    getPhoneNo() {
        return this.phoneNo;
    }
}

let emp1 = new Employee();
emp1.setEmpDetails('John', '12', '9876543210');
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getPhoneNo());