import { Person } from '../models/person.model';
import { Information } from '../models/information.model';

export const PEOPLE: Person[] = [
  new Person(
    "Alrik Backmann",
    true,
    new Information("3. Praios 1005 BF", "1.4.18", 1, true, "Geburtstag"),
    new Information("5. Rondra 1030 BF", "2.4.18", 1, true, "Todestag"),
    'kasdhjlksaf7as23j',
    [new Information("Dies ist eine Information über die Person", "1.4.18", 1, true),
      new Information("Dies ist eine Information über die Person", "1.4.18", 1, true)],
    "",
    new Information("Bäcker", "1.4.18", 1 ,true, "Profession"),
    new Information("Mittelländer", "1.4.18", 1, true, "Rasse")
  ),
  new Person(
    "Alrike Kriegerin",
    true,
    new Information("13. Ingerimm 1001 BF", "1.4.18", 1, true, "Geburtstag"),
    new Information("25. Rahja 1027 BF", "2.4.18", 1, true, "Todestag"),
    'sadjf3kk24j53lk23',
    [new Information("Dies ist eine Information über die Person", "1.4.18", 1, true),
      new Information("Dies ist eine Information über die Person", "1.4.18", 1, true)],
    "",
    new Information("Krieger", "1.4.18", 1, true, "Profession"),
    new Information("Tulamide", "1.4.18", 1, true, "Rasse")
  )
];