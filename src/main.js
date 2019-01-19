import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueScrollactive from 'vue-scrollactive';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faEnvelope);
library.add(faMapMarkedAlt);
library.add(faPhone);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(VueScrollactive);

new Vue({
	el: '#app',
	render: (h) => h(App)
});
