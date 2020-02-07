import { Sensor } from './sensor';

export class MeasuredValue {
    measuredValueId: number;
    sensor: Sensor;
    value: string;    
    measuredTime: Date;    
}

export enum Sensors {
    UVlight = 1,
    pressure,
    temperature,
    Light,
}
