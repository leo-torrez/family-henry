import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSuccessComponent } from './buttons/button-success/button-success.component';
/* FONT AWESOME */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSquare,
  faCheckSquare,
  faUser,
  faEnvelope,
  faHandPeace,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
/** */
@NgModule({
  declarations: [ButtonSuccessComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ButtonSuccessComponent, FontAwesomeModule]
})
export class SharedModule {
  constructor() {
    library.add(faSquare, faCheckSquare, faUser, faEnvelope, faHandPeace, far, faCheck);
  }
}
