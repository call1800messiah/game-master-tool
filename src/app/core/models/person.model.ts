import { Information } from './information.model';
import { Attribute } from './attribute.model';

export class Person {
  constructor(
    public birthdate: Attribute,
    public deathdate: Attribute,
    public information: Information[],
    public image: String,
    public name: Attribute,
    public profession: Attribute,
    public race: Attribute
  ){}
}
