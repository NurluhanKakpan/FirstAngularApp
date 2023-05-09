import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../config/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {

  constructor(public modalService: ModalService){

  }

  @Input() title: string;
  ngOnInit(): void {
  }

}
