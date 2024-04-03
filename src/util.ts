export function populateDays(year: number, month: number): number[] {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
  const lastDateOfLastMonth = new Date(year, month, 0).getDate();
  const lastDayOfMonth = new Date(year, month + 1, 0).getDay()

  const output = [];

  for (let i = firstDayOfMonth; i > 0; i--) {
    output.push(lastDateOfLastMonth - i + 1);
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    output.push(i);
  }

  for( let i = lastDayOfMonth; i < 6; i++){
    output.push(i - lastDayOfMonth + 1);
  }

  return output;
}

