import { Person } from '../models/person.model';
import { Information } from '../models/information.model';

export const PEOPLE: Person[] = [
  new Person(
    "Alrik Backmann",
    true,
    new Information("3. Praios 1005 BF", new Date('2018-04-01'), 1, true, "Geburtstag"),
    new Information("5. Rondra 1030 BF", new Date('2018-04-01'), 1, true, "Todestag"),
    'kasdhjlksaf7as23j',
    [new Information("Dies ist eine Information über die Person", new Date('2018-04-01'), 1, true),
      new Information("Dies ist eine Information über die Person", new Date('2018-04-01'), 1, true)],
    "",
    new Information("Bäcker", new Date('2018-04-01'), 1 ,true, "Profession"),
    new Information("Mittelländer", new Date('2018-04-01'), 1, true, "Rasse")
  ),
  new Person(
    "Alrike Kriegerin",
    true,
    new Information("13. Ingerimm 1001 BF", new Date('2018-04-01'), 1, true, "Geburtstag"),
    new Information("25. Rahja 1027 BF", new Date('2018-04-01'), 1, true, "Todestag"),
    'sadjf3kk24j53lk23',
    [new Information("Dies ist eine Information über die Person", new Date('2018-04-01'), 1, true),
      new Information("Dies ist eine Information über die Person", new Date('2018-04-01'), 1, true)],
    "",
    new Information("Krieger", new Date('2018-04-01'), 1, true, "Profession"),
    new Information("Tulamide", new Date('2018-04-01'), 1, true, "Rasse")
  )
];