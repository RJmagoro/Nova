import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'products2', loadChildren: './products2/products2.module#Products2PageModule' },
  { path: 'cash-payout', loadChildren: './cash-payout/cash-payout.module#CashPayoutPageModule' },
  { path: 'buynow2', loadChildren: './buynow2/buynow2.module#Buynow2PageModule' },
  { path: 'claims', loadChildren: './claims/claims.module#ClaimsPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
  { path: 'beef', loadChildren: './beef/beef.module#BeefPageModule' },
  { path: 'grocery', loadChildren: './grocery/grocery.module#GroceryPageModule' },
  { path: 'catering', loadChildren: './catering/catering.module#CateringPageModule' },
  { path: 'resource', loadChildren: './resource/resource.module#ResourcePageModule' },
  { path: 'buynow', loadChildren: './buynow/buynow.module#BuynowPageModule' },
  { path: 'global', loadChildren: './global/global.module#GlobalPageModule' },
  { path: 'buynow3', loadChildren: './buynow3/buynow3.module#Buynow3PageModule' },
  { path: 'buynow4', loadChildren: './buynow4/buynow4.module#Buynow4PageModule' },
  { path: 'buynow5', loadChildren: './buynow5/buynow5.module#Buynow5PageModule' },
  { path: 'buynow6', loadChildren: './buynow6/buynow6.module#Buynow6PageModule' },
  { path: 'buynow7', loadChildren: './buynow7/buynow7.module#Buynow7PageModule' },
  { path: 'buynow8', loadChildren: './buynow8/buynow8.module#Buynow8PageModule' },
  { path: 'buynow9', loadChildren: './buynow9/buynow9.module#Buynow9PageModule' },
  { path: 'buynow10', loadChildren: './buynow10/buynow10.module#Buynow10PageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'password', loadChildren: './password/password.module#PasswordPageModule' },
  { path: 'policies', loadChildren: './policies/policies.module#PoliciesPageModule' },
  { path: 'claimform', loadChildren: './claimform/claimform.module#ClaimformPageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'payments', loadChildren: './payments/payments.module#PaymentsPageModule' },
  { path: 'burial', loadChildren: './burial/burial.module#BurialPageModule' },
  { path: 'paystack', loadChildren: './paystack/paystack.module#PaystackPageModule' },
  { path: 'beneficiary', loadChildren: './beneficiary/beneficiary.module#BeneficiaryPageModule' },
  { path: 'spouse1', loadChildren: './spouse1/spouse1.module#Spouse1PageModule' },
  { path: 'spouse2', loadChildren: './spouse2/spouse2.module#Spouse2PageModule' },
  { path: 'spouse3', loadChildren: './spouse3/spouse3.module#Spouse3PageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
  { path: 'remove', loadChildren: './remove/remove.module#RemovePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
