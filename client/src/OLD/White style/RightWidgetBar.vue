<template>
  <div class="RightBar" id="RightBar">
    <h3>Personal</h3>
    <personal-info />
    <br>
    <DiamondCoin />
    <br>
    <v-calendar
      class="rightbar-calendar"
      is-expanded
      :attributes="attributes"
      :theme-styles="themeStyles"
    >
      <template #day-popover="{ day, dayTitle, attributes }">
        <div>
          <div class="text-xs text-gray-300 font-semibold text-center">
            {{ dayTitle }}
          </div>
          <popover-row
            style="pointer-events: initial; cursor: pointer"
            v-for="attr in attributes"
            :key="attr.key"
            :attribute="attr"
          >
            <span @click="test(attr.customData.description)">
              {{ attr.customData.description }}
            </span>
          </popover-row>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script>
import DiamondCoin from "@/components/metrics/DiamondCoin.vue";
import PersonalInfo from "@/components/metrics/PersonalInfo.vue";
// import { setupCalendar } from "v-calendar";
import PopoverRow from "v-calendar/lib/components/popover-row.umd.min";

// setupCalendar({
//   locale: "pt-PT",
//   themeStyles: {
//     wrapper: {
//       fontSize: "17px",
//       lineHeight: "21px",
//       boxShadow: "5px 5px 10px 1px rgba( 0, 0, 0, .10 )",
//     },
//     header: {
//       color: "#f7890b",
//       textTransform: "capitalize",
//     },
//     weekdays: {
//       color: "#ededed",
//     },
//   },
//   attributes: [
//     {
//       contentStyle: {
//         color: "#ff4d4d", // Red
//         fontWeight: 600,
//         fontSize: "20px",
//       },
//       popover: { color: "yellow" },
//       highlight: {
//         backgroundColor: "purple",
//       },
//     },
//   ],
// });

export default {
  components: { DiamondCoin, PersonalInfo, PopoverRow },

  data() {

    const todos = [
      {
        description: "Take Noah to basketball practice.",
        isComplete: false,
        dates: { weekdays: 6 }, // Every Friday
        color: "red",
      },
      {
        description: "HOLA MUNDO",
        isComplete: true,
        dates: new Date(2020, 11, 4),
        color: "red",
      },
    ];

    return {
			themeStyles: {
        //  weekdays: {
        //   color: '#6eded1', // New color
        //   fontWeight: '600', // And bolder font weight
				// },
				header({ position }) {
          return (position === 1) && {
            borderLeft: '1px solid #dadada'
          };
        }
      },
      incId: todos.length,
      todos,
      
    };
  },

  methods: {
    test(text) {
      alert(text);
    },
  },

  computed: {
    attributes() {
      return [
        // Attributes for todos
        ...this.todos.map((todo) => ({
          dates: todo.dates,
          dot: {
            color: todo.isComplete ? todo.color : "blue",
            // class: todo.isComplete ? 'opacity-75' : '',
          },
          popover: {
            label: todo.description,
            // visibility: 'focus'
						visibility: "click",
						// isInteractive: true
          },
          customData: todo,
        })),
      ];
    },
  },
};
</script>

<!-- <style lang="scss" scoped> -->
<style lang="scss">



div.RightBar {
  position: absolute;
  top: 50%;
  right: 0;
  width: 15vw;
  height: 75%;
  padding: 20px;
  border-radius: 25px;
  opacity: 0.9;
  background:whitesmoke;
  transform: translateY(-50%);
}

.rightbar-calendar,
.vc-container, .vc-container *,
.vc-pane-container {
	border: 0 !important;
}

.rightbar-calendar,
.vc-day,
.vc-weekday {
	font-family: 'Open Sans', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	
	div.vc-header,
	.vc-nav-popover-container {
		font-family: 'Montserrat', sans-serif;
	}
}


// .vc-popover-content-wrapper[data-v-4cb7b681]:not(.is-interactive) {
//   pointer-events: initial !important;
// }

</style>