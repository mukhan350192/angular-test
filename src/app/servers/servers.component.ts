import {Component} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
      .online {
          color: white;
      }
  `]
})
export class ServersComponent {
  allowNerServer: boolean = false;
  serverCreationStatus = 'No server created was';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer','TestServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowNerServer = true;
    }, 2000)
  }

  ngOnInit() {
  }


}
