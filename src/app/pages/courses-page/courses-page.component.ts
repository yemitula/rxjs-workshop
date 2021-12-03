import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {ApiService, Course, School} from 'src/app/services/api.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  courses$: Observable<Course[]> = this.api.courses().pipe(
    shareReplay(),
  );
  courseCount$: Observable<number> = this.courses$.pipe(
    map((courses: Course[]) => courses.length)
  )

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
  }

  queryChanged(query: string) {
    console.log('Query Changed: ', query);
  }

  schoolChanged(school: School) {
    console.log('School Changed: ', school);
  }
}
