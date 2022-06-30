import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private visible = false
  private modals:IModal[] = []

  constructor() { }
  isModalOpen(id:string):boolean {
    const selectedModals = this.modals.find(modal=> modal.id === id)
    return !!selectedModals?.visible
  }

  toggleModal(id:string) {
    const selectedModals = this.modals.find(modal=> modal.id === id)
    if(selectedModals) {
      selectedModals.visible = !selectedModals.visible
    }
  }

  register(id:string) {
    this.modals.push({
      id,
      visible:false
    })

  }
  unregister(id:string):void {
    this.modals = this.modals.filter(
      modal => modal.id !== id
    )
  }
}
