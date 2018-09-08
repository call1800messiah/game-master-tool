export class Information {
    constructor(
        public content: string,
        public created: string,
        public user: number,
        public visible: boolean,
        public label?: string
    ){}
}
