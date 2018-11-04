import { Information } from "../models/information.model";
import { Note } from "../models/note.model";

export const NOTES: Note[] = [
  new Note(
    'Eine wichtige Notiz',
    true,
    'jajdlfs943nj3k',
    [
      new Information("Eine tolle Information",new Date('2017-07-19'),1,true),
      new Information("Mehr Information",new Date('2018-04-01'),1,true),
      new Information("Viele Informationen",new Date('2018-04-01'),1,true)
    ],
  ),
  new Note(
    'Eine wichtige Notiz',
    true,
    'sdfdlfsdfdnj3k',
    [
      new Information("Eine tolle Information",new Date('2018-04-01'),1,true),
      new Information("Mehr Information",new Date('2018-04-01'),1,true),
      new Information("Viele Informationen",new Date('2018-04-01'),1,true)
    ],
  )
];