import { Information } from "./information.model";

export class Attribute extends Information {
  constructor(
    public content: string,
    public created: string,
    public user: number,
    public visible: boolean,
    public label: string
  ){
    super(content, created, user, visible);
  }
}
