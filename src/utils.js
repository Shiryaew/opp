import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export function createEvent(date, name) {
  return {
    id: uuidv4(),
    date,
    name
  }
}