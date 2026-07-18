import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import services from '../../data/services.json';
import {
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
} from '@angular/aria/accordion';


@Component({
  selector: 'app-service-detail',
  imports: [AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css',
})
export class ServiceDetail {
  readonly slug : string | null;
  title: string;
  description: string;
  offerings: { title: string; description: string }[] = [];
  private route = inject(ActivatedRoute);

  constructor () {
    this.slug = this.route.snapshot.paramMap.get('slug');
    const service: any = services.find(s => s.slug === this.slug);
    this.title = service.title
    this.description = service.description
    this.offerings = service.offerings

    console.log(this.offerings)

    
  }

}
