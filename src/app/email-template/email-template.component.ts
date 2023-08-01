import { Component } from '@angular/core';
import {EmailTemplateService} from "../_services/email-template-service/email-template.service";
import {ActivatedRoute} from "@angular/router";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css']
})
export class EmailTemplateComponent {
  templateId: any;
  emailTemplate: any;
  public Editor = ClassicEditor;

  constructor(private emailTemplateService: EmailTemplateService,
              private route: ActivatedRoute,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    // Get the template ID from the route parameter
    this.route.paramMap.subscribe((params) => {
      this.templateId = params.get('id');
      // Call the service method to fetch the specific template by ID
      this.emailTemplateService
        .getEmailTemplateById(this.templateId)
        .subscribe((template) => {
          this.emailTemplate = template;
        });
    });
  }
  editEmailTemplate(id: string): void {
      this.emailTemplateService.editEmailTemplate(id, this.emailTemplate).subscribe(
        (response) => {
          this.toastr.success('Email template saved successfully!', 'Success');
          console.log('Template updated successfully!', response);
        },
        (error) => {
          this.toastr.error('Error updating template', 'Success');
          console.error('Error updating template:', error);
        }
      );
  }
}
