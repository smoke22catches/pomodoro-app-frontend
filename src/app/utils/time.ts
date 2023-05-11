const MS_IN_MINUTE = 60000;
const MS_IN_SECOND = 1000;

/**
 * 
 * @param ms 
 * @returns time in the format of mm:ss
 */
export function millisecondsToPrintableTime(ms: number): string {
    // convert milliseconds to minutes
    const minutesAsMs = ms - (ms % MS_IN_MINUTE);
    const minutes = minutesAsMs / MS_IN_MINUTE;

    // subtract minutes from milliseconds and get seconds
    const secondsLefts = ms - minutesAsMs;
    const seconds = (secondsLefts - (secondsLefts % MS_IN_SECOND)) / MS_IN_SECOND;

    // format the time
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutesString}:${secondsString}`;
}