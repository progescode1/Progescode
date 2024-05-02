import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
};

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./demo/components/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    ),
            },

           
            {
                path: 'uikit',
                data: { breadcrumb: 'UI Kit' },
                loadChildren: () =>
                    import('./demo/components/uikit/uikit.module').then(
                        (m) => m.UIkitModule
                    ),
            },
            {
                path: 'utilities',
                data: { breadcrumb: 'Utilities' },
                loadChildren: () =>
                    import('./demo/components/utilities/utilities.module').then(
                        (m) => m.UtilitiesModule
                    ),
            },
            {
                path: 'pages',
                data: { breadcrumb: 'Pages' },
                loadChildren: () =>
                    import('./demo/components/pages/pages.module').then(
                        (m) => m.PagesModule
                    ),
            },
            {
                path: 'profile',
                data: { breadcrumb: 'User Management' },
                loadChildren: () =>
                    import('./demo/components/profile/profile.module').then(
                        (m) => m.ProfileModule
                    ),
            },
            {
                path: 'client',
                data: { breadcrumb: 'Client Management' },
                loadChildren: () =>
                    import('./demo/components/client/client.module').then(
                        (m) => m.ClientModule
                    ),
            },
            {
                path: 'cabinet',
                data: { breadcrumb: 'Cabinet Management' },
                loadChildren: () =>
                    import('./demo/components/cabinet/cabinet.module').then(
                        (m) => m.CabinetModule
                    ),
            },
            {
                path: 'associee',
                data: { breadcrumb: 'Associée' },
                loadChildren: () =>
                    import('./demo/components/Associee/associe.module').then(
                        (m) => m.AssocieModule
                    ),
            },
            {
                path: 'avantage',
                data: { breadcrumb: 'Avantage' },
                loadChildren: () =>
                    import('./demo/components/Avantage/avantage.module').then(
                        (m) => m.AvantageModule
                    ),
            },
            {
                path: 'debour',
                data: { breadcrumb: 'Debour' },
                loadChildren: () =>
                    import('./demo/components/Debour/debour.module').then(
                        (m) => m.DebourModule
                    ),
            },
            {
                path: 'facture',
                data: { breadcrumb: 'Facture' },
                loadChildren: () =>
                    import('./demo/components/Facture/facture.module').then(
                        (m) => m.FactureModule
                    ),
            },
            {
                path: 'regime',
                data: { breadcrumb: 'Regime' },
                loadChildren: () =>
                    import('./demo/components/Regime/regime.module').then(
                        (m) => m.RegimeModule
                    ),
            },
            {
                path: 'banque',
                data: { breadcrumb: 'Banque' },
                loadChildren: () =>
                    import('./demo/components/Banque/banque.module').then(
                        (m) => m.BanqueModule
                    ),
            },
            {
                path: 'service',
                data: { breadcrumb: 'Service' },
                loadChildren: () =>
                    import('./demo/components/Service/service.module').then(
                        (m) => m.ServiceModule
                    ),
            },
            {
                path: 'documentation',
                data: { breadcrumb: 'Documentation' },
                loadChildren: () =>
                    import(
                        './demo/components/documentation/documentation.module'
                    ).then((m) => m.DocumentationModule),
            },
            {
                path: 'blocks',
                data: { breadcrumb: 'Prime Blocks' },
                loadChildren: () =>
                    import(
                        './demo/components/primeblocks/primeblocks.module'
                    ).then((m) => m.PrimeBlocksModule),
            },
            {
                path: 'ecommerce',
                data: { breadcrumb: 'E-Commerce' },
                loadChildren: () =>
                    import('./demo/components/ecommerce/ecommerce.module').then(
                        (m) => m.EcommerceModule
                    ),
            },
            {
                path: 'apps',
                data: { breadcrumb: 'Apps' },
                loadChildren: () =>
                    import('./demo/components/apps/apps.module').then(
                        (m) => m.AppsModule
                    ),
            },
        ],
    },
    {
        path: 'auth',
        data: { breadcrumb: 'Auth' },
        loadChildren: () =>
            import('./demo/components/auth/auth.module').then(
                (m) => m.AuthModule
            ),
    },
    {
        path: 'notfound',
        loadChildren: () =>
            import('./demo/components/notfound/notfound.module').then(
                (m) => m.NotfoundModule
            ),
    },
    {
        path: 'landing',
        loadChildren: () =>
            import('./demo/components/landing/landing.module').then(
                (m) => m.LandingModule
            ),
    },
    {
        path:'login',
        loadChildren:()=>
            import('./demo/components/auth/login/login.module').then((m)=>m.LoginModule)
    },
    { path: '**', redirectTo: '/notfound' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
