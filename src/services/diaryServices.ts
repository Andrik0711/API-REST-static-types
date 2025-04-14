import type {
	DiaryEntry,
	newDiaryEntry,
	NoSensitiveInforDiaryEntry,
} from "../types";
import diaryData from "./diaries.json";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

export const getEntriesWithoutSensitiveInfo =
	(): NoSensitiveInforDiaryEntry[] => {
		return diaries.map(({ id, date, weather, visibility }) => {
			return {
				id,
				date,
				weather,
				visibility,
			};
		});
	};

export const findById = (
	id: number,
): NoSensitiveInforDiaryEntry | undefined => {
	const entry = diaries.find((d) => d.id === id);

	if (entry != null) {
		const { comment, ...restOfDiary } = entry;
		return restOfDiary;
	}

	return undefined;
};

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
	const newDiary = {
		// id: diaries.length + 1,
		id: Math.max(...diaries.map((d) => d.id)) + 1,
		...newDiaryEntry,
	};

	diaries.push(newDiary);
	return newDiary;
};
