export function useCourseDataValidation(data) {
  let errors = {};

  if (!data.courseName) {
      errors.courseName = 'Please enter the course name.';
  }

  if (!data.categoryId) {
      errors.categoryId = 'Please select a category.';
  }

  if (!data.courseDescription) {
      errors.courseDescription = 'Please provide a course description.';
  }

  if (!data.coursePhoto) {
    errors.coursePhoto = 'Please add a photo for the course.';
  }

  // Other validations as per your needs
  // ...

  return errors;
}
