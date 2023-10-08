export function useCourseDataValidation(data) {
  let errors = '';

  if (!data.courseName) {
      errors += 'El nombre del curso es requerido.\n';
  }

  if (!data.categoryId) {
      errors += 'La categoría es requerida.\n';
  }

  if (!data.courseDescription) {
      errors += 'La descripción del curso es requerida.\n';
  }

  if (!data.coursePhoto) {
    errors += 'La FOTO del curso es requerida.\n';
}
  // Otras validaciones según tus necesidades
  // ...

  return errors;
}
