import type { newDiaryEntry } from "./types";
import { Weather, Visibility } from "./types";

const parseComment = (commentFromRequest: unknown): string => {
	if (!isString(commentFromRequest)) {
		throw new Error(`Incorrect or missing comment: ${commentFromRequest}`);
	}
	return commentFromRequest as string;
};

const parseDate = (dateFromRequest: unknown): string => {
	if (!isString(dateFromRequest) || !isDate(dateFromRequest as string)) {
		throw new Error(`Incorrect or missing date: ${dateFromRequest}`);
	}
	return dateFromRequest as string;
};

const parseWeather = (weatherFromRequest: unknown): Weather => {
	if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
		throw new Error(`Incorrect or missing weather: ${weatherFromRequest}`);
	}
	return weatherFromRequest as Weather;
};

const parseVisibility = (visibilityFromRequest: unknown): Visibility => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error(`Incorrect or missing visibility: ${visibilityFromRequest}`);
    }
    return visibilityFromRequest as Visibility;
}

const isString = (string: unknown): boolean => {
	return typeof string === "string";
};

const isDate = (date: string): boolean => {
	return Boolean(Date.parse(date));
};

const isWeather = (param: unknown): boolean => {
	return Object.values(Weather).includes(param as Weather);
};

const isVisibility = (param: unknown): boolean => {
	return Object.values(Visibility).includes(param as Visibility);
};

const toNewDiaryEntry = (object: { comment: unknown; date: unknown; weather: unknown; visibility: unknown }): newDiaryEntry => {
	const newEntry: newDiaryEntry = {
		comment: parseComment(object.comment),
		date: parseDate(object.date),
		weather: parseWeather(object.weather),
		visibility: parseVisibility(object.visibility),
	};

    return newEntry;
};

export default toNewDiaryEntry;
