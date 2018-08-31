import { Information } from './information.model';
import { Attribute } from './attribute.model';
import { Entity } from './entity.model';

export class Person extends Entity {
  constructor(
    public id: string,
    public name: string,
    public visible: boolean,
    public birthdate?: Attribute,
    public deathdate?: Attribute,
    public information?: Information[],
    public image?: string,
    public profession?: Attribute,
    public race?: Attribute    
  ){
    super(id, name, 'Person', visible);
  }
}
