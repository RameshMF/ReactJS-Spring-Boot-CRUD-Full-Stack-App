import ListEmployeeComponent from '../components/ListEmployeeComponent';
import ListVendorComponent from '../components/ListVendorComponent';
import CreateEmployeeComponent from '../components/CreateEmployeeComponent';
import UpdateEmployeeComponent from '../components/UpdateEmployeeComponent';
import ViewEmployeeComponent from '../components/ViewEmployeeComponent';
import CreateVendorComponent from '../components/CreateVendorComponent';
import UpdateVendorComponent from '../components/UpdateVendorComponent';
import ViewVendorComponent from '../components/ViewVendorComponent';
import HomeComponent from '../components/HomeComponent';
import LoginComponent from '../components/LoginComponent';
// Define your routes in an array
const routes = [
  {
    path: '/',
    exact: true,
    component: LoginComponent,
  },
  {
    path: '/home',
    component: HomeComponent,
  },
  {
    path: '/employees',
    component: ListEmployeeComponent,
  },
  {
    path: '/add-employee/:id',
    component: CreateEmployeeComponent,
  },
  {
    path: '/view-employee/:id',
    component: ViewEmployeeComponent,
  },
  {
    path: '/vendors',
    component: ListVendorComponent,
  },
  {
    path: '/add-vendor/:id',
    component: CreateVendorComponent,
  },
  {
    path: '/view-vendor/:id',
    exact: true,
    component: ViewVendorComponent,
  }
];

export default routes;
