import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {TableCompaniesComponent} from './table-companies/table-companies.component';
import {ItemCompanyComponent} from './item-company/item-company.component';
import {CompanyService} from './company.service';
import {ErrorService} from './error.service';
import {FormCompanyComponent} from './form-company/form-company.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TableUserComponent} from './table-user/table-user.component';
import {ItemUserComponent} from './item-user/item-user.component';
import {UserService} from './user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule, MatButtonModule, MatFormFieldModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {PopupComponent} from './popup/popup.component';
import {LayoutModule} from '@angular/cdk/layout';
import {FormUserComponent} from './form-user/form-user.component';
import {MaterialModule} from './material.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown-angular7';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {JwtInterceptor} from './jwt.interceptor';
import {JwtModule} from '@auth0/angular-jwt';
import {RoleGuardService} from './roleGuard.service';
import {Role} from './login/Role.enum';
import {VehicleService} from './vehicle.service';
import {ValidationMessagesComponent} from './validation-messages/validation-messages.component';
import {TableWarehousesComponent} from './table-warehouses/table-warehouses.component';
import {ItemWarehouseComponent} from './item-warehouse/item-warehouse.component';
import {FormWarehouseComponent} from './form-warehouse/form-warehouse.component';
import {WarehouseService} from './warehouse.service';
import {TableVehiclesComponent} from './table-vehicles/table-vehicles.component';
import {ItemVehicleComponent} from './item-vehicle/item-vehicle.component';
import {TableWareOwnersComponent} from './table-ware-owners/table-ware-owners.component';
import {ItemWareOwnersComponent} from './item-ware-owners/item-ware-owners.component';
import {ConsignmentNotesService} from './consignment-notes.service';
import {TableConsignmentNotesComponent} from './table-consignment-notes/table-consignment-notes.component';
import {FormConsignmentNotesComponent} from './form-consignment-notes/form-consignment-notes.component';
import {ItemConsignmentNoteComponent} from './item-consignment-note/item-consignment-note.component';
import {WareOwnerService} from './wareOwner.service';
import {FormVehicleComponent} from './form-vehicle/form-vehicle.component';
import {FormWareOwnerComponent} from './form-ware-owner/form-ware-owner.component';
import {MatSelectModule} from '@angular/material/select';

const  routes = [
  {path: '', redirectTo: '/companies', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'companies', component: TableCompaniesComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.systemAdmin]}},
  {path: 'companies/add', component: FormCompanyComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.systemAdmin]}},
  {path: 'companies/edit/:id', component: FormCompanyComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.systemAdmin]}},
  {path: 'users', component: TableUserComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.companyAdmin]}},
  {path: 'users/add', component: FormUserComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.companyAdmin]}},
  {path: 'users/edit/:id', component: FormUserComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.companyAdmin]}},
  {path: 'warehouses', component: TableWarehousesComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.companyAdmin, Role.dispatcher]}},
  {path: 'warehouses/add', component: FormWarehouseComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.companyAdmin]}},
  {path: 'warehouses/edit/:id', component: FormWarehouseComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.companyAdmin]}},
  {path: 'vehicles', component: TableVehiclesComponent, canActivate: [AuthGuard], data: {expectedRoles: [Role.companyAdmin]}},
  {path: 'vehicles/add', component: FormVehicleComponent, canActivate: [AuthGuard], data: {expectedRoles: [Role.companyAdmin]}},
  {path: 'vehicles/edit/:id', component: FormVehicleComponent, canActivate: [AuthGuard], data: {expectedRoles: [Role.companyAdmin]}},
  {path: 'consignment-notes', component: TableConsignmentNotesComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.companyAdmin, Role.dispatcher, Role.manager]}},
  {path: 'consignment-notes/add', component: FormConsignmentNotesComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.dispatcher]}},
  {path: 'consignment-notes/edit/:id', component: FormConsignmentNotesComponent, canActivate: [AuthGuard, RoleGuardService], data: {expectedRoles: [Role.dispatcher]}},
  {path: 'wareOwners', component: TableWareOwnersComponent, canActivate: [AuthGuard], data: {expectedRoles: [Role.companyAdmin, Role.dispatcher]}},
  {path: 'wareOwners/add', component: FormWareOwnerComponent, canActivate: [AuthGuard], data: {expectedRoles: [Role.companyAdmin]}},
  {path: 'wareOwners/edit/:id', component: FormWareOwnerComponent, canActivate: [AuthGuard], data: {expectedRoles: [Role.companyAdmin]}},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableCompaniesComponent,
    ItemCompanyComponent,
    FormCompanyComponent,
    TableUserComponent,
    ItemUserComponent,
    ConfirmationDialogComponent,
    PopupComponent,
    FormUserComponent,
    LoginComponent,
    ValidationMessagesComponent,
    TableWarehousesComponent,
    ItemWarehouseComponent,
    FormWarehouseComponent,
    TableVehiclesComponent,
    ItemVehicleComponent,
    ValidationMessagesComponent,
    TableConsignmentNotesComponent,
    FormConsignmentNotesComponent,
    ItemConsignmentNoteComponent,
    TableWareOwnersComponent,
    ItemWareOwnersComponent,
    FormVehicleComponent,
    FormWareOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatSnackBarModule,
    LayoutModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    JwtModule.forRoot({
      config: {
        whitelistedDomains: ['localhost:4200']
      }
    }),
    MatFormFieldModule,
    MaterialModule,
    MatSelectModule
  ],
  providers: [CompanyService, UserService, ErrorService, WarehouseService, WareOwnerService, VehicleService, ConsignmentNotesService, RoleGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent],
})
export class AppModule {}
