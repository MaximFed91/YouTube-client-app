export default function getBorderColor(days: number): string {
  let color = '';
  if (days < 7) {
    color = '#2F80ED';
  } else if (days > 7 && days < 30) {
    color = '#27AE60';
  } else if (days > 180) {
    color = '#EB5757';
  }
  return color;
}
