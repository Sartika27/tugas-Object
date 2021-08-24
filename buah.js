let buah = [
    {
        Gambar: './foto/apple.png',
        Nama  : 'Apel',
        Warna : 'Merah',
        Latin: 'Malus Mill',
        Seed: 'Single Seed'
    },
     {
        Gambar: './foto/blueberry.png',
        Nama  : 'Arbei',
        Warna : 'Ungu',
        Latin : 'Cyanococcus',
        Seed  : 'Single Seed'
    },
      {
        Gambar: './foto/cherry.png',
        Nama  : 'Ceri',
        Warna : 'Merah Hitam',
        Latin : 'Prunus Cerasus',
        Seed  : 'Double Seed'
    },
     {
        Gambar: './foto/lemon.png',
        Nama  : 'Jeruk Kuning',
        Warna : 'Kuning Cerah',
        Latin : 'Citrus Limun',
        Seed  : 'Single Seed'
    },
    
       {
        Gambar: './foto/orange.png',
        Nama  : 'Jeruk Oren',
        Warna : 'Oren',
        Latin : 'Citrus',
        Seed  : 'Single Seed'
    },
   
    {
        Gambar: './foto/mango.png',
        Nama  : 'Mangga',
        Warna : 'Hijau Tua',
        Latin : 'Mangifera indica',
        Seed  : 'Double Seed'
    },
 
    {
        Gambar: './foto/pear.png',
        Nama  : 'Pir',
        Warna : 'Hijau Muda',
        Latin : 'Pyrus',
        Seed  : 'Double Seed'
    },
    {
        Gambar: './foto/banana.png',
        Nama  : 'Pisang',
        Warna : 'Kuning',
        Latin : 'Musa',
        Seed  : 'Double Seed'
    },
]





let listBuah = document.getElementById("list-buah");

for(let i = 0; i <= buah.length; i++){
    listBuah.innerHTML += `
    <div id="buah"> 
    <img src='${buah[i].Gambar}'/>
    <h3>${buah[i].Nama}</h3>
    <h3>Warna: ${buah[i].Warna}</h3>
    <h3>Latin : ${buah[i].Latin}</h3>
    <h3>Seed Type: ${buah[i].Seed}</h3>
     </div>` 
}