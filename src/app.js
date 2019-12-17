export default function inputNumber(element) {
  try {
    if (/^[1-9]\d*$/.test(element)) {
      return Number(element);
    }
    throw new Error('Ошибка в написании числа');
  } catch (error) {
    return ('error');
  }
}
