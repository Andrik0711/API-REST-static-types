// export type Weather = "sunny" | "rainy" | "cloudy" | "stormy" | "snowy";
// export type Visibility = "grear" | "good" | "ok" | "poor";
export enum Weather {
	Sunny = "sunny",
	Rainy = "rainy",
	Cloudy = "cloudy",
	Stormy = "stormy",
	Snowy = "snowy",
}

export enum Visibility {
	Grear = "grear",
	Good = "good",
	Ok = "ok",
	Poor = "poor",
}

/**
 * Una interfaces es una forma de definir la estructura de un objeto en TypeScript.
 * En este caso, estamos definiendo la estructura de un objeto que representa una entrada de diario.
 */
export interface DiaryEntry {
	id: number;
	date: string;
	weather: Weather;
	visibility: Visibility;
	comment: string;
}

// Maneras de modificar el tipo de una propiedad de un objeto
// export type NoSensitiveInforDiaryEntry = Pick<DiaryEntry, "id" | "date" | "weather" | "visibility">;
export type NoSensitiveInforDiaryEntry = Omit<DiaryEntry, "comment">;

export type newDiaryEntry = Omit<DiaryEntry, "id">;
