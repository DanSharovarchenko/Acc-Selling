import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (this.data) this.isNew = false;
  }

  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? ''),
    price: new FormControl(this.data?.price ?? ''),
    description: new FormControl(this.data?.description ?? ''),
   
  });

  isNew: boolean = true;

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit() {
    this.data = {
      id: this.myForm.value.id,
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      description: this.myForm.value.description,
    
    };

    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {

  }

}
