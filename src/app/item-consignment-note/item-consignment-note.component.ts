import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ConsignmentNotesService} from '../consignment-notes.service';
import {StatusConsignmentNote} from './statusConsignmentNote.enum';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-item-consignment-note',
  templateUrl: './item-consignment-note.component.html',
  styleUrls: ['./item-consignment-note.component.less']
})

export class ItemConsignmentNoteComponent implements OnInit, OnDestroy {
  @Input() consignmentNote;
  private consignmentNoteDate;
  private buttonStatus: string;
  subscription;

  constructor(private consignmentNotesService: ConsignmentNotesService,
              public dialog: MatDialog,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.consignmentNoteDate = {
      ...this.consignmentNote || '',
      date: `${this.consignmentNote.createdAt.slice(5, 10)}-${this.consignmentNote.createdAt.slice(0, 4)}` || '',
      dispatcher: `${this.consignmentNote.user.surname} ${this.consignmentNote.user.name} ${this.consignmentNote.user.patronymic}` || ''
    };

    this.changeStatusButton();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: 'You definitely want to mark as "Checked"?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.changeStatus();
      }
    });
  }

  changeStatus() {
    this.subscription = this.consignmentNotesService.putConsignmentNoteStatus(this.consignmentNote.id).subscribe((response) => {
      return response;
    });
    this.consignmentNoteDate.status = StatusConsignmentNote.consignmentNoteChecked;
    this.changeStatusButton();
  }

  changeStatusButton() {
    this.buttonStatus = (this.consignmentNoteDate.status === StatusConsignmentNote.consignmentNoteRegistered) ? StatusConsignmentNote.buttonRegistered : StatusConsignmentNote.buttonChecked;
  }

  ngOnDestroy() {
  }
}
