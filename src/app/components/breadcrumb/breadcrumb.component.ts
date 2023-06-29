import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.buildBreadcrumbs(this.activatedRoute.root))
      )
      .subscribe((breadcrumbs) => {
        this.breadcrumbs = breadcrumbs;
      });
  }

  buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data['breadcrumb']
        : '';

    const path =
      route.routeConfig && route.routeConfig.path ? route.routeConfig.path : '';

    const nextUrl = `${url}${path}/`;

    const breadcrumb: Breadcrumb = {
      label: label,
      url: nextUrl,
    };

    const newBreadcrumbs = [...breadcrumbs, breadcrumb];

    if (route.firstChild) {
      return this.buildBreadcrumbs(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}

interface Breadcrumb {
  label: string;
  url: string;
}
