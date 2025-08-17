import { Component } from '@angular/core';
import { Card } from "../card/card";

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  districts=[
  {
    "id": 1,
    "title": "Thiruvananthapuram",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kovalam_beach_trivandrum.jpg",
    "description": "The capital city of Kerala, famous for Kovalam Beach, Padmanabhaswamy Temple, and rich cultural heritage."
  },
  {
    "id": 2,
    "title": "Kollam",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Ashtamudi_Lake_Kollam.jpg",
    "description": "Known as the 'Gateway to the Backwaters', Kollam is famous for Ashtamudi Lake and cashew processing."
  },
  {
    "id": 3,
    "title": "Pathanamthitta",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sabarimala_temple.jpg",
    "description": "A pilgrim center, home to the famous Sabarimala Temple and lush forested landscapes."
  },
  {
    "id": 4,
    "title": "Alappuzha",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Houseboat_in_Alleppey.jpg",
    "description": "Popularly called the 'Venice of the East', known for backwater tourism and houseboats."
  },
  {
    "id": 5,
    "title": "Kottayam",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Vembanad_Lake_Kumarakom.jpg",
    "description": "Land of letters, latex, and lakes; famous for rubber plantations and Kumarakom backwaters."
  },
  {
    "id": 6,
    "title": "Idukki",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/00/Munnar_hills_idukki.jpg",
    "description": "A highland district known for Munnar hill station, tea plantations, and Idukki Dam."
  },
  {
    "id": 7,
    "title": "Ernakulam",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Kochi_Marine_Drive.jpg",
    "description": "The commercial hub of Kerala, home to Kochi city, marine drive, and historic Fort Kochi."
  },
  {
    "id": 8,
    "title": "Thrissur",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Thrissur_Pooram.jpg",
    "description": "Cultural capital of Kerala, famous for Thrissur Pooram festival and Vadakkumnathan Temple."
  },
  {
    "id": 9,
    "title": "Palakkad",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Palakkad_Fort.jpg",
    "description": "Known as the 'Gateway to Kerala', famous for Palakkad Fort, paddy fields, and Silent Valley."
  },
  {
    "id": 10,
    "title": "Malappuram",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Kottakkunnu_Park_Malappuram.jpg",
    "description": "A historic district known for Kottakkunnu, rich cultural traditions, and scenic landscapes."
  },
  {
    "id": 11,
    "title": "Kozhikode",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Kozhikode_Beach.jpg",
    "description": "Once known as Calicut, famous for Kozhikode Beach, sweet halwa, and historic trade links."
  },
  {
    "id": 12,
    "title": "Wayanad",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Wayanad_hills.jpg",
    "description": "A hill district with waterfalls, wildlife sanctuaries, and Edakkal caves."
  },
  {
    "id": 13,
    "title": "Kannur",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Payyambalam_Beach_Kannur.jpg",
    "description": "Known for Theyyam performances, Payyambalam Beach, and historical forts."
  },
  {
    "id": 14,
    "title": "Kasaragod",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Bekal_Fort_Kasaragod.jpg",
    "description": "Northernmost district of Kerala, famous for Bekal Fort and serene beaches."
  }
]

}
