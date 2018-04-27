import {Entity} from "../models/entity.model";
import {PEOPLE} from "./people";
import {NOTES} from "./notes";

export const FLOW: Entity[] = NOTES.concat(PEOPLE);