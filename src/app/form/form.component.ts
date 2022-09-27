import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../Services/userdata.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { userData } from '../modal/interface';
declare var window: any; ////bts
declare let Email: any;
declare let emailjs: any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  category: any = [
    'Accelerator',
    'Admin',
    'Comm',
    'Forum',
    'Finance',
    'GSEA',
    'Integration',
    'Leader',
    'Learn',
    'Member',
    'Mentorship',
    'MyEO',
    'SPA',
  ];
  registerForm: FormGroup;
  userobj: userData = new userData();
  constructor(private fb: FormBuilder, private service: UserdataService) {
    this.registerForm = this.fb.group({
      chair: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      event: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      spend: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      date: new FormControl(''),
      category: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      recipt1: new FormControl(''),
      recipt2: new FormControl(''),
      note: new FormControl(''),
      submitted: new FormControl('', [Validators.required]),
      check: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      notification: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      submission: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal') ////bts
    );
  }
  //  *****  bts
  formModal: any;
  submitData() {
    this.userobj.id = this.registerForm.value.id;
    this.userobj.submitted_by = this.registerForm.value.chair;
    this.userobj.event_name = this.registerForm.value.event;
    this.userobj.spend_purpose = this.registerForm.value.spend;
    this.userobj.eo_category = this.registerForm.value.category;
    this.userobj.pay_to = this.registerForm.value.check;
    this.userobj.amount = this.registerForm.value.amount;
    // console.log(this.registerForm.value);
    // console.log(this.registerForm.value.category);

    // this.service.addUserdata(this.userobj);
    this.service.saveUserdata(this.userobj).subscribe((result) => {
      // console.log(result);
    });
    this.formModal.show();
    this.registerForm.reset();
  }
  // ****************   bts   *********

  get Chair(): FormControl {
    return this.registerForm.get('chair') as FormControl;
  }
  get Event(): FormControl {
    return this.registerForm.get('event') as FormControl;
  }
  get Spend(): FormControl {
    return this.registerForm.get('spend') as FormControl;
  }
  get Date(): FormControl {
    return this.registerForm.get('date') as FormControl;
  }
  get Category(): FormControl {
    return this.registerForm.get('category') as FormControl;
  }
  get Amount(): FormControl {
    return this.registerForm.get('amount') as FormControl;
  }
  get Recipt1(): FormControl {
    return this.registerForm.get('recipt1') as FormControl;
  }
  get Recipt2(): FormControl {
    return this.registerForm.get('recipt2') as FormControl;
  }
  get Note(): FormControl {
    return this.registerForm.get('note') as FormControl;
  }
  get Submitted(): FormControl {
    return this.registerForm.get('submitted') as FormControl;
  }
  get Check(): FormControl {
    return this.registerForm.get('check') as FormControl;
  }
  get Address(): FormControl {
    return this.registerForm.get('address') as FormControl;
  }
  get Notification(): FormControl {
    return this.registerForm.get('notification') as FormControl;
  }
  get Submission(): FormControl {
    return this.registerForm.get('submission') as FormControl;
  }
  // registerUser() {
  //   Email.send({
  //      SecureToken: '3de0b7f1-d8e9-4a17-879f-bbbdcee96396',
  //     Host: 'smtp.gmail.com',
  //     Username: 'badhanurvashi99@gmail.com',
  //     Password: 'lpubjmzoxduzxetg',
  //      kjwrajfzmimrjbor -- STMP
  //      lpubjmzoxduzxetg ---smtp
  //      0BE19A82B31C1FA7520B24F9FD2FFACECC6C
  //     To: 'urvashihsp@gmail.com',
  //     this.registerForm.value.notification
  //     From: 'badhanurvashi99@gmail.com',
  //     Subject: 'This is an enquiry contact form.',
  //     Body: 'helloo i am user',

  //   }).then((message: any) => alert(message));
  //   console.log(this.registerForm.value.notification);
  //    localStorage.setItem('username', this.registerForm.value.chair);
  // }

  registerUser() {
    var param = {
      from_name: 'Urvashi',
      email_id: this.registerForm.value.notification,
      message: 'hello,this is test mail.',
    };
    emailjs
      .send('service_nstrl3h', 'template_pngfe42', param)
      .then(function (res: { status: string }) {
        alert('success' + res.status);
      });
  }
}
