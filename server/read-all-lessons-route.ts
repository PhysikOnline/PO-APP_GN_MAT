import { db } from './database';

export function readAllLessons(req, res) {
  return res.status(200).json(db.readAllLessons());
}
