import {Person} from "../models/person.model";
import {Information} from "../models/information.model";
import {Attribute} from "../models/attribute.model";

export const PEOPLE: Person[] = [
  new Person(
    'kasdhjlksaf7as23j',
    new Attribute("3. Praios 1005 BF","1.4.18",1,true,"Geburtstag"),
    new Attribute("5. Rondra 1030 BF","2.4.18",1,true,"Todestag"),
    [new Information("Dies ist eine Information über die Person","1.4.18",1,true),
      new Information("Dies ist eine Information über die Person","1.4.18",1,true)],
    "",
    "Alrik Backmann",
    new Attribute("Bäcker","1.4.18",1,true,"Profession"),
    new Attribute("Mittelländer","1.4.18",1,true,"Rasse"),
    true
  ),
  new Person(
    'sadjf3kk24j53lk23',
    new Attribute("13. Ingerimm 1001 BF","1.4.18",1,true,"Geburtstag"),
    new Attribute("25. Rahja 1027 BF","2.4.18",1,true,"Todestag"),
    [new Information("Dies ist eine Information über die Person","1.4.18",1,true),
      new Information("Dies ist eine Information über die Person","1.4.18",1,true)],
    "",
    "Alrike Kriegerin",
    new Attribute("Krieger","1.4.18",1,true,"Profession"),
    new Attribute("Tulamide","1.4.18",1,true,"Rasse"),
    true
  )
];