import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(public modal: ModalService, public el: ElementRef) {
   }
   @Input() modalID=''
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }
  closeModal(modalID:string):void {
    this.modal.toggleModal(this.modalID)
  }

}
