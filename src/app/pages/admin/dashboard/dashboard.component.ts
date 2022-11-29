import { Component, TemplateRef } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/service/users.service';
import { LoginComponent } from '../../login/login.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user: User[] = [];
  modalRef?: BsModalRef;
  image!: string;
  imageFile!: File;
  formAdd: FormGroup;
  refresh = new Subject<void>();

  constructor(
    private userServices: UsersService,
    private modalService: BsModalService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.userServices.listUsers().subscribe((response) => {
      console.log(response);
      this.user = response;
    });
    this.formAdd = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      noTelp: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }

  get errorControl() {
    return this.formAdd.controls;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  showPreview(event: any) {
    if (event) {
      const file = event.target.files[0];
      this.imageFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  doAddUser() {
    this.userServices
      .uploadImage(this.imageFile)
      .pipe(
        switchMap((val) => {
          const payload = {
            username: this.formAdd.value.username,
            email: this.formAdd.value.email,
            noTelp: this.formAdd.value.noTelp,
            password: this.formAdd.value.password,
            role: this.formAdd.value.role,
            image: val.data
            // tanggalLahir: this.formAdd.value.tanggalLahir,
          };
          return this.authService.register(payload).pipe(map((val) => val));
        })
      )
      .subscribe((response) => console.log(response));
  }
}
