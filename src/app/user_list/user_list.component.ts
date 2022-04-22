import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './user_list.component.html',
  styleUrls: ['./user_list.component.css']
})

export class User_listComponent {
  isLoading = false


  userListing(loginForm: NgForm) {

  }
}
