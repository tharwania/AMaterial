import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  folders = [
    {
      name: 'Updates',
      icon: 'notification_important'
    },
    {
      name: 'Messages',
      icon: 'message'
    },
    {
      name: 'Comments',
      icon: 'comment'
    },
    {
      name: 'Tasks',
      icon: 'format_list_numbered'
    }
  ];
  notes = [
    {
      name: 'Profile',
      icon: 'account_circle'
    },
    {
      name: 'Payments',
      icon: 'payment'
    },
    {
      name: 'Projects',
      icon: 'account_balance'
    },
    {
      name: 'Lock Account',
      icon: 'lock'
    },
    {
      name: 'Logout',
      icon: 'exit_to_app'
    }
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
