<template>
  <div class="Home">
    <Map/>
    <left-widget-bar/>
    <right-widget-bar/>
    <bottom-bar/>
  </div>
</template>

<script>
// @ is an alias to /src
import getUser from "@/components/helpers/getUser";
import Map from '@/components/sections/Map.vue'
import LeftWidgetBar from '@/components/pillars/LeftWidgetBar.vue'
import RightWidgetBar from '@/components/pillars/RightWidgetBar.vue'
import BottomBar from '@/components/pillars/BottomBar.vue'

export default {
  name: 'Home',
  components: {
    LeftWidgetBar,
    RightWidgetBar,
    BottomBar,
    Map
	},
	async created() {
		const token = localStorage.getItem('token');
		const urlCode = new URL(location.href).searchParams.get('code');

		if(token != null) {
			
			this.$store.dispatch('setToken', token);

			let userId = localStorage.getItem('userId');
			let courseId = localStorage.getItem('courseId');

			let newUser;

			if(userId != null && courseId != null) {
				newUser = {
					userId: userId,
					courseId: courseId
				}
			} else {
				newUser = await getUser(urlCode);
				localStorage.setItem('courseId', newUser.courseId);
				localStorage.setItem('userId', newUser.userId);
			}
			
			this.$store.dispatch('setUser', newUser);
			
		} else {
			this.$router.push('token');
		}
	}

}

</script>