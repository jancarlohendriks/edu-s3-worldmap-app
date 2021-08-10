<template>
  <div class="map">
		<svg
			id="svg"
			xmlns="http://www.w3.org/2000/svg"
			xml:space="preserve"
			style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
			:viewBox="`0 -10 ${sprints * pathSpacing + pathBgStrokeWidth + circleRadius * 2} ${pathHeight + 20}`"
		>

			<!-- BG PATH 1 -->
			<path
				id="pathBackground"
				fill="none"
				stroke="#ffeea1"
				:stroke-linecap="pathStrokeLineCap"
				:stroke-width="pathBgStrokeWidth"
				:d="pathContent"
			/>
			<!-- BG PATH 1 -->

			<!-- BG PATH 2 -->
			<path
				id="pathBackground"
				fill="none"
				:stroke="pathBgColor"
				:stroke-linecap="pathStrokeLineCap"
				:stroke-width="pathBgStrokeWidth - 10"
				:d="pathContent"
			/>
			<!-- BG PATH 2 -->

			<!-- PATH -->
			<path
				id="path"
				fill="none"
				:stroke="pathColor"
				:stroke-linecap="pathStrokeLineCap"
				:stroke-dasharray="`${pathStrokeDashArray.dash} ${pathStrokeDashArray.gap}`"
				:stroke-width="pathStrokeWidth"
				:d="pathContent"
			/>
			<!-- PATH -->

			<!-- DOT START -->
			<g
				class="sprint"
				@click="openStart()">
				<circle
					class="dot-start"
					style="fill: #E3BB5A"
					:r="circleRadius"
					:cx="(pathBgStrokeWidth / 2) + circleRadius"
					:cy="pathHeight / 2"
					:stroke="circleStrokeColor"
					:stroke-width="circleStroke"
				/>
				<g>
					<defs>
						<filter id="rectShadow0" x="0" y="0" width="200%" height="200%">
							<feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2"/>
						</filter>
					</defs>
					<rect
						:x="(pathBgStrokeWidth / 2) + circleRadius - (popoverRectWidth / 2)"
						:y="pathHeight / 2 + (popoverRectHeight * 1.5)"
						:width="popoverRectWidth"
						:height="popoverRectHeight"
						:rx="popoverRectRadius"
						:fill="popoverRectFill"
						filter="url(#rectShadow0)"
					></rect>
					<text
						:x="(pathBgStrokeWidth / 2) + circleRadius"
						:y="pathHeight / 2 + (popoverRectHeight * 2.25)"
						text-anchor="middle"
						width="10"
						font-size="6">
						Start
					</text>
				</g>
				<text
					:x="(pathBgStrokeWidth / 2) + circleRadius"
					:y="pathHeight / 2"
					text-anchor="middle" dx=".375em" dy="-.175rem">
					🏴
				</text>
			</g>
			<!-- DOT START -->
			
			<!-- DOT FINISH -->
			<g
				class="sprint"
				@click="openFinish(sprints)">
				<circle
					class="dot-finish"
					style="fill: #E3BB5A"
					:r="circleRadius"
					:cx="(sprints * pathSpacing) + (pathBgStrokeWidth / 2) + circleRadius"
					:cy="pathHeight / 2"
					:stroke="circleStrokeColor"
					:stroke-width="circleStroke"
				/>
				<g>
					<defs>
						<filter :id="'rectShadow' + sprints" x="0" y="0" width="200%" height="200%">
							<feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2"/>
						</filter>
					</defs>
					<rect
						:x="(sprints * pathSpacing - (popoverRectWidth / 2)) + (pathBgStrokeWidth / 2) + circleRadius"
						:y="pathHeight / 2 + (popoverRectHeight * 1.5)"
						:width="popoverRectWidth"
						:height="popoverRectHeight"
						:rx="popoverRectRadius"
						:fill="popoverRectFill"
						:filter="'url(#rectShadow' + sprints + ')'"
					></rect>
					<text
						:x="(sprints * pathSpacing) + (pathBgStrokeWidth / 2) + circleRadius"
						:y="pathHeight / 2 + (popoverRectHeight * 2.25)"
						text-anchor="middle"
						width="10"
						font-size="6">
						Finish
					</text>
				</g>
				<text
					:x="(sprints * pathSpacing) + (pathBgStrokeWidth / 2) + circleRadius"
					:y="pathHeight / 2"
					text-anchor="middle" dx=".375em" dy="-.175rem">
					🏁
				</text>
			</g>
			<!-- DOT FINISH -->
			
			<!-- DOT SPRINTS -->
			<g
				class="sprint"
				v-for="(sprint, index) in (sprints - 1)"
				:key="index"
				@click="openSprint(index)">
				<circle
					class="dot-sprint"
					fill="#E3BB5A"
					:r="circleRadius"
					:cx="((index + 1) * pathSpacing) + (pathBgStrokeWidth / 2) + circleRadius"
					:cy="pathHeight / 2"
					:stroke="circleStrokeColor"
					:stroke-width="circleStroke"
				/>
				<g>
					<defs>
						<filter :id="'rectShadow' + (index + 1)" x="0" y="0" width="200%" height="200%">
							<feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2"/>
						</filter>
					</defs>
					<rect
						:x="((index + 1) * pathSpacing - (popoverRectWidth / 2)) + (pathBgStrokeWidth / 2) + circleRadius"
						:y="pathHeight / 2 + (popoverRectHeight * 1.5)"
						:width="popoverRectWidth"
						:height="popoverRectHeight"
						:rx="popoverRectRadius"
						:fill="popoverRectFill"
						:filter="'url(#rectShadow' + (index + 1) + ')'"
					></rect>
					<text
						:x="((index + 1) * pathSpacing) + (pathBgStrokeWidth / 2) + circleRadius"
						:y="pathHeight / 2 + (popoverRectHeight * 2.25)"
						text-anchor="middle"
						width="10"
						font-size="6">
						Sprint {{ index + 1 }}
					</text>
				</g>
				<text
					:x="((index + 1) * pathSpacing) + (pathBgStrokeWidth / 2) + circleRadius"
					:y="pathHeight / 2"
					text-anchor="middle" dx=".375em" dy="-.175rem">
					🚩
				</text>
			</g>
			<!-- DOT SPRINTS -->
		
		</svg>

  </div>
