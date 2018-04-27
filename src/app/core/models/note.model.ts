import {Entity} from "./entity.model";
import {Information} from "./information.model";

export class Note extends Entity{
  constructor(
    public id: string,
    public information: Information[],
    public name: string,
    public visible: boolean
  ){
    super(id,name,'Notiz',visible);
  }
}