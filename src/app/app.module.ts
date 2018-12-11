import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicLineChartComponent } from './basic-line-chart/basic-line-chart.component';
import { BasicAreaChartComponent } from './basic-area-chart/basic-area-chart.component';
import { SmoothedLineChartComponent } from './smoothed-line-chart/smoothed-line-chart.component';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';
import { StackedLineChartComponent } from './stacked-line-chart/stacked-line-chart.component';
import { RainfallComponent } from './rainfall/rainfall.component';
import { LargeScaleAreaChartComponent } from './large-scale-area-chart/large-scale-area-chart.component';
import { ConfidenceBandComponent } from './confidence-band/confidence-band.component';
import { DynamicDataTimeAxisComponent } from './dynamic-data-time-axis/dynamic-data-time-axis.component';
import { RainfallAndWaterFlowComponent } from './rainfall-and-water-flow/rainfall-and-water-flow.component';
import { BeijingAqiComponent } from './beijing-aqi/beijing-aqi.component';
import { TryDraggingThesePointsComponent } from './try-dragging-these-points/try-dragging-these-points.component';
import { LineEasingComponent } from './line-easing/line-easing.component';
import { LineGradientComponent } from './line-gradient/line-gradient.component';
import { CustomGraphicComponentComponent } from './custom-graphic-component/custom-graphic-component.component';
import { LineChartInCartesianCoordinateSystemComponent } from './line-chart-in-cartesian-coordinate-system/line-chart-in-cartesian-coordinate-system.component';
import { LogAxisComponent } from './log-axis/log-axis.component';
import { TemperatureChangeInTheComingWeekComponent } from './temperature-change-in-the-coming-week/temperature-change-in-the-coming-week.component';
import { ClickToAddPointsComponent } from './click-to-add-points/click-to-add-points.component';
import { TwoValueAxesInPolar1Component } from './two-value-axes-in-polar1/two-value-axes-in-polar1.component';
import { TwoValueAxesInPolar2Component } from './two-value-axes-in-polar2/two-value-axes-in-polar2.component';
import { DistributionOfElectricityComponent } from './distribution-of-electricity/distribution-of-electricity.component';
import { StepLineComponent } from './step-line/step-line.component';
import { LineStyleAndItemStyleComponent } from './line-style-and-item-style/line-style-and-item-style.component';
import { TooltipAndDatazoomOnMobileComponent } from './tooltip-and-datazoom-on-mobile/tooltip-and-datazoom-on-mobile.component';
import { LineYCategoryComponent } from './line-y-category/line-y-category.component';
import { MultipleXAxesComponent } from './multiple-x-axes/multiple-x-axes.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicLineChartComponent,
    BasicAreaChartComponent,
    SmoothedLineChartComponent,
    StackedAreaChartComponent,
    StackedLineChartComponent,
    RainfallComponent,
    LargeScaleAreaChartComponent,
    ConfidenceBandComponent,
    DynamicDataTimeAxisComponent,
    RainfallAndWaterFlowComponent,
    BeijingAqiComponent,
    TryDraggingThesePointsComponent,
    LineEasingComponent,
    LineGradientComponent,
    CustomGraphicComponentComponent,
    LineChartInCartesianCoordinateSystemComponent,
    LogAxisComponent,
    TemperatureChangeInTheComingWeekComponent,
    ClickToAddPointsComponent,
    TwoValueAxesInPolar1Component,
    TwoValueAxesInPolar2Component,
    DistributionOfElectricityComponent,
    StepLineComponent,
    LineStyleAndItemStyleComponent,
    TooltipAndDatazoomOnMobileComponent,
    LineYCategoryComponent,
    MultipleXAxesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