</template>

<script>

export default {
	
	data() {
		return {
			// assignments: null,
			// sprints: 0,
			sprintsLimit: 15,
			// PATH
			pathContent: '',
			pathColor: '#fff',
			pathHeight: 150,
			pathSpacing: 50,
			pathStrokeLineCap: 'round',
			pathStrokeWidth: 5,
			pathStrokeDashArray: {
				dash: 10,
				gap: 10
			},
			// PATH BG
			pathBgColor: '#FDE269',
			pathBgStrokeWidth: 80,
			// CIRCLE
			circleRadius: 12,
			circleStroke: 0,
			circleStrokeColor: 'orange',
			// POP-OVER RECT
			popoverRectFill: 'rgba(255,255,255,1)',
			popoverRectWidth: 30,
			popoverRectHeight: 10,
			popoverRectRadius: 5
		}
	},

	computed: {
		sprints() {
			const num = this.$store.state.sprints;
			this.drawPath(num);
			return num
		},
		assignments() {
			return this.$store.state.assignments
		},
	},

	mounted() {
		this.$store.getters.showAssignments;
		this.$store.getters.showSprints;
	},
	
	methods: {

		openStart() {
			let title = 'Welcome, this is the Start of your journey';
			let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

      const params = {
				title: title,
				text: content
			};

			this.$modal.show(params)
		},

		openFinish() {
			let title = 'Well done';
			let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

      const params = {
				title: title,
				text: content
			};

			this.$modal.show(params)
		},

		openSprint(index) {
			let title = this.assignments[index].name;
			let content;
			if(this.assignments[index].description) {
				content = this.assignments[index].description;
				content = content.replace(/<style([\s\S]*?)<\/style>/gi, '');
				content = content.replace(/<script([\s\S]*?)<\/script>/gi, '');
				content = content.replace(/<\/div>/ig, '\n');
				content = content.replace(/<\/li>/ig, '\n');
				content = content.replace(/<li>/ig, '  *  ');
				content = content.replace(/<\/ul>/ig, '\n');
				content = content.replace(/<\/p>/ig, '\n');
				content = content.replace(/<br>/gi, "\n");
				content = content.replace(/<[^>]+>/ig, '');
			}

      const params = {
				title: title,
				text: content
			};

			this.$modal.show(params)
		},
		
		addSprint() {
			if (this.sprints < this.sprintsLimit) {
				this.sprints++; // Add sprint
				this.drawPath(); // Rerender SVG path
			}
		},
		
		drawPath(sprints) {

			// SVG REFERENCE: https://css-tricks.com/svg-path-syntax-illustrated-guide/

			// starting point
			this.pathContent = `
					M ${(this.pathBgStrokeWidth / 2) + (this.circleRadius)} ${this.pathHeight / 2}
			`;
			
			// for loop with staring index 1 instead of 0
			for (let sprint = 1; sprint < sprints + 1; sprint++) {
				// if sprint is even number
				if(sprint % 2 == 0) {
					// [T] (reflects previous curve) [X-position] [Y-position]
					let newPath = `
						T ${sprint * this.pathSpacing + (this.pathBgStrokeWidth / 2) + (this.circleRadius)} ${this.pathHeight / 2}
					`;
					// add new path to the old one
					this.pathContent = this.pathContent + newPath;
				}
				
				// else if sprint is not even number
				else {
					// [Q] (creates a Quadratic curve)
					// [X-position for curve] [Y-position for curve],
					// [X-position for end-point] [Y-position for end-point]
					let newPath = `
						Q ${(sprint * this.pathSpacing) + (this.pathBgStrokeWidth / 2) + (this.circleRadius) - (this.pathSpacing / 2) } 0,
						${(sprint * this.pathSpacing) + (this.pathBgStrokeWidth / 2) + (this.circleRadius)} ${this.pathHeight / 2}
					`;
					// add new path to the old one
					this.pathContent = this.pathContent + newPath;
				}

			}

		},

  }

}
</script>

<style scoped>
	.map, svg {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 42.5%;
		left: 0;
		transform: translateY(-50%);
		/* z-index: -1; */
	}

	.map {
		width: 50%;
		height: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* background-color: #2E86AB; */
	}

	.sprint {
		cursor: pointer;
	}

	[class*="dot"] {
		z-index: 2;
	}

	button {
		position: absolute;
		display: block;
		bottom: 0;
		margin: 0 auto;
	}

</style>