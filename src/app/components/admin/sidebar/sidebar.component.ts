import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() {
   }

  ngOnInit(): void {
    const allSideMenu =  document.querySelectorAll('#sidebar .side-menu.top li a')
    allSideMenu.forEach((item:any) => {
      const li = item.parentElement;

      item.addEventListener('click', function () {
        allSideMenu.forEach((i:any)=> {
          i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
      })
    });
  }




  // active() {
  //   this.isActive = true
  // }
}
