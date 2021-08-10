import Vue from 'vue'
import Vuex from 'vuex'
import loadContent from './api'

Vue.use(Vuex)

export default new Vuex.Store({
	
	state: {
		count: 0,

		token: null,
		user: null,
		avatar: null,
		assignments: null,
		sprints: null,
		leaderboard: null,
		announcements: null,
		
		projects: [
			{
				title: "Splatoon by Beta64",
				link: "https://www.youtube.com/embed/tJ3s-xbEEwg"
			},
			{
				title: "The History of Speedrunning by Did You Know Gaming?",
				link: "https://www.youtube.com/embed/47dNILcpP4I"
			},
			{
				title: "Persona 5 - Part 1 - Let's Start the Game by JohneAwesome",
				link: "https://www.youtube.com/embed/f3bVM2mxh4k"
			},
			{
				title: "Nier Automata Gameplay Part 1 Prologue by Shirrako",
				link: "https://www.youtube.com/embed/4MU0yMgu3bQ"
			},
			{
				title: "Ni no Kuni: Wrath of the White Witch Gameplay by IGN",
				link: "https://www.youtube.com/embed/QAomMHnwIY8"
			}
		],
		
		PersonalTodos: [
      {
				title: "This is a title",
				description: "Take Noah to basketball practice.",
        isComplete: false,
        dates: { weekdays: 6 }, // Every Friday
        color: "red",
      },
      {
				title: "This is a title",
				description: "HOLA MUNDO",
        isComplete: true,
        dates: new Date(2020, 11, 4),
        color: "red",
      },
		],
		
		TeamTodos: [
      {
				title: "This is a title",
				description: "Take Noah to basketball practice.",
        isComplete: false,
        dates: new Date(2020, 11, 7),
        color: "green",
      },
      {
				title: "This is a title",
				description: "HOLA MUNDO",
        isComplete: true,
        dates: new Date(2020, 11, 4),
        color: "red",
      },
		]

  },
	
	mutations: {
		increment: (state, number) => {
      state.count += number;
		},
		SET_TOKEN: (state, payload) => {
			state.token = payload;
		},
		SET_USER: (state, userData) => {
			state.user = userData;
		},
		SET_AVATAR: (state, payload) => {
			state.avatar = payload;
		},
		SET_LEADERBOARD: (state, payload) => {
			state.leaderboard = payload;
		},
		SET_ASSIGNMENTS: (state, payload) => {
			state.assignments = payload;
			state.sprints = payload.length + 1;
		},
		SET_ANNOUNCEMENTS: (state, payload) => {
			state.announcements = payload;
		},
  },
	
	actions: {
		async ['setToken'] ({commit}, token) {
			commit('SET_TOKEN', token);
		},
		async ['setUser'] ({commit, state}, user) {
			const content = await loadContent(user, state.token);
			commit('SET_AVATAR', content.avatar);
			commit('SET_LEADERBOARD', content.leaderboard);
			commit('SET_ASSIGNMENTS', content.assignments);
			commit('SET_ANNOUNCEMENTS', content.announcements);
			commit('SET_USER', user);
		}
	},
	
	getters: {
		
		showPersonalTodos: state => {
			return state.PersonalTodos;
		},
		
		showTeamTodos: state => {
			return state.TeamTodos;
		},
		
		showProjects: state => {
			return state.projects;
		},
		
		showAssignments: state => {
			return state.assignments;
		},
		
		showAvatar: state => {
			return state.avatar;
		},
		
		showLeaderboard: state => {
			return state.leaderboard;
		},
		
		showToken: state => {
			return state.token;
		},
		
		showAnnouncements: state => {
			return state.announcements;
		}
	},
	
	modules: {
  }

})
