import { Routes } from '@angular/router';
import { Main } from './layout/main/main';
import { roleGuard } from './core/guards/role-guard';
import { Role } from './shared/constants/app-enums';
import { Register } from './shared/components/register/register';
import { Login } from './shared/components/login/login';
import { Hotels } from './features/hotels/hotels';
import { Hotel } from './features/hotels/hotel/hotel';
import { Booking } from './features/booking/booking';
import { Payment } from './features/payment/payment';
import { Profile } from './shared/components/profile/profile';
import { AddHotel } from './shared/components/hotel-manager/add-hotel/add-hotel';
import { UpdateHotel } from './shared/components/hotel-manager/update-hotel/update-hotel';
import { AddRooms } from './shared/components/hotel-manager/add-rooms/add-rooms';
import { UpdateRooms } from './shared/components/hotel-manager/update-rooms/update-rooms';
import { InitInventory } from './shared/components/hotel-manager/init-inventory/init-inventory';
import { AdminDashboard } from './shared/components/admin/admin-dashboard/admin-dashboard';

export const routes: Routes = [
    
  // public routes
  { path: '', component: Main },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'hotels', component: Hotels },
  { path: 'hotels/:id', component: Hotel },

  // user's protected routes
  { path: 'profile', component: Profile, canActivate: [roleGuard([Role.USER])] },
  { path: 'booking', component: Booking, canActivate: [roleGuard([Role.USER])] },
  { path: 'payment', component: Payment, canActivate: [roleGuard([Role.USER])] },
  
  // hotel-manager's protected routes
  { path: 'add-hotel', component: AddHotel, canActivate: [roleGuard([Role.HOTEL_MANAGER])] },
  { path: 'update-hotel', component: UpdateHotel, canActivate: [roleGuard([Role.HOTEL_MANAGER])] },
  { path: 'add-room', component: AddRooms, canActivate: [roleGuard([Role.HOTEL_MANAGER])] },
  { path: 'update-hotel', component: UpdateRooms, canActivate: [roleGuard([Role.HOTEL_MANAGER])] },
  { path: 'init-inventory', component: InitInventory, canActivate: [roleGuard([Role.HOTEL_MANAGER])] },

  // admin's protected routes
  { path: 'admin-dashboard', component: AdminDashboard, canActivate: [roleGuard([Role.ADMIN])] },
];
