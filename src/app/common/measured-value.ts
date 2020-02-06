export class MeasuredValue {
    sensorId: string;
    value: string;
    measuredValueId: string;
    measuredTime: Date;

    
}

export enum Sensors {
    UVlight = 1,
    pressure,
    temperature,
    Light,
}
