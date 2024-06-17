export function validEmail(email: string) {
  return email.includes('@') && email.includes('.') && email.length > 7;
}
