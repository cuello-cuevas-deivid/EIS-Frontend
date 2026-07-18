import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperContainer, SwiperSlide } from 'swiper/element';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-clients',
  imports: [],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Clients {
}
