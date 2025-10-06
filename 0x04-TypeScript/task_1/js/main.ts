// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attributes
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Test that readonly properties cannot be modified after initialization
// This should cause a TypeScript error if uncommented:
// teacher3.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property.

// Test adding additional attributes
const teacher4: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
  specialty: 'Mathematics', // Additional attribute
  isAvailable: true, // Another additional attribute
};

console.log(teacher4);