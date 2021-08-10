<template>
  <div>
    <v-calendar
      class="widget-calendar"
      is-expanded
      :attributes="attributes">
      
			<template #day-popover="{ dayTitle, attributes }">
        <div>
          <div class="text-xs text-gray-300 font-semibold text-center">
            {{ dayTitle }}
          </div>
          
					<popover-row
            style="pointer-events: initial; cursor: pointer"
            v-for="attr in attributes"
            :key="attr.key"
            :attribute="attr">
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
import PopoverRow from "v-calendar/lib/components/popover-row.umd.min";

export default {
	components: { PopoverRow },
	props: [ 'todos' ],
	
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

}
</script>


<style lang="scss" scoped>

.widget-calendar {
	border: 0;
}

</style>