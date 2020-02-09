import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class FormBuildService {
  notifyDrop = new BehaviorSubject<any>(null);

  constructor() { }
}
