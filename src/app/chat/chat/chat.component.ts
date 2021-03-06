import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chats$ = this.chatService
    .getAllChat(this.chatService.uid)
    .pipe(tap((data) => console.log(data)));
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {}
}
