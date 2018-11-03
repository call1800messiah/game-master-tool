export class Information {
    constructor(
        public content: string,
        public created: string,
        public creator: number,
        public visible: boolean,
        public label?: string
    ){}
}
