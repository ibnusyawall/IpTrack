/* Created By Ibnu Syawal */
/* Say Alhamdulillah :) */

// Modul
var req = require('request');              // npm install --save request
var ip = require('./ip.json');             // atur ip target disini
var warna = require('./style/warna.js');  // npm install --save colors
var pala = require('./style/pala.js');    // bagian head

// Bagaikan Langit Dan Bumi
/* ........................................ */
req("http://api.ipstack.com/" + ip.ip +  "?access_key=" + ip.key, function (error, response, body){
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
// Aku Dan Engkau Selamanya Takan Pernah
req("http://ip-api.com/json/" + ip.ip + "?fields=mobile", function (error, response, body){
    ip = JSON.parse(body)
    if(response.statusCode == 200) {
        console.log("[".hijau + "!".merah + "]".hijau + "  Perangkat Mobile   : " + ip["mobile"])
    }else if(response.statusCode == 502) {
        console.log("Periksa Koneksi Internet Anda !")
    }else{
        console.log("Galat, coba lagi !")
    }
})
// Bisa Kan-Bersama, Sadar Ku Siapa
req("http://free.ipwhois.io/json/" + ip.ip, function (error, response, body){
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
// Ikhlaskan Sudah Aku Iklash kan
req("https://api.ipdata.co/" + ip.ip +"?api-key=" + ip.keys, function (error, response, body){
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
})
/* ........................................ */
// Don't Cry :)
