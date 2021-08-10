const express = require('express');
const fetch = require('node-fetch');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// INIT ROUTER
const router = express.Router();

// API ROUTES
const routes = {
	assignments: {
		path: '/assignments',
		url: 'https://fhict.instructure.com/api/v1/courses/:courseId/assignments'
	},
	outcome_assignments: {
		path: '/outcome-assignments',
		url: 'https://fhict.instructure.com/api/v1/courses/:courseId/outcome_alignments?student_id=:userId'
	},
	avatar: {
		path: '/avatar',
		url: 'https://fhict.instructure.com/api/v1/users/:userId/avatars'
	},
	leaderboard: {
		path: '/leaderboard',
		url: 'https://i883865.hera.fhict.nl/m3/leaderboard.json'
	},
	announcements: {
		path: '/announcements',
		url: 'https://fhict.instructure.com/api/v1/announcements?context_codes[]=course_:courseId'
	}
};

// CREATE ROUTES
for (const [key, value] of Object.entries(routes)) {
  router.get(value.path, async (req, res) => {
		const courseId = req.query.courseId;
		const userId = req.query.userId;
		const userToken = req.query.userToken;
		const user = {
			courseId,
			userId,
			userToken
		};
		const content = await loadContent(value.url, user);
		res.send(await content);
	});
}

// API CALL FUNCTION
async function loadContent(routeURL, user) {
	const refinedURL = routeURL
		.replace(":courseId", user.courseId)
		.replace(":userId", user.userId);

	const url = new URL(refinedURL);

	const headers = new fetch.Headers();
	headers.append("Accept", "application/json");
	headers.append("Authorization", `Bearer ${user.userToken}`);
	const content = await fetch(url, {
		method: "GET",
		headers: headers,
		redirect: 'follow',
		credentials: "include"
	}).then(res => {
		return res.json();
	})
	return content;
}

module.exports = router;