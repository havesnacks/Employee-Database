document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('app');
    const createEmployeeButton = document.querySelector('.createEmployee');
    const addEmployeeModal = document.querySelector('.addEmployee');
    const addEmployeeForm = document.querySelector('.addEmployee_create');
    const employeeList = document.querySelector('.employees__names--list');
    const employeeInfo = document.querySelector('.employees__single--info');

    let employees = [];

    createEmployeeButton.addEventListener('click', () => {
        addEmployeeModal.style.display = 'flex';
    });

    addEmployeeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(addEmployeeForm);
        const newEmployee = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            imageUrl: formData.get('imageUrl') || 'https://via.placeholder.com/250',
            email: formData.get('email'),
            contactNumber: formData.get('contactNumber'),
            salary: formData.get('salary'),
            address: formData.get('address'),
            dob: formData.get('dob')
        };

        employees.push(newEmployee);
        addEmployeeModal.style.display = 'none';
        addEmployeeForm.reset();
        renderEmployeeList();
    });

    function renderEmployeeList() {
        employeeList.innerHTML = '';
        employees.forEach((employee, index) => {
            const employeeItem = document.createElement('div');
            employeeItem.classList.add('employees__names--item');
            employeeItem.textContent = `${employee.firstName} ${employee.lastName}`;
            employeeItem.addEventListener('click', () => {
                renderEmployeeInfo(index);
            });
            employeeList.appendChild(employeeItem);
        });
    }

    function renderEmployeeInfo(index) {
        const employee = employees[index];
        employeeInfo.innerHTML = `
            <h3 class="employees__single--heading">${employee.firstName} ${employee.lastName}</h3>
            <img src="${employee.imageUrl}" alt="${employee.firstName} ${employee.lastName}" />
            <p><strong>Email:</strong> ${employee.email}</p>
            <p><strong>Contact Number:</strong> ${employee.contactNumber}</p>
            <p><strong>Salary:</strong> $${employee.salary}</p>
            <p><strong>Address:</strong> ${employee.address}</p>
            <p><strong>Date of Birth:</strong> ${employee.dob}</p>
        `;
    }
});