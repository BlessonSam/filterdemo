// A mock function to mimic making an async request for data
import {athletes,Athlete} from './athletes';

export function fetchAthletes(filters = {}) {
    return new Promise<{ data: Athlete[] }>((resolve) =>
      setTimeout(() => resolve(Object.keys(filters).length?{data:athletes}:{ data: [] }), 500)
    );
  }
  