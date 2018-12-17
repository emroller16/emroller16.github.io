import HomePage from './home/HomePage.vue';
import AmistadWork from './portfolio/AmistadWork.vue';
import CruWork from './portfolio/CruWork.vue';
import RootCellarWork from './portfolio/RootCellarWork.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/amistad', component: AmistadWork },
  { path: '/cru-uconn', component: CruWork },
  { path: '/root-cellar', component: RootCellarWork },
];

export default routes;
