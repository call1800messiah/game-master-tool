import { Information } from './information.model';
import { Entity } from './entity.model';

export class Person extends Entity {
  constructor(
    public name: string,
    public visible: boolean,
    public birthdate?: Information,
    public deathdate?: Information,
    public _id?: string,
    public information?: Information[],
    public image?: string,
    public profession?: Information,
    public race?: Information    
  ){
    super(name, 'person', visible, _id);
  }
}
