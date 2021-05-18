import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export function CreateEvent(day, name) {
  return {
    id: uuidv4(),
    name,
    day,
  }
}