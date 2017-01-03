export const greeting = (age = 0) => age > 18 ? 'Hello!' : 'Yo!';

export const isTacoTuesday = (day = '') => {
  day = day.toLowerCase();
  switch (day) {
    case 'tuesday':
      return true;
    case 'sunday':
    case 'monday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
    case 'saturday':
    default:
      return false;
  }
};

