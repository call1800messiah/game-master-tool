import { Information } from './information.model';
import { Attribute } from './attribute.model';
import { Entity } from './entity.model';

export class Person extends Entity {
  constructor(
    public id: string,
    public birthdate: Attribute,
    public deathdate: Attribute,
    public information: Information[],
    public image: string,
    public name: string,
    public profession: Attribute,
    public race: Attribute,
    public visible: boolean
  ){
    super(id, name, 'Person', visible);
  }
}
