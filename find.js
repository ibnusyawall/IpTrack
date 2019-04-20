/* Created By Ibnu Syawal */
/* Say Alhamdulillah :) */

// Module

var req = require('request' );         // npm install --save request
var bac = require('readline');         // npm install --save readline
var warna = require('colors');         // npm install --save colors

/* ........................................ */
warna.setTheme({
    hijau  : 'green',
    biru   : 'blue',
    merah  : 'red',
    kuning : 'yellow'
});

const tanya = bac.createInterface({input: process.stdin, output: process.stdout});

/* ........................................ */

key = ["2388107e74e7fe5424554967771b568b","7a1afbf9b63efdf5bdb30a08a736673c229b3ea738e667e0d259c135"]

/* ........................................ */
console.log(" _        __        _ ".merah)
console.log("|_|___   |  |   ___| |_ _ _ ___ ".merah)
console.log("| | . |  |  |__| . | '_| | | . | ".merah)
console.log("|_|  _|  |_____|___|_,_|___|  _| ")
console.log("  |_|                      |_| ")
console.log("        C" + " : " + "I".merah + "bnu " + "S".merah + "yawall")
console.log("      407 Authentic Exploit")
console.log("")
console.log("=====================================")
console.log('');
/* ........................................ */

console.log(''); tanya.question('[!] Masukan alamat ip : ', (iplu) => {
console.log('');
    
/* ........................................ */

req("http://api.ipstack.com/" + `${iplu}` +  "?access_key=" + key[0], function (error, response, body){
    ip = JSON.parse(body)
    if(response.statusCode == 200) {
        console.log("[".hijau + "!".merah + "]".hijau + "  Tipe Ip            : " + ip["type"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Negara             : " + ip["country_name"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Kode Negara        : " + ip["country_code"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Bahasa Negara      : " + ip.location.languages[0].native)
        console.log("[".hijau + "!".merah + "]".hijau + "  Benua              : " + ip["continent_name"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Garis lintang      : " + ip["latitude"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Garis Bujur        : " + ip["longitude"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Kode Telepon       : " + "+" + ip["location"]["calling_code"])
    }else if(response.statusCode == 502) {
        console.log("Periksa Koneksi Internet Anda !")
    }else{
        console.log("Galat, coba lagi !")
    }
})

/* ........................................ */

req("http://ip-api.com/json/" + `${iplu}` + "?fields=mobile", function (error, response, body){
    ip = JSON.parse(body)
    if(response.statusCode == 200) {
        console.log("[".hijau + "!".merah + "]".hijau + "  Perangkat Mobile   : " + ip["mobile"])
    }else if(response.statusCode == 502) {
        console.log("Periksa Koneksi Internet Anda !")
    }else{
        console.log("Galat, coba lagi !")
    }
})

/* ........................................ */

req("http://free.ipwhois.io/json/" + `${iplu}`, function (error, response, body){
    ip = JSON.parse(body)
    if(response.statusCode == 200) {
        console.log("[".hijau + "!".merah + "]".hijau + "  Zona Waktu         : " + ip["timezone"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Format Zona Waktu  : " + ip["timezone_gmt"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Kota               : " + ip["city"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Provinsi           : " + ip["region"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Mata Uang          : " + ip["currency"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Kode Mata Uang     : " + ip["currency_code"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Simbol Mata Uang   : " + ip["currency_symbol"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Nama Provider      : " + ip["isp"])
    }else if(response.statusCode == 502) {
        console.log("Periksa Koneksi Internet Anda !")
    }else{
        console.log("Galat, coba lagi !")
    }
})

/* ........................................ */

req("https://api.ipdata.co/" + `${iplu}` +"?api-key=" + key[1], function (error, response, body){
    ip = JSON.parse(body)
    if(response.statusCode == 200) {
        console.log("[".hijau + "!".merah + "]".hijau + "  Zona Waktu Bagian  : " + ip["time_zone"]["abbr"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Operator ISP       : " + ip["organisation"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Koneksi Tor        : " + ip["threat"]["is_tor"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Koneksi Proxy      : " + ip["threat"]["is_proxy"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Total Pencarian IP : " + ip["count"] + "x")
    }else if(response.statusCode == 502) {
        console.log("Periksa Koneksi Internet Anda !")
    }else{
        console.log("Galat, coba lagi !")
    }
}); tanya.close();
}); 

/* ........................................ */
