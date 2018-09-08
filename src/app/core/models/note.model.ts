import {Entity} from "./entity.model";
import {Information} from "./information.model";

export class Note extends Entity{
  constructor(
    public name: string,
    public visible: boolean,
    public _id?: string,
    public information?: Information[],
  ){
    super(name, 'note', visible, _id);
  }
}