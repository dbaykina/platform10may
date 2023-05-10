import { GET_ALL_CHAPTERS, DELETE_CHAPTER_BY_ID, ADD_NEW_CHAPTER, GET_CHAPTER_BY_ID, GET_CHAPTER_CONTENT_BY_ID } from './ActionTypes';

export function getAllChapters(payload) {
	return {
		type: GET_ALL_CHAPTERS,
		payload
	};
}

export function addSectiontoSectionList(payload) {
	return {
		type: ADD_NEW_CHAPTER,
		payload
	};
}

export function getChapterByID(payload) {
	return {
		type: GET_CHAPTER_BY_ID,
		payload
	};
}

export function getChapterContentByID (payload) {
	return {
		type: GET_CHAPTER_CONTENT_BY_ID,
		payload
	}
}