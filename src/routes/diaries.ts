import express from "express";
import * as diaryService from "../services/diaryServices"; // Importing the diary service
import toNewDiaryEntry from "../utils";
const router = express.Router();

router.get("/", (_, res) => {
	res.send(diaryService.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
	const diary = diaryService.findById(+req.params.id);
	diary != null ? res.send(diary) : res.status(404);
});

router.post("/", (req, res) => {
	try {
		const newDiaryEntry = toNewDiaryEntry(req.body);
		const addedDiaryEntry = diaryService.addDiary(newDiaryEntry);
        console.log(addedDiaryEntry);
		res.json(newDiaryEntry);
	} catch (e) {
		res.status(400);
		res.send({ error: e instanceof Error ? e.message :"Error" });
	}
});

export default router;
