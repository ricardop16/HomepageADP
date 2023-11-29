import { Request } from "express";

declare namespace express{
    export interface request{
        userId: number;
    }
}