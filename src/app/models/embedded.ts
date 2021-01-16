import { Hospital } from "./hospital";
import { IllnessLinks } from "./illnessLinks";

export interface Embedded {
    hospitals: Hospital[];
    illnesses: IllnessLinks[];
}