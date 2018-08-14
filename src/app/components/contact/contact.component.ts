import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private _http: Http) {
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            message: ['', Validators.required],
        });
    }
    onSubmit() {
        const { name, email, message } = this.form.value;
        const date = Date();
        const html = `
        <div>From: ${name}</div>
        <div>Email: <a href="mailto:${email}">${email}</a></div>
        <div>Date: ${date}</div>
        <div>Message: ${message}</div>
        `;
        const formRequest = { name, email, message, date, html };
        // this.af.list('/messages').push(formRequest);
        this._http.post(`/mail`, formRequest).map(res => res.json())
            .subscribe(response => {
                console.log(response)
            })
        this.form.reset();
    }

    ngOnInit() {
    }

}
