import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { FrontangularSharedModule } from 'app/shared/shared.module';
import { FrontangularCoreModule } from 'app/core/core.module';
import { FrontangularAppRoutingModule } from './app-routing.module';
import { FrontangularHomeModule } from './home/home.module';
import { FrontangularEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    FrontangularSharedModule,
    FrontangularCoreModule,
    FrontangularHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    FrontangularEntityModule,
    FrontangularAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class FrontangularAppModule {}
