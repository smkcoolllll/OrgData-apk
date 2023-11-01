import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TemplatizationService } from 'src/app/services/templatization.service';

@Component({
  selector: 'app-templatization',
  templateUrl: './templatization.component.html',
  styleUrls: ['./templatization.component.css']
})
export class TemplatizationComponent {

  formFields: any[] = [{ name: 'field1', value: 'Field 1' }];
  formData: any = {};

  constructor(private router: Router, private route: ActivatedRoute) {}

  addField() {
    this.formFields.push({ name: `field${this.formFields.length + 1}`, value: `Field ${this.formFields.length + 1}` });
  }

  onSubmit() {
    const dataObject: any = {};
    this.formFields.forEach((field) => {
      dataObject[this.formData[field.name]] = this.formData[field.value];
    });

    console.log(dataObject);  
  
    this.router.navigate(['/templatescreen'], {
      relativeTo: this.route,
      queryParams: { data: JSON.stringify(dataObject) }
    });
    }


}
