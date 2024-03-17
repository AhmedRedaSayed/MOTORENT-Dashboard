import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../Serivces/messages.service';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatFormField } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CdkAccordionModule,MatFormField,ReactiveFormsModule,FormsModule],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent implements OnInit {
  messages!: any [];
  formGroup!:FormGroup
  replayIndex: number = -1;
  constructor(private messagesService:MessagesService,formBuilder:FormBuilder){
    this.formGroup = formBuilder.group({
      replay :new FormControl('', )})
  }
  ngOnInit(): void {
    this.getAllMessages()
  }

  selectedStatus: string = '';
  getAllMessages(selectedStatus?:string)
  {
    return this.messagesService.getMessages().subscribe({
      next:(data)=>
      {
        this.messages=data.data;
        if (selectedStatus) {
          this.messages = this.messages.filter(message => message.status === selectedStatus);
        }

      }
    })
  }

  handleReplay(index:any)
  {
    this.replayIndex = this.replayIndex === index ? -1 : index;

  }
  replayMessage(id:any)
  {
    console.log(this.formGroup.value)
    this.messagesService.replayMessage(id,this.formGroup.value).subscribe({
      next:(data)=>
      {
        this.replayIndex = this.replayIndex === id ? -1 : id;
        this.getAllMessages()
      }
    })
  }


  }


