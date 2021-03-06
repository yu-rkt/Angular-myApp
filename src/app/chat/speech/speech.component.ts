import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/interfaces/message';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss'],
})
export class SpeechComponent implements OnInit {
  @Input() chat: Message;

  constructor() {}

  ngOnInit(): void {}
}
