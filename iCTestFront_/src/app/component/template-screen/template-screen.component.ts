import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Papa from 'papaparse';
import { TemplatizationService } from 'src/app/services/templatization.service';

@Component({
  selector: 'app-template-screen',
  templateUrl: './template-screen.component.html',
  styleUrls: ['./template-screen.component.css'],
})
export class TemplateScreenComponent {
  dataObject: any;

  uploadData: any;

  constructor(
    private route: ActivatedRoute,
    private service: TemplatizationService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.dataObject = JSON.parse(params['data']);
    });
  }

  uploadTemplate(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.parseCSV(file);
    }
  }

  parseCSV(file: File) {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        this.uploadData = result.data;

        const groupedData: any = {};

          this.uploadData.forEach((item: { [x: string]: any }) => {
            for (const key in item) {
              if (item[key] !== null) {
                console.log('item key ', item[key]);
                if (!groupedData[key]) {
                  groupedData[key] = [];
                }
                groupedData[key].push(item[key].toString());
              }
            }
          });

          console.log('CSV Data ', groupedData, this.uploadData);
      

        if (this.uploadData) {
          this.service.postData(groupedData).subscribe((res) => {
            console.log('CSV Data uploaded ', groupedData, res);
          });
        }
      },
      error: (error) => {
        console.error('CSV parsing error:', error.message);
      },
    });
  }

  downloadTemplate() {
    const csvData = this.convertToCSV(this.dataObject);
    this.downloadCSV(csvData, 'orgData.csv');
  }

  convertToCSV(data: any[]): string {
    console.log('uploadData ', data);
    if (!data || typeof data !== 'object') {
      return '';
    }

    const headers = Object.keys(data);
    const values = Object.values(data);
    const headerRow = headers.map((header) => `"${header}"`).join(',');
    const valueRow = values.map((value) => `"${value}"`).join(',');

    return `${headerRow}\n${valueRow}`;
  }

  downloadCSV(data: string, filename: string) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
