import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../services/certificates-service/certificates.service';
import { Certificate } from '../models/certificates/certificate.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificateService.getCertificates().subscribe(data => {
      this.certificates = data.map(e => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data()
      }));
    });
  }
}
