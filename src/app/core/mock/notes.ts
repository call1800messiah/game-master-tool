import { Information } from "../models/information.model";
import { Note } from "../models/note.model";

export const NOTES: Note[] = [
  new Note(
    'Eine wichtige Notiz',
    true,
    'jajdlfs943nj3k',
    [
      new Information("Eine tolle Information","19.4.17",1,true),
      new Information("Mehr Information","1.6.18",1,true),
      new Information("Viele Informationen","12.4.18",1,true)
    ],
  ),
  new Note(
    'Eine wichtige Notiz',
    true,
    'sdfdlfsdfdnj3k',
    [
      new Information("Eine tolle Information","15.4.18",1,true),
      new Information("Mehr Information","12.4.18",1,true),
      new Information("Viele Informationen","1.3.18",1,true)
    ],
  )
];