import type { StateDataMap } from "../../types";

/**
 * Real Indian location data keyed by state/UT.
 *
 * Each entry contains:
 * - `language`  — primary language spoken in that state
 * - `region`    — broad cultural region (for surname selection)
 * - `cities`    — array of { city, district, pincode } records
 *
 * All cities, districts, and pincodes correspond to real Indian places.
 */
export const stateData: StateDataMap = {
  "Maharashtra": {
    language: "Marathi", region: "west",
    cities: [
      { city: "Mumbai", district: "Mumbai", pincode: "400001" },
      { city: "Pune", district: "Pune", pincode: "411001" },
      { city: "Nagpur", district: "Nagpur", pincode: "440001" },
      { city: "Thane", district: "Thane", pincode: "400601" },
      { city: "Nashik", district: "Nashik", pincode: "422001" },
      { city: "Aurangabad", district: "Aurangabad", pincode: "431001" },
      { city: "Solapur", district: "Solapur", pincode: "413001" },
      { city: "Kolhapur", district: "Kolhapur", pincode: "416001" },
      { city: "Amravati", district: "Amravati", pincode: "444601" },
      { city: "Sangli", district: "Sangli", pincode: "416416" },
      { city: "Nanded", district: "Nanded", pincode: "431601" },
      { city: "Akola", district: "Akola", pincode: "444001" },
    ],
  },
  "Karnataka": {
    language: "Kannada", region: "south",
    cities: [
      { city: "Bengaluru", district: "Bengaluru Urban", pincode: "560001" },
      { city: "Mysuru", district: "Mysuru", pincode: "570001" },
      { city: "Hubli", district: "Dharwad", pincode: "580020" },
      { city: "Mangaluru", district: "Dakshina Kannada", pincode: "575001" },
      { city: "Belagavi", district: "Belagavi", pincode: "590001" },
      { city: "Davanagere", district: "Davanagere", pincode: "577001" },
      { city: "Ballari", district: "Ballari", pincode: "583101" },
      { city: "Tumkuru", district: "Tumkuru", pincode: "572101" },
      { city: "Shimoga", district: "Shimoga", pincode: "577201" },
      { city: "Udupi", district: "Udupi", pincode: "576101" },
    ],
  },
  "Tamil Nadu": {
    language: "Tamil", region: "south",
    cities: [
      { city: "Chennai", district: "Chennai", pincode: "600001" },
      { city: "Coimbatore", district: "Coimbatore", pincode: "641001" },
      { city: "Madurai", district: "Madurai", pincode: "625001" },
      { city: "Tiruchirappalli", district: "Tiruchirappalli", pincode: "620001" },
      { city: "Salem", district: "Salem", pincode: "636001" },
      { city: "Tirunelveli", district: "Tirunelveli", pincode: "627001" },
      { city: "Erode", district: "Erode", pincode: "638001" },
      { city: "Vellore", district: "Vellore", pincode: "632001" },
      { city: "Thanjavur", district: "Thanjavur", pincode: "613001" },
      { city: "Dindigul", district: "Dindigul", pincode: "624001" },
    ],
  },
  "Kerala": {
    language: "Malayalam", region: "south",
    cities: [
      { city: "Thiruvananthapuram", district: "Thiruvananthapuram", pincode: "695001" },
      { city: "Kochi", district: "Ernakulam", pincode: "682001" },
      { city: "Kozhikode", district: "Kozhikode", pincode: "673001" },
      { city: "Thrissur", district: "Thrissur", pincode: "680001" },
      { city: "Kollam", district: "Kollam", pincode: "691001" },
      { city: "Kannur", district: "Kannur", pincode: "670001" },
      { city: "Alappuzha", district: "Alappuzha", pincode: "688001" },
      { city: "Palakkad", district: "Palakkad", pincode: "678001" },
      { city: "Kottayam", district: "Kottayam", pincode: "686001" },
      { city: "Malappuram", district: "Malappuram", pincode: "676505" },
    ],
  },
  "Uttar Pradesh": {
    language: "Hindi", region: "north",
    cities: [
      { city: "Lucknow", district: "Lucknow", pincode: "226001" },
      { city: "Kanpur", district: "Kanpur Nagar", pincode: "208001" },
      { city: "Agra", district: "Agra", pincode: "282001" },
      { city: "Varanasi", district: "Varanasi", pincode: "221001" },
      { city: "Prayagraj", district: "Prayagraj", pincode: "211001" },
      { city: "Meerut", district: "Meerut", pincode: "250001" },
      { city: "Noida", district: "Gautam Buddha Nagar", pincode: "201301" },
      { city: "Ghaziabad", district: "Ghaziabad", pincode: "201001" },
      { city: "Bareilly", district: "Bareilly", pincode: "243001" },
      { city: "Aligarh", district: "Aligarh", pincode: "202001" },
      { city: "Moradabad", district: "Moradabad", pincode: "244001" },
      { city: "Gorakhpur", district: "Gorakhpur", pincode: "273001" },
    ],
  },
  "Rajasthan": {
    language: "Hindi", region: "north",
    cities: [
      { city: "Jaipur", district: "Jaipur", pincode: "302001" },
      { city: "Jodhpur", district: "Jodhpur", pincode: "342001" },
      { city: "Udaipur", district: "Udaipur", pincode: "313001" },
      { city: "Kota", district: "Kota", pincode: "324001" },
      { city: "Ajmer", district: "Ajmer", pincode: "305001" },
      { city: "Bikaner", district: "Bikaner", pincode: "334001" },
      { city: "Bhilwara", district: "Bhilwara", pincode: "311001" },
      { city: "Alwar", district: "Alwar", pincode: "301001" },
      { city: "Sikar", district: "Sikar", pincode: "332001" },
      { city: "Bharatpur", district: "Bharatpur", pincode: "321001" },
    ],
  },
  "Gujarat": {
    language: "Gujarati", region: "west",
    cities: [
      { city: "Ahmedabad", district: "Ahmedabad", pincode: "380001" },
      { city: "Surat", district: "Surat", pincode: "395001" },
      { city: "Vadodara", district: "Vadodara", pincode: "390001" },
      { city: "Rajkot", district: "Rajkot", pincode: "360001" },
      { city: "Gandhinagar", district: "Gandhinagar", pincode: "382010" },
      { city: "Bhavnagar", district: "Bhavnagar", pincode: "364001" },
      { city: "Junagadh", district: "Junagadh", pincode: "362001" },
      { city: "Anand", district: "Anand", pincode: "388001" },
      { city: "Jamnagar", district: "Jamnagar", pincode: "361001" },
      { city: "Navsari", district: "Navsari", pincode: "396445" },
    ],
  },
  "West Bengal": {
    language: "Bengali", region: "east",
    cities: [
      { city: "Kolkata", district: "Kolkata", pincode: "700001" },
      { city: "Howrah", district: "Howrah", pincode: "711101" },
      { city: "Durgapur", district: "Paschim Bardhaman", pincode: "713201" },
      { city: "Asansol", district: "Paschim Bardhaman", pincode: "713301" },
      { city: "Siliguri", district: "Darjeeling", pincode: "734001" },
      { city: "Kharagpur", district: "Paschim Medinipur", pincode: "721301" },
      { city: "Baharampur", district: "Murshidabad", pincode: "742101" },
      { city: "Bardhaman", district: "Purba Bardhaman", pincode: "713101" },
      { city: "Malda", district: "Malda", pincode: "732101" },
      { city: "Haldia", district: "Purba Medinipur", pincode: "721602" },
    ],
  },
  "Madhya Pradesh": {
    language: "Hindi", region: "north",
    cities: [
      { city: "Bhopal", district: "Bhopal", pincode: "462001" },
      { city: "Indore", district: "Indore", pincode: "452001" },
      { city: "Jabalpur", district: "Jabalpur", pincode: "482001" },
      { city: "Gwalior", district: "Gwalior", pincode: "474001" },
      { city: "Ujjain", district: "Ujjain", pincode: "456001" },
      { city: "Sagar", district: "Sagar", pincode: "470001" },
      { city: "Dewas", district: "Dewas", pincode: "455001" },
      { city: "Satna", district: "Satna", pincode: "485001" },
      { city: "Ratlam", district: "Ratlam", pincode: "457001" },
      { city: "Rewa", district: "Rewa", pincode: "486001" },
    ],
  },
  "Bihar": {
    language: "Hindi", region: "north",
    cities: [
      { city: "Patna", district: "Patna", pincode: "800001" },
      { city: "Gaya", district: "Gaya", pincode: "823001" },
      { city: "Muzaffarpur", district: "Muzaffarpur", pincode: "842001" },
      { city: "Bhagalpur", district: "Bhagalpur", pincode: "812001" },
      { city: "Darbhanga", district: "Darbhanga", pincode: "846001" },
      { city: "Purnia", district: "Purnia", pincode: "854301" },
      { city: "Ara", district: "Bhojpur", pincode: "802301" },
      { city: "Begusarai", district: "Begusarai", pincode: "851101" },
    ],
  },
  "Telangana": {
    language: "Telugu", region: "south",
    cities: [
      { city: "Hyderabad", district: "Hyderabad", pincode: "500001" },
      { city: "Warangal", district: "Warangal", pincode: "506001" },
      { city: "Nizamabad", district: "Nizamabad", pincode: "503001" },
      { city: "Karimnagar", district: "Karimnagar", pincode: "505001" },
      { city: "Khammam", district: "Khammam", pincode: "507001" },
      { city: "Secunderabad", district: "Hyderabad", pincode: "500003" },
      { city: "Mahbubnagar", district: "Mahbubnagar", pincode: "509001" },
      { city: "Nalgonda", district: "Nalgonda", pincode: "508001" },
    ],
  },
  "Andhra Pradesh": {
    language: "Telugu", region: "south",
    cities: [
      { city: "Visakhapatnam", district: "Visakhapatnam", pincode: "530001" },
      { city: "Vijayawada", district: "Krishna", pincode: "520001" },
      { city: "Guntur", district: "Guntur", pincode: "522001" },
      { city: "Nellore", district: "Nellore", pincode: "524001" },
      { city: "Tirupati", district: "Chittoor", pincode: "517501" },
      { city: "Rajahmundry", district: "East Godavari", pincode: "533101" },
      { city: "Kakinada", district: "East Godavari", pincode: "533001" },
      { city: "Kurnool", district: "Kurnool", pincode: "518001" },
      { city: "Anantapur", district: "Anantapur", pincode: "515001" },
      { city: "Kadapa", district: "Kadapa", pincode: "516001" },
    ],
  },
  "Punjab": {
    language: "Punjabi", region: "punjab",
    cities: [
      { city: "Chandigarh", district: "Chandigarh", pincode: "160001" },
      { city: "Ludhiana", district: "Ludhiana", pincode: "141001" },
      { city: "Amritsar", district: "Amritsar", pincode: "143001" },
      { city: "Jalandhar", district: "Jalandhar", pincode: "144001" },
      { city: "Patiala", district: "Patiala", pincode: "147001" },
      { city: "Bathinda", district: "Bathinda", pincode: "151001" },
      { city: "Mohali", district: "Sahibzada Ajit Singh Nagar", pincode: "140301" },
      { city: "Hoshiarpur", district: "Hoshiarpur", pincode: "146001" },
    ],
  },
  "Haryana": {
    language: "Hindi", region: "north",
    cities: [
      { city: "Gurugram", district: "Gurugram", pincode: "122001" },
      { city: "Faridabad", district: "Faridabad", pincode: "121001" },
      { city: "Panipat", district: "Panipat", pincode: "132103" },
      { city: "Ambala", district: "Ambala", pincode: "134003" },
      { city: "Karnal", district: "Karnal", pincode: "132001" },
      { city: "Rohtak", district: "Rohtak", pincode: "124001" },
      { city: "Hisar", district: "Hisar", pincode: "125001" },
      { city: "Sonipat", district: "Sonipat", pincode: "131001" },
    ],
  },
  "Delhi": {
    language: "Hindi", region: "north",
    cities: [
      { city: "New Delhi", district: "New Delhi", pincode: "110001" },
      { city: "Delhi", district: "Central Delhi", pincode: "110006" },
      { city: "Dwarka", district: "South West Delhi", pincode: "110075" },
      { city: "Rohini", district: "North West Delhi", pincode: "110085" },
      { city: "Saket", district: "South Delhi", pincode: "110017" },
      { city: "Laxmi Nagar", district: "East Delhi", pincode: "110092" },
    ],
  },
  "Odisha": {
    language: "Odia", region: "east",
    cities: [
      { city: "Bhubaneswar", district: "Khordha", pincode: "751001" },
      { city: "Cuttack", district: "Cuttack", pincode: "753001" },
      { city: "Rourkela", district: "Sundargarh", pincode: "769001" },
      { city: "Berhampur", district: "Ganjam", pincode: "760001" },
      { city: "Sambalpur", district: "Sambalpur", pincode: "768001" },
      { city: "Balasore", district: "Balasore", pincode: "756001" },
    ],
  },
  "Assam": {
    language: "Assamese", region: "east",
    cities: [
      { city: "Guwahati", district: "Kamrup Metropolitan", pincode: "781001" },
      { city: "Dibrugarh", district: "Dibrugarh", pincode: "786001" },
      { city: "Jorhat", district: "Jorhat", pincode: "785001" },
      { city: "Silchar", district: "Cachar", pincode: "788001" },
      { city: "Nagaon", district: "Nagaon", pincode: "782001" },
      { city: "Tezpur", district: "Sonitpur", pincode: "784001" },
    ],
  },
  "Jharkhand": {
    language: "Hindi", region: "east",
    cities: [
      { city: "Ranchi", district: "Ranchi", pincode: "834001" },
      { city: "Jamshedpur", district: "East Singhbhum", pincode: "831001" },
      { city: "Dhanbad", district: "Dhanbad", pincode: "826001" },
      { city: "Bokaro", district: "Bokaro", pincode: "827001" },
      { city: "Hazaribagh", district: "Hazaribagh", pincode: "825301" },
      { city: "Deoghar", district: "Deoghar", pincode: "814112" },
    ],
  },
  "Chhattisgarh": {
    language: "Hindi", region: "north",
    cities: [
      { city: "Raipur", district: "Raipur", pincode: "492001" },
      { city: "Bhilai", district: "Durg", pincode: "490001" },
      { city: "Bilaspur", district: "Bilaspur", pincode: "495001" },
      { city: "Korba", district: "Korba", pincode: "495677" },
      { city: "Durg", district: "Durg", pincode: "491001" },
      { city: "Rajnandgaon", district: "Rajnandgaon", pincode: "491441" },
    ],
  },
  "Uttarakhand": {
    language: "Hindi", region: "north",
    cities: [
      { city: "Dehradun", district: "Dehradun", pincode: "248001" },
      { city: "Haridwar", district: "Haridwar", pincode: "249401" },
      { city: "Haldwani", district: "Nainital", pincode: "263139" },
      { city: "Roorkee", district: "Haridwar", pincode: "247667" },
      { city: "Rishikesh", district: "Dehradun", pincode: "249201" },
      { city: "Kashipur", district: "Udham Singh Nagar", pincode: "244713" },
    ],
  },
  "Himachal Pradesh": {
    language: "Hindi", region: "north",
    cities: [
      { city: "Shimla", district: "Shimla", pincode: "171001" },
      { city: "Dharamshala", district: "Kangra", pincode: "176215" },
      { city: "Mandi", district: "Mandi", pincode: "175001" },
      { city: "Solan", district: "Solan", pincode: "173211" },
      { city: "Kullu", district: "Kullu", pincode: "175101" },
    ],
  },
  "Goa": {
    language: "Konkani", region: "west",
    cities: [
      { city: "Panaji", district: "North Goa", pincode: "403001" },
      { city: "Margao", district: "South Goa", pincode: "403601" },
      { city: "Vasco da Gama", district: "South Goa", pincode: "403802" },
      { city: "Mapusa", district: "North Goa", pincode: "403507" },
      { city: "Ponda", district: "South Goa", pincode: "403401" },
    ],
  },
  "Jammu and Kashmir": {
    language: "Urdu", region: "north",
    cities: [
      { city: "Srinagar", district: "Srinagar", pincode: "190001" },
      { city: "Jammu", district: "Jammu", pincode: "180001" },
      { city: "Anantnag", district: "Anantnag", pincode: "192101" },
      { city: "Baramulla", district: "Baramulla", pincode: "193101" },
    ],
  },
  "Tripura": {
    language: "Bengali", region: "northeast",
    cities: [
      { city: "Agartala", district: "West Tripura", pincode: "799001" },
      { city: "Dharmanagar", district: "North Tripura", pincode: "799250" },
      { city: "Udaipur", district: "Gomati", pincode: "799120" },
    ],
  },
  "Meghalaya": {
    language: "English", region: "northeast",
    cities: [
      { city: "Shillong", district: "East Khasi Hills", pincode: "793001" },
      { city: "Tura", district: "West Garo Hills", pincode: "794001" },
      { city: "Jowai", district: "West Jaintia Hills", pincode: "793150" },
    ],
  },
  "Manipur": {
    language: "Meitei", region: "northeast",
    cities: [
      { city: "Imphal", district: "Imphal West", pincode: "795001" },
      { city: "Thoubal", district: "Thoubal", pincode: "795138" },
      { city: "Bishnupur", district: "Bishnupur", pincode: "795126" },
    ],
  },
  "Nagaland": {
    language: "English", region: "northeast",
    cities: [
      { city: "Kohima", district: "Kohima", pincode: "797001" },
      { city: "Dimapur", district: "Dimapur", pincode: "797112" },
      { city: "Mokokchung", district: "Mokokchung", pincode: "798601" },
    ],
  },
  "Mizoram": {
    language: "Mizo", region: "northeast",
    cities: [
      { city: "Aizawl", district: "Aizawl", pincode: "796001" },
      { city: "Lunglei", district: "Lunglei", pincode: "796701" },
    ],
  },
  "Arunachal Pradesh": {
    language: "English", region: "northeast",
    cities: [
      { city: "Itanagar", district: "Papum Pare", pincode: "791111" },
      { city: "Naharlagun", district: "Papum Pare", pincode: "791110" },
      { city: "Pasighat", district: "East Siang", pincode: "791102" },
    ],
  },
  "Sikkim": {
    language: "Nepali", region: "northeast",
    cities: [
      { city: "Gangtok", district: "East Sikkim", pincode: "737101" },
      { city: "Namchi", district: "South Sikkim", pincode: "737126" },
    ],
  },
};

