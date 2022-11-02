import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() displayMessage: any;
  title: any;
  description: any;

  constructor(public dialog: MatDialog) { }
  

  ngOnInit(): void {
  }
  openDialog(noteobject:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '450px',
      data:noteobject,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title=result;
      this.description=result;
    });
  }
  messageReceivedFromNote(e:any){  // this is used for data sharing between icons(child) and displaynotes(parent)
    console.log(e);
    
  }

}
