const advisoryData = [
  {
    country: "Micronesia",
    level: "1",
    date: "January 22, 2025",
  },
  {
    country: "Czech Republic",
    level: "1",
    date: "April 28, 2025",
  },
  {
    country: "Liechtenstein",
    level: "1",
    date: "May 22, 2025",
  },
  {
    country: "North Macedonia",
    level: "1",
    date: "January 14, 2025",
  },
  {
    country: "Nauru",
    level: "1",
    date: "December 2, 2024",
  },
  {
    country: "Palau",
    level: "1",
    date: "August 6, 2024",
  },
  {
    country: "Myanmar",
    level: "4",
    date: "May 12, 2025",
  },
  {
    country: "Afghanistan",
    level: "4",
    date: "January 13, 2025",
  },
  {
    country: "Albania",
    level: "2",
    date: "December 31, 2024",
  },
  {
    country: "Algeria",
    level: "2",
    date: "September 26, 2024",
  },
  {
    country: "Andorra",
    level: "1",
    date: "March 25, 2025",
  },
  {
    country: "Angola",
    level: "2",
    date: "September 23, 2024",
  },
  {
    country: "Antigua and Barbuda",
    level: "1",
    date: "August 22, 2024",
  },
  {
    country: "Botswana",
    level: "2",
    date: "February 26, 2024",
  },
  {
    country: "Cape Verde",
    level: "1",
    date: "September 23, 2024",
  },
  {
    country: "Comoros",
    level: "2",
    date: "May 28, 2024",
  },
  {
    country: "Djibouti",
    level: "2",
    date: "March 6, 2025",
  },
  {
    country: "Equatorial Guinea",
    level: "2",
    date: "March 7, 2025",
  },
  {
    country: "Guinea",
    level: "2",
    date: "December 12, 2024",
  },
  {
    country: "Lesotho",
    level: "2",
    date: "September 17, 2024",
  },
  {
    country: "Namibia",
    level: "2",
    date: "December 23, 2024",
  },
  {
    country: "Eswatini",
    level: "2",
    date: "July 1, 2024",
  },
  {
    country: "Australia",
    level: "1",
    date: "May 30, 2025",
  },
  {
    country: "Brunei",
    level: "1",
    date: "March 19, 2025",
  },
  {
    country: "Fiji",
    level: "1",
    date: "December 2, 2024",
  },
  {
    country: "Japan",
    level: "1",
    date: "May 15, 2025",
  },
  {
    country: "Kiribati",
    level: "1",
    date: "December 2, 2024",
  },
  {
    country: "Mongolia",
    level: "1",
    date: "January 22, 2025",
  },
  {
    country: "New Zealand",
    level: "1",
    date: "January 3, 2025",
  },
  {
    country: "Papua New Guinea",
    level: "3",
    date: "April 29, 2025",
  },
  {
    country: "Samoa",
    level: "1",
    date: "March 10, 2025",
  },
  {
    country: "Austria",
    level: "1",
    date: "August 23, 2024",
  },
  {
    country: "Belarus",
    level: "4",
    date: "December 18, 2024",
  },
  {
    country: "Belgium",
    level: "2",
    date: "May 22, 2025",
  },
  {
    country: "Bulgaria",
    level: "1",
    date: "August 15, 2024",
  },
  {
    country: "Croatia",
    level: "1",
    date: "August 15, 2024",
  },
  {
    country: "Cyprus",
    level: "1",
    date: "January 13, 2025",
  },
  {
    country: "Denmark",
    level: "2",
    date: "September 17, 2024",
  },
  {
    country: "Estonia",
    level: "1",
    date: "July 23, 2024",
  },
  {
    country: "Finland",
    level: "1",
    date: "August 9, 2024",
  },
  {
    country: "France",
    level: "2",
    date: "May 28, 2025",
  },
  {
    country: "Germany",
    level: "2",
    date: "May 13, 2025",
  },
  {
    country: "Greece",
    level: "1",
    date: "August 15, 2024",
  },
  {
    country: "Hungary",
    level: "1",
    date: "August 21, 2024",
  },
  {
    country: "Iceland",
    level: "1",
    date: "August 22, 2024",
  },
  {
    country: "Ireland",
    level: "1",
    date: "August 28, 2024",
  },
  {
    country: "Latvia",
    level: "1",
    date: "August 26, 2024",
  },
  {
    country: "Lithuania",
    level: "1",
    date: "August 9, 2024",
  },
  {
    country: "Luxembourg",
    level: "1",
    date: "July 19, 2024",
  },
  {
    country: "Malta",
    level: "1",
    date: "May 28, 2025",
  },
  {
    country: "Montenegro",
    level: "1",
    date: "November 26, 2024",
  },
  {
    country: "Netherlands",
    level: "2",
    date: "August 9, 2024",
  },
  {
    country: "Norway",
    level: "1",
    date: "February 3, 2025",
  },
  {
    country: "Poland",
    level: "1",
    date: "June 5, 2025",
  },
  {
    country: "Portugal",
    level: "1",
    date: "March 3, 2025",
  },
  {
    country: "Romania",
    level: "1",
    date: "August 15, 2024",
  },
  {
    country: "Serbia",
    level: "2",
    date: "April 11, 2025",
  },
  {
    country: "Slovakia",
    level: "1",
    date: "November 14, 2024",
  },
  {
    country: "Slovenia",
    level: "1",
    date: "July 26, 2024",
  },
  {
    country: "Spain",
    level: "2",
    date: "May 12, 2025",
  },
  {
    country: "Sweden",
    level: "2",
    date: "July 24, 2024",
  },
  {
    country: "Switzerland",
    level: "1",
    date: "May 20, 2025",
  },
  {
    country: "United Kingdom",
    level: "2",
    date: "May 8, 2025",
  },
  {
    country: "Kazakhstan",
    level: "1",
    date: "August 5, 2024",
  },
  {
    country: "United Arab Emirates",
    level: "2",
    date: "January 6, 2025",
  },
  {
    country: "Barbados",
    level: "1",
    date: "August 22, 2024",
  },
  {
    country: "Belize",
    level: "2",
    date: "December 30, 2024",
  },
  {
    country: "Brazil",
    level: "2",
    date: "May 29, 2025",
  },
  {
    country: "Saint Kitts and Nevis",
    level: "1",
    date: "August 22, 2024",
  },
  {
    country: "Saint Lucia",
    level: "1",
    date: "August 22, 2024",
  },
  {
    country: "Saint Vincent and the Grenadines",
    level: "1",
    date: "December 6, 2024",
  },
  {
    country: "Trinidad and Tobago",
    level: "3",
    date: "May 7, 2025",
  },
  {
    country: "South Sudan",
    level: "4",
    date: "March 8, 2025",
  },
  {
    country: "Grenada",
    level: "1",
    date: "November 12, 2024",
  },
  {
    country: "Guatemala",
    level: "3",
    date: "December 30, 2024",
  },
  {
    country: "Guyana",
    level: "3",
    date: "May 12, 2025",
  },
  {
    country: "Haiti",
    level: "4",
    date: "September 18, 2024",
  },
  {
    country: "Honduras",
    level: "3",
    date: "December 10, 2024",
  },
  {
    country: "India",
    level: "2",
    date: "June 16, 2025",
  },
  {
    country: "Indonesia",
    level: "2",
    date: "April 30, 2025",
  },
  {
    country: "Iran",
    level: "4",
    date: "March 31, 2025",
  },
  {
    country: "Iraq",
    level: "4",
    date: "June 11, 2025",
  },
  {
    country: "Italy",
    level: "2",
    date: "May 23, 2025",
  },
  {
    country: "Jamaica",
    level: "2",
    date: "May 29, 2025",
  },
  {
    country: "Jordan",
    level: "2",
    date: "September 12, 2024",
  },
  {
    country: "Kenya",
    level: "2",
    date: "March 17, 2025",
  },
  {
    country: "North Korea",
    level: "4",
    date: "April 29, 2025",
  },
  {
    country: "South Korea",
    level: "1",
    date: "May 28, 2025",
  },
  {
    country: "Kosovo",
    level: "2",
    date: "December 2, 2024",
  },
  {
    country: "Kuwait",
    level: "1",
    date: "April 8, 2025",
  },
  {
    country: "Laos",
    level: "2",
    date: "November 21, 2024",
  },
  {
    country: "Lebanon",
    level: "4",
    date: "December 27, 2024",
  },
  {
    country: "Liberia",
    level: "2",
    date: "July 31, 2023",
  },
  {
    country: "Libya",
    level: "4",
    date: "August 1, 2024",
  },
  {
    country: "Madagascar",
    level: "2",
    date: "November 5, 2024",
  },
  {
    country: "Malawi",
    level: "2",
    date: "December 6, 2024",
  },
  {
    country: "Malaysia",
    level: "1",
    date: "July 24, 2024",
  },
  {
    country: "Maldives",
    level: "2",
    date: "July 11, 2024",
  },
  {
    country: "Mali",
    level: "4",
    date: "July 31, 2023",
  },
  {
    country: "Marshall Islands",
    level: "1",
    date: "June 16, 2025",
  },
  {
    country: "Mauritania",
    level: "3",
    date: "July 31, 2023",
  },
  {
    country: "Mauritius",
    level: "1",
    date: "August 30, 2024",
  },
  {
    country: "Moldova",
    level: "2",
    date: "November 29, 2024",
  },
  {
    country: "Morocco",
    level: "2",
    date: "April 21, 2025",
  },
  {
    country: "Mozambique",
    level: "2",
    date: "June 16, 2025",
  },
  {
    country: "Nepal",
    level: "2",
    date: "December 18, 2024",
  },
  {
    country: "Nicaragua",
    level: "3",
    date: "December 13, 2024",
  },
  {
    country: "Niger",
    level: "3",
    date: "March 21, 2025",
  },
  {
    country: "Nigeria",
    level: "3",
    date: "September 20, 2023",
  },
  {
    country: "Oman",
    level: "2",
    date: "November 4, 2024",
  },
  {
    country: "Pakistan",
    level: "3",
    date: "March 7, 2025",
  },
  {
    country: "Panama",
    level: "2",
    date: "September 23, 2024",
  },
  {
    country: "Paraguay",
    level: "1",
    date: "April 30, 2025",
  },
  {
    country: "Peru",
    level: "2",
    date: "May 16, 2025",
  },
  {
    country: "Philippines",
    level: "2",
    date: "May 8, 2025",
  },
  {
    country: "Qatar",
    level: "1",
    date: "June 3, 2025",
  },
  {
    country: "Russia",
    level: "4",
    date: "May 8, 2025",
  },
  {
    country: "Rwanda",
    level: "2",
    date: "February 26, 2025",
  },
  {
    country: "São Tomé and Príncipe",
    level: "1",
    date: "September 25, 2024",
  },
  {
    country: "Saudi Arabia",
    level: "2",
    date: "September 9, 2024",
  },
  {
    country: "Senegal",
    level: "1",
    date: "October 21, 2024",
  },
  {
    country: "Seychelles",
    level: "1",
    date: "August 30, 2024",
  },
  {
    country: "Sierra Leone",
    level: "2",
    date: "September 23, 2024",
  },
  {
    country: "Singapore",
    level: "1",
    date: "March 5, 2025",
  },
  {
    country: "Solomon Islands",
    level: "2",
    date: "April 29, 2025",
  },
  {
    country: "Somalia",
    level: "4",
    date: "May 14, 2025",
  },
  {
    country: "South Africa",
    level: "2",
    date: "May 27, 2025",
  },
  {
    country: "Sri Lanka",
    level: "2",
    date: "October 2, 2024",
  },
  {
    country: "Sudan",
    level: "4",
    date: "April 22, 2023",
  },
  {
    country: "Suriname",
    level: "1",
    date: "December 13, 2024",
  },
  {
    country: "Syria",
    level: "4",
    date: "March 3, 2025",
  },
  {
    country: "Taiwan",
    level: "1",
    date: "July 31, 2024",
  },
  {
    country: "Tajikistan",
    level: "2",
    date: "May 16, 2025",
  },
  {
    country: "Tanzania",
    level: "2",
    date: "September 5, 2024",
  },
  {
    country: "Thailand",
    level: "1",
    date: "June 9, 2025",
  },
  {
    country: "Timor-Leste",
    level: "2",
    date: "March 21, 2025",
  },
  {
    country: "Togo",
    level: "2",
    date: "November 7, 2024",
  },
  {
    country: "Tunisia",
    level: "2",
    date: "October 23, 2024",
  },
  {
    country: "Turkey",
    level: "2",
    date: "October 16, 2024",
  },
  {
    country: "Turkmenistan",
    level: "1",
    date: "February 28, 2025",
  },
  {
    country: "Tuvalu",
    level: "1",
    date: "December 2, 2024",
  },
  {
    country: "Uganda",
    level: "3",
    date: "April 23, 2025",
  },
  {
    country: "Ukraine",
    level: "4",
    date: "November 14, 2024",
  },
  {
    country: "Uruguay",
    level: "2",
    date: "May 7, 2025",
  },
  {
    country: "Uzbekistan",
    level: "1",
    date: "September 27, 2024",
  },
  {
    country: "Vanuatu",
    level: "1",
    date: "May 22, 2025",
  },
  {
    country: "Venezuela",
    level: "4",
    date: "May 12, 2025",
  },
  {
    country: "Vietnam",
    level: "1",
    date: "December 16, 2024",
  },
  {
    country: "Yemen",
    level: "4",
    date: "March 31, 2025",
  },
  {
    country: "Zambia",
    level: "1",
    date: "July 31, 2023",
  },
  {
    country: "Zimbabwe",
    level: "2",
    date: "June 27, 2023",
  },
  {
    country: "Tonga",
    level: "1",
    date: "December 2, 2024",
  },
  {
    country: "Argentina",
    level: "1",
    date: "September 20, 2024",
  },
  {
    country: "Armenia",
    level: "2",
    date: "April 9, 2024",
  },
  {
    country: "Azerbaijan",
    level: "2",
    date: "May 21, 2025",
  },
  {
    country: "Bahamas",
    level: "2",
    date: "March 31, 2025",
  },
  {
    country: "Bahrain",
    level: "2",
    date: "September 9, 2024",
  },
  {
    country: "Bangladesh",
    level: "3",
    date: "April 18, 2025",
  },
  {
    country: "Benin",
    level: "2",
    date: "May 24, 2024",
  },
  {
    country: "Bhutan",
    level: "1",
    date: "June 26, 2024",
  },
  {
    country: "Bolivia",
    level: "2",
    date: "June 6, 2024",
  },
  {
    country: "Bosnia and Herzegovina",
    level: "2",
    date: "December 12, 2024",
  },
  {
    country: "Burkina Faso",
    level: "4",
    date: "April 16, 2025",
  },
  {
    country: "Burundi",
    level: "3",
    date: "April 29, 2025",
  },
  {
    country: "Cambodia",
    level: "1",
    date: "July 24, 2023",
  },
  {
    country: "Cameroon",
    level: "2",
    date: "December 18, 2024",
  },
  {
    country: "Canada",
    level: "1",
    date: "June 11, 2025",
  },
  {
    country: "Central African Republic",
    level: "4",
    date: "December 26, 2024",
  },
  {
    country: "Chad",
    level: "3",
    date: "March 18, 2025",
  },
  {
    country: "Chile",
    level: "2",
    date: "January 16, 2025",
  },
  {
    country: "China",
    level: "2",
    date: "November 27, 2024",
  },
  {
    country: "Colombia",
    level: "3",
    date: "April 17, 2025",
  },
  {
    country: "Costa Rica",
    level: "2",
    date: "December 10, 2024",
  },
  {
    country: "Côte d'Ivoire",
    level: "2",
    date: "April 8, 2024",
  },
  {
    country: "Cuba",
    level: "2",
    date: "May 7, 2025",
  },
  {
    country: "Dominica",
    level: "1",
    date: "August 22, 2024",
  },
  {
    country: "Dominican Republic",
    level: "2",
    date: "June 12, 2025",
  },
  {
    country: "Ecuador",
    level: "2",
    date: "April 15, 2024",
  },
  {
    country: "Egypt",
    level: "3",
    date: "October 15, 2024",
  },
  {
    country: "El Salvador",
    level: "1",
    date: "April 8, 2025",
  },
  {
    country: "Eritrea",
    level: "2",
    date: "July 31, 2023",
  },
  {
    country: "Ethiopia",
    level: "3",
    date: "July 31, 2023",
  },
  {
    country: "Gabon",
    level: "2",
    date: "December 18, 2024",
  },
  {
    country: "Gambia",
    level: "2",
    date: "October 16, 2024",
  },
  {
    country: "Georgia",
    level: "1",
    date: "March 13, 2025",
  },
  {
    country: "Ghana",
    level: "2",
    date: "April 8, 2025",
  },
  {
    country: "Democratic Republic of the Congo",
    level: "4",
    date: "January 29, 2025",
  },
  {
    country: "Republic of the Congo",
    level: "2",
    date: "October 2, 2024",
  },
  {
    country: "Guinea-Bissau",
    level: "3",
    date: "March 24, 2025",
  },
];

export default advisoryData;
