import { tickets } from '../../../data/tickets';

//end point
export default function handler(req, res) {
  res.status(200).json(JSON.stringify(tickets));
}
