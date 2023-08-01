import { Component } from '@angular/core';
import {RequestService} from "../../_services/requests-service/request.service";

@Component({
  selector: 'app-export-request',
  templateUrl: './export-request.component.html',
  styleUrls: ['./export-request.component.css']
})
export class ExportRequestComponent {
  typeRequest: string;
  creationDate: string;
  status: string;

  typeRequests: { key: string, value: string }[] = [
    { key: 'access-request', value: 'Demande d’accès' },
    { key: 'opposition-request', value: 'Demande d’opposition' },
    { key: 'rectification-request', value: 'Demande de rectification, modification, suppression' },
    { key: 'portability-request', value: 'Demande de portabilité' },
    { key: 'deletion-request', value: 'Demande d’effacement' },
    { key: 'consent-withdrawal-request', value: 'Demande de retrait du consentement' },
    { key: 'disputes', value: 'Les litiges' }
  ];

  listStatus: { key: string, value: string }[] = [
    { key: 'new', value: 'Nouvelle demande' },
    { key: 'in-progress', value: 'Demande en cours de traitement' },
    { key: 'accepted', value: 'Demande acceptée && traiées' },
    { key: 'refused', value: 'Demande refusée' },
  ];

  constructor(private requestService: RequestService) {
    this.typeRequest = '';
    this.creationDate= ''
    this.status= ''
  }

  exportRequests(): void {
    this.requestService.exportRequests(this.typeRequest, this.creationDate, this.status).subscribe(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'requests.xlsx';
      link.click();
      window.URL.revokeObjectURL(link.href);
    });
  }
}
