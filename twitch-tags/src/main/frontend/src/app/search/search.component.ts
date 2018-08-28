import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  countries: string[] = ['kid-friendly', 'humor', 'positive'];

    filteredCountries: any[];

    country: string;

    filterCountries(event) {
        this.filteredCountries = [];
        for(let i = 0; i < this.countries.length; i++) {
            let country = this.countries[i];
            if(country.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredCountries.push(country);
            }
        }
    }


  constructor() { }

  ngOnInit() {
  }

}
