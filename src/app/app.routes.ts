import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        
  path: '',
  loadComponent: () => import('./pages/home/home/home.component').then(m => m.HomeComponent),
  children: [
    {
      path: 'profile',
      loadComponent: () => import('./pages/dashboard/profile/profile/profile.component').then(m => m.ProfileComponent),
      title: 'Profile'
    },
     {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        title: 'Dashboard',
      },
      {
        path:'addUser',
        loadComponent:()=>import('./pages/User/add-user/add-user/add-user.component').then((m)=>m.AddUserComponent),
        title:'Add User'
      },
      {
        path:'brandLogo',
        loadComponent:()=>import('./pages/master/brandLogo/brand-logo/brand-logo.component').then((m)=>m.BrandLogoComponent),
        title:'Logo'
      },
      {
        path:'category',
        loadComponent:()=>import('./pages/master/category/category/category.component').then((m)=>m.CategoryComponent),
        title:'Category'
      },
       {
        path:'size',
        loadComponent:()=>import('./pages/master/size/size/size.component').then((m)=>m.SizeComponent),
        title:'size'
      },
      {
        path:'color',
        loadComponent:()=>import('./pages/master/color/color/color.component').then((m)=>m.ColorComponent),
        title:'color'
      },
      {
        path:'usertype',
        loadComponent:()=>import('./pages/master/userType/usertype/usertype.component').then((m)=>m.UsertypeComponent),
        title:'User Type'
      },
      {
        path:'addProduct',
        loadComponent:()=>import('./pages/Product/Add-Product/add-product/add-product.component').then((m)=>m.AddProductComponent),
        title:'Add Product'
      },
      {
        path:'userList',
        loadComponent:()=>import('./pages/User/list-user/list-user/list-user.component').then((m)=>m.ListUserComponent),
        title:'User List'
      },
      {
        path:'ProductList',
        loadComponent:()=>import('./pages/Product/ProductList/product-list/product-list.component').then((m)=>m.ProductListComponent),
        title:'Product List'
      },
      
  ],
  title: 'Home' },
    {path:'login',
        loadComponent:()=>import('./pages/login/login/login.component').then(m=>m.LoginComponent), 
        title:'login'},

];
