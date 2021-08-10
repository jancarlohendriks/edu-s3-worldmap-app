import fetch from 'node-fetch'
import jmespath from 'jmespath'

export default async function loadContent(user, token) {

	// console.log(token);

	const announcements = await fetch(`http://localhost:5000/api/announcements?courseId=${user.courseId}&userToken=${token}`, {
		method: "GET",
	}).then(res => {
		return res.json();
	}).then(data => {
		const sorted = jmespath.search(data, "[*] | sort_by(@, &created_at) | [*].{author: author, created_at: created_at, message: message}");
		return sorted;
	});

	const assignments = await fetch(`http://localhost:5000/api/assignments?courseId=${user.courseId}&userToken=${token}`, {
		method: "GET",
	}).then(res => {
		return res.json();
	}).then(data => {
		const sorted = jmespath.search(data, "[*] | sort_by(@, &created_at) | [*].{created_at: created_at, description: description, name: name}");
		const PATTERN = 'sprint';
		const filtered = sorted.filter((str) => { return str.name.toLowerCase().includes(PATTERN); });
		return filtered;
	});
	
	const avatar = await fetch(`http://localhost:5000/api/avatar?userId=${user.userId}&userToken=${token}`, {
		method: "GET",
	}).then(res => {
		return res.json();
	}).then(data => {
		const sorted = jmespath.search(data, "[1].url");
		return sorted;
	});
	
	const leaderboard = await fetch('http://localhost:5000/api/leaderboard', {
		method: "GET",
	}).then(res => {
		return res.json();
	}).then(data => {
		const students = data.students;
		const sorted = jmespath.search(students, "[*] | reverse(sort_by(@, &points))");
		const shorted = jmespath.search(sorted, "[0:5]");
		return shorted;
	});
	
	const api = {
		assignments: assignments,
		avatar: avatar,
		leaderboard: leaderboard,
		announcements: announcements
	}

	return api;

}