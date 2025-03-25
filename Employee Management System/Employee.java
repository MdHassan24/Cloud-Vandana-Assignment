import java.util.ArrayList;
import java.util.List;

public class Employee {
    int id;
    String name;
    double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    
    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Employee Name: " + name);
        System.out.println("Employee Salary: " + salary);
        System.out.println("-----------------------------");
    }

    public static void main(String[] args) {
        Employee emp1 = new Employee(101, "John Doe", 55000);
        Employee emp2 = new Employee(102, "Jane Smith", 60000);
        Employee emp3 = new Employee(103, "Sam Wilson", 45000);
        
        List<Employee> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);
        
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
