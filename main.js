Vue.component('message', {
	props: ['title', 'body'],

	data() {
		return {
			isVisible: true
		}
	},

	template: `
		<article class="message" v-show="isVisible">
		  <div class="message-header">
		    {{ title }}
		    <button type="button" @click="hideModal">x</button>
		  </div>
		  <div class="message-body">
		    {{ body }}
		  </div>
		</article>
	`,

	methods: {
		hideModal() {
			this.isVisible = false;
		}
	}

});

Vue.component('task', {

	template: '<li><slot></slot></li>',

});

new Vue({
	el: '#root'
});