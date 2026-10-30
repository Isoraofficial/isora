const data = [
  {
    nama: "Harga per Satuan (Belanja)",
    deskripsi: "Menentukan produk mana yang lebih hemat saat belanja di minimarket atau supermarket, dengan membandingkan harga per gram atau per mililiter.",
    rumus: "$$\\text{Harga Satuan} = \\frac{\\text{Harga Total}}{\\text{Isi (gram/ml)}}$$",
    contoh: "Sabun A isi 250 ml seharga Rp 20.000. Sabun B isi 400 ml seharga Rp 28.000. Harga per ml A adalah $\\frac{20.000}{250} = 80$ rupiah. Harga per ml B adalah $\\frac{28.000}{400} = 70$ rupiah. Jadi, Sabun B lebih hemat."
  },
  {
    nama: "Diskon Berganda",
    deskripsi: "Menghitung harga akhir saat toko memberikan diskon berturut-turut (misal diskon 50% + 20%). Sering terjadi saat musim cuci gudang.",
    rumus: "$$\\text{Harga Akhir} = H \\times (1 - d_1) \\times (1 - d_2)$$",
    contoh: "Baju seharga Rp 400.000 bertuliskan diskon 50% + 20%. Harga akhirnya bukan Rp 280.000 (potong 30%), melainkan $400.000 \\times 0{,}50 \\times 0{,}80 = \\text{Rp } 160.000$."
  },
  {
    nama: "Bagi Tagihan Makan (Split Bill)",
    deskripsi: "Menghitung porsi bayar yang adil saat makan bersama teman, memperhitungkan pajak restoran dan biaya layanan.",
    rumus: "$$\\text{Bayar per Orang} = \\frac{\\text{Total Makanan} \\times (1 + \\text{Pajak} + \\text{Servis})}{\\text{Jumlah Orang}}$$",
    contoh: "Total pesanan Rp 600.000. Pajak 10% dan service 5%. Total menjadi $600.000 \\times 1{,}15 = 690.000$. Jika dibagi 4 orang, masing-masing membayar $\\frac{690.000}{4} = \\text{Rp } 172.500$."
  },
  {
    nama: "Cicilan Barang (Bunga Flat)",
    deskripsi: "Menghitung besaran angsuran bulanan saat membeli HP, motor, atau elektronik secara kredit dengan sistem bunga flat.",
    rumus: "$$\\text{Angsuran} = \\frac{\\text{Harga Barang}}{\\text{Tenor}} + (\\text{Harga Barang} \\times \\text{Bunga per bulan})$$",
    contoh: "HP seharga Rp 4.800.000 diangsur 12 bulan, bunga flat 2% per bulan. Angsuran pokok $= 400.000$. Bunga $= 4.800.000 \\times 0{,}02 = 96.000$. Total angsuran per bulan adalah Rp 496.000."
  },
  {
    nama: "Target Menabung Uang Muka (DP)",
    deskripsi: "Menghitung berapa banyak uang yang harus disisihkan setiap bulan untuk mencapai target tabungan (misal DP rumah atau motor).",
    rumus: "$$\\text{Tabungan Bulanan} = \\frac{\\text{Target DP}}{\\text{Jumlah Bulan}}$$",
    contoh: "Kamu ingin membeli motor dengan DP Rp 6.000.000 dalam 8 bulan ke depan. Maka kamu harus menabung sebesar $\\frac{6.000.000}{8} = \\text{Rp } 750.000$ setiap bulan."
  },
  {
    nama: "Kebutuhan Bahan Bakar Perjalanan",
    deskripsi: "Memperkirakan berapa liter bensin yang dibutuhkan dan biayanya untuk menempuh jarak tertentu, berdasarkan konsumsi kendaraan.",
    rumus: "$$\\text{Biaya BBM} = \\left(\\frac{\\text{Jarak (km)}}{\\text{Efisiensi (km/L)}}\\right) \\times \\text{Harga BBM}$$",
    contoh: "Motor kamu irit, 40 km/liter. Kamu mau mudik sejauh 200 km. Bensin yang dibutuhkan $\\frac{200}{40} = 5$ liter. Jika harga bensin Rp 10.000/liter, biaya BBM sekali jalan adalah Rp 50.000."
  },
  {
    nama: "Estimasi Waktu Tiba (ETA)",
    deskripsi: "Menghitung perkiraan waktu tiba di tujuan jika diketahui jarak dan kecepatan rata-rata kendaraan.",
    rumus: "$$\\text{Waktu} = \\frac{\\text{Jarak}}{\\text{Kecepatan}}$$",
    contoh: "Jarak kantor ke rumah 30 km. Jika rata-rata mengendarai mobil 40 km/jam, waktu tempuh adalah $\\frac{30}{40} = 0{,}75$ jam atau 45 menit. Jika berangkat jam 07.00, tiba jam 07.45."
  },
  {
    nama: "Kebutuhan Cat Dinding",
    deskripsi: "Menghitung berapa liter cat yang harus dibeli untuk mengecat ruangan agar tidak membeli terlalu banyak atau kurang.",
    rumus: "$$\\text{Cat (L)} = \\frac{\\text{Luas Dinding}}{\\text{Daya Sebar}} \\times \\text{Jumlah Lapis}$$",
    contoh: "Luas dinding kamar 40 m². Satu liter cat bisa menutupi 10 m². Karena ingin dicat 2 lapis, kebutuhan catnya $\\frac{40}{10} \\times 2 = 8$ liter. Kamu bisa beli 2 kaleng ukuran 4 liter."
  },
  {
    nama: "Kebutuhan Keramik Lantai",
    deskripsi: "Menghitung jumlah dus keramik yang dibutuhkan untuk lantai ruangan, sudah termasuk cadangan untuk pemotongan di sudut ruangan.",
    rumus: "$$\\text{Jumlah} = \\frac{\\text{Luas Lantai}}{\\text{Luas Keramik}} \\times 1{,}05$$",
    contoh: "Luas kamar 15 m². Keramik ukuran 40×40 cm memiliki luas 0,16 m². Jumlah keramik $= \\frac{15}{0{,}16} = 93{,}75$ keping. Ditambah 5% untuk cadangan, butuh sekitar $93{,}75 \\times 1{,}05 \\approx 98$ keping (biasanya beli 10 dus isi 10)."
  },
  {
    nama: "Menyesuaikan Porsi Resep",
    deskripsi: "Mengubah takaran bahan masakan saat ingin memasak untuk porsi yang lebih banyak atau lebih sedikit dari resep aslinya.",
    rumus: "$$\\text{Bahan Baru} = \\text{Bahan Asli} \\times \\frac{\\text{Porsi Baru}}{\\text{Porsi Asli}}$$",
    contoh: "Resep bolu untuk 4 orang butuh 150 gram gula. Jika kamu ingin membuat untuk 10 orang, gula yang dibutuhkan adalah $150 \\times \\frac{10}{4} = 375$ gram."
  },
  {
    nama: "Konversi Suhu (Oven / AC)",
    deskripsi: "Mengubah pengaturan suhu dari Fahrenheit ke Celsius atau sebaliknya, sangat berguna saat mengikuti resep luar negeri atau mengatur AC.",
    rumus: "$$C = \\frac{5}{9}(F - 32)$$",
    contoh: "Resep kue dari internet menggunakan suhu 350°F. Jika ovenmu pakai Celsius, atur suhunya menjadi $\\frac{5}{9}(350 - 32) = \\frac{5}{9}(318) \\approx 176{,}6^\\circ$C atau dibulatkan ke 180°C."
  },
  {
    nama: "Biaya Listrik Bulanan (AC/Setrika)",
    deskripsi: "Menghitung tagihan listrik dari alat elektronik tertentu berdasarkan daya, durasi pemakaian, dan tarif dasar listrik (TDL).",
    rumus: "$$\\text{Biaya} = \\frac{\\text{Daya (Watt)}}{1000} \\times \\text{Jam} \\times \\text{Tarif} \\times 30$$",
    contoh: "AC 1 PK (750 Watt) dinyalakan 8 jam sehari. Tarif listrik Rp 1.500/kWh. Biaya sebulan $= 0{,}75 \\text{ kW} \\times 8 \\text{ jam} \\times 1.500 \\times 30 = \\text{Rp } 270.000$."
  },
  {
    nama: "Kebutuhan Air Minum Harian",
    deskripsi: "Estimasi minimal air putih yang harus diminum setiap hari berdasarkan berat badan agar tubuh tidak dehidrasi.",
    rumus: "$$\\text{Air (ml)} = \\text{Berat Badan} \\times 30$$",
    contoh: "Jika berat badanmu 65 kg, minimal air yang harus diminum setiap hari adalah $65 \\times 30 = 1.950$ ml atau setara dengan 2 liter (sekitar 8 gelas)."
  },
  {
    nama: "Indeks Massa Tubuh (BMI)",
    deskripsi: "Mengetahui apakah berat badanmu ideal, kurang, atau berlebih berdasarkan perbandingan berat dan tinggi badan.",
    rumus: "$$\\text{BMI} = \\frac{\\text{Berat (kg)}}{\\text{Tinggi (m)}^2}$$",
    contoh: "Berat badan 75 kg dengan tinggi 1,70 m. BMI $= \\frac{75}{1{,}70^2} = \\frac{75}{2{,}89} \\approx 25{,}9$. Angka ini masuk kategori *overweight* (kelebihan berat badan) karena berada di atas 25."
  },
  {
    nama: "Target Detak Jantung Olahraga",
    deskripsi: "Menghitung batas detak jantung yang aman saat berolahraga agar pembakaran lemak optimal dan jantung tidak bekerja terlalu berat.",
    rumus: "$$\\text{Target} = (220 - \\text{Usia}) \\times 70\\%$$",
    contoh: "Kamu berusia 20 tahun dan ingin olahraga intensitas sedang (70%). Target detak jantungmu adalah $(220 - 20) \\times 0{,}70 = 200 \\times 0{,}70 = 140$ denyut per menit (bpm)."
  },
  {
    nama: "Dosis Obat Sirup Anak",
    deskripsi: "Menghitung volume obat cair yang tepat menggunakan rumus berdasarkan berat badan, bukan sekadar patokan umur (karena berat anak beda-beda).",
    rumus: "$$\\text{Volume (ml)} = \\frac{\\text{Dosis (mg)} \\times \\text{Berat (kg)}}{\\text{Konsentrasi (mg/ml)}}$$",
    contoh: "Dokter meresepkan 10 mg/kg. Anakmu beratnya 15 kg. Jika sirup yang dibeli berisi 120 mg/5 ml, maka satu kali minum $= \\frac{10 \\times 15}{120} \\times 5 = \\frac{150}{120} \\times 5 = 6{,}25$ ml."
  },
  {
    nama: "Skala Peta Perjalanan",
    deskripsi: "Mengubah jarak pada peta (atau Google Maps skala kecil) menjadi jarak sebenarnya untuk memperkirakan perjalanan hiking atau touring.",
    rumus: "$$\\text{Jarak Asli} = \\text{Jarak Peta} \\times \\text{Skala}$$",
    contoh: "Di peta tertulis skala 1:200.000. Jarak dari pos A ke pos B di peta adalah 12 cm. Jarak sebenarnya adalah $12 \\times 200.000 = 2.400.000$ cm, atau 24 km."
  },
  {
    nama: "Kapasitas Tandon Air",
    deskripsi: "Menentukan daya tampung tandon di rumah agar cukup untuk kebutuhan mandi, cuci, dan masak seisi keluarga.",
    rumus: "$$V = p \\times l \\times t \\times 1000$$",
    contoh: "Tandon persegi berukuran panjang 1 m, lebar 1 m, dan tinggi 1,2 m. Kapasitasnya $= 1 \\times 1 \\times 1{,}2 = 1{,}2$ m³. Dikali 1.000 menjadi 1.200 liter. Keluarga 4 orang cukup untuk 2-3 hari."
  },
  {
    nama: "Tarif Ojek Online",
    deskripsi: "Memperkirakan biaya perjalanan ojek online berdasarkan tarif dasar dan tarif per kilometer aplikasi.",
    rumus: "$$\\text{Biaya} = \\text{Tarif Awal} + (\\text{Jarak} \\times \\text{Tarif per km})$$",
    contoh: "Aplikasi menetapkan tarif awal Rp 10.000 dan Rp 2.500 per km. Jika jarak rumah ke stasiun 8 km, estimasi biayanya $= 10.000 + (8 \\times 2.500) = 10.000 + 20.000 = \\text{Rp } 30.000$."
  },
  {
    nama: "Bunga Majemuk Tabungan",
    deskripsi: "Menghitung keuntungan investasi atau tabungan berjangka yang bunganya dihitung berdasarkan saldo akhir tahun sebelumnya (bunga berbunga).",
    rumus: "$$M_n = M_0 \\times (1 + i)^n$$",
    contoh: "Kamu menabung Rp 10.000.000 dengan bunga 5% per tahun. Setelah 3 tahun, saldomu menjadi $10.000.000 \\times (1 + 0{,}05)^3 = 10.000.000 \\times 1{,}157625 = \\text{Rp } 11.576.250$."
  },
  {
    nama: "Berat Volume Koper (Maskapai)",
    deskripsi: "Menghitung berat volumetrik barang bawaan. Maskapai sering mengenakan biaya ekstra jika barang berat dimensinya melebihi batas, meskipun timbangannya belum mentok.",
    rumus: "$$\\text{Berat Volume} = \\frac{p \\times l \\times t}{6000}$$",
    contoh: "Kopermu berukuran 50 cm × 40 cm × 30 cm. Berat volume $= \\frac{50 \\times 40 \\times 30}{6000} = \\frac{60.000}{6000} = 10$ kg. Jika berat asli koper 8 kg, maskapai akan menagih berdasarkan 10 kg."
  },
  {
    nama: "Penyusutan Harga Jual HP Bekas",
    deskripsi: "Memperkirakan harga jual HP atau laptop bekasmu setelah beberapa tahun dipakai, agar tidak rugi terlalu banyak saat menjualnya.",
    rumus: "$$V_n = \\text{Harga Awal} \\times (1 - r)^n$$",
    contoh: "Beli HP Rp 6.000.000. Harga jual di pasaran turun sekitar 25% per tahun. Setelah 2 tahun dipakai, harga jualnya kira-kira $6.000.000 \\times (1 - 0{,}25)^2 = 6.000.000 \\times 0{,}5625 = \\text{Rp } 3.375.000$."
  },
  {
    nama: "Kebutuhan Kain Gorden",
    deskripsi: "Menghitung panjang kain yang dibutuhkan untuk gorden agar saat ditutup membentuk gelombang (rempel) yang rapi, bukan kaku.",
    rumus: "$$\\text{Kain} = \\left(\\frac{\\text{Lebar Jendela}}{1{,}5}\\right) \\times \\text{Tinggi}$$",
    contoh: "Jendela lebarnya 200 cm, tingginya 250 cm. Untuk gorden model lipat, lebar jendela dibagi 1,5 menghasilkan 2 panel kain. Total kain yang dibeli adalah $2 \\times 250 = 500$ cm (5 meter) atau 1 panel 250 cm per sisi."
  },
  {
    nama: "Rasio Kopi dan Air (Manual Brew)",
    deskripsi: "Menghitung takaran kopi yang tepat saat menyeduh kopi manual (V60/Aeropress) menggunakan rasio standar emas 1:15.",
    rumus: "$$\\text{Kopi (gram)} = \\frac{\\text{Air (ml)}}{15}$$",
    contoh: "Kamu ingin menyeduh 300 ml kopi. Maka bubuk kopi yang dibutuhkan adalah $\\frac{300}{15} = 20$ gram. Rasio ini menghasilkan seduhan yang seimbang, tidak terlalu pahit dan tidak kecut."
  },
  {
    nama: "Bunga Harian Kartu Kredit",
    deskripsi: "Menghitung denda atau bunga yang muncul jika kamu telat bayar tagihan kartu kredit, dihitung per hari sejak jatuh tempo.",
    rumus: "$$\\text{Bunga} = \\text{Tagihan} \\times \\left(\\frac{\\text{Bunga Tahunan}}{365}\\right) \\times \\text{Hari Telat}$$",
    contoh: "Tagihan kartu kreditmu Rp 2.000.000 dengan bunga tahunan 24%. Kamu telat bayar 10 hari. Bunga denda $= 2.000.000 \\times \\left(\\frac{0{,}24}{365}\\right) \\times 10 \\approx \\text{Rp } 13.150$."
  }
];