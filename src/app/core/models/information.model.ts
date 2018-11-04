export class Information {
    constructor(
        public content: string,
        public created: Date,
        public creator: number,
        public visible: boolean,
        public label?: string
    ){}
}
