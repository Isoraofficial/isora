const data = [
  {
    nama: "Euclid",
    tahun_hidup: "fl. 300 SM",
    bidang: ["Geometri", "Teori Bilangan", "Logika Matematika"],
    karya_penemuan: ["Elements (13 buku geometri)", "Geometri aksiomatik", "Algoritma Euklides"],
    sorotan_karier: ["Mengajar di Alexandria, Mesir", "Karyanya menjadi standar geometri selama lebih dari 2000 tahun"],
    ringkasan: "Euclid adalah matematikawan Yunani yang dikenal sebagai Bapak Geometri. Melalui Elements, ia menyusun geometri secara aksiomatik dan menjadi dasar pendidikan matematika di banyak peradaban.",
    img: "euclid"
  },
  {
    nama: "Archimedes",
    tahun_hidup: "c. 287–212 SM",
    bidang: ["Geometri", "Mekanika", "Hidrostatika"],
    karya_penemuan: ["Metode ekshausti (cikal bakal integral)", "Hukum Archimedes", "Perhitungan nilai pi", "Rumus volume dan luas permukaan bola"],
    sorotan_karier: ["Bekerja di Syracuse, Sisilia", "Dijuluki 'Bapak Fisika Matematika'", "Karyanya menjadi rujukan geometri Yunani"],
    ringkasan: "Archimedes adalah matematikawan dan penemu Yunani kuno yang hidup di Syracuse. Ia menghitung luas dan volume bangun lengkung dengan metode ekshausti, mendekati konsep integral ribuan tahun sebelum Newton dan Leibniz.",
    img: "archimedes"
  },
  {
    nama: "Al-Khwarizmi",
    tahun_hidup: "c. 780–850",
    bidang: ["Aljabar", "Aritmetika", "Astronomi Matematika"],
    karya_penemuan: ["Kitab al-Jabr (fondasi aljabar)", "Sistem algoritma", "Pengenalan angka Hindu-Arab"],
    sorotan_karier: ["Bekerja di House of Wisdom, Baghdad", "Menjadi rujukan utama matematika Islam abad ke-9"],
    ringkasan: "Al-Khwarizmi adalah matematikawan Persia yang dijuluki Bapak Aljabar. Karyanya memperkenalkan metode sistematis penyelesaian persamaan dan menyebarkan sistem bilangan Hindu-Arab ke dunia Islam dan Eropa.",
    img: "al-khwarizmi"
  },
  {
    nama: "Omar Khayyam",
    tahun_hidup: "c. 1048–1131",
    bidang: ["Aljabar", "Geometri", "Astronomi"],
    karya_penemuan: ["Solusi geometris persamaan kubik", "Klasifikasi persamaan kubik", "Ekspansi binomial", "Kalender Jalali"],
    sorotan_karier: ["Bekerja di observatorium Isfahan", "Menulis Treatise on Demonstration of Problems of Algebra (1070)", "Dikenal juga sebagai penyair"],
    ringkasan: "Omar Khayyam adalah matematikawan Persia yang memberikan solusi sistematis pertama untuk persamaan kubik melalui perpotongan kerucut. Karyanya menjembatani aljabar dan geometri, jauh sebelum Cardano dan Tartaglia.",
    img: "omar-khayyam"
  },
  {
    nama: "René Descartes",
    tahun_hidup: "1596–1650",
    bidang: ["Geometri Analitik", "Filsafat Matematika", "Aljabar"],
    karya_penemuan: ["Sistem koordinat Cartesian", "Geometri analitik", "Notasi eksponen modern", "Metode keraguan metodis"],
    sorotan_karier: ["Menulis La Géométrie (1637)", "Salah satu pendiri filsafat modern", "Mempengaruhi Newton dan Leibniz"],
    ringkasan: "René Descartes adalah matematikawan dan filsuf Prancis yang menyatukan aljabar dan geometri melalui sistem koordinat. Penemuannya membuka jalan bagi kalkulus dan seluruh matematika modern.",
    img: "rene-descartes"
  },
  {
    nama: "Pierre de Fermat",
    tahun_hidup: "1607–1665",
    bidang: ["Teori Bilangan", "Geometri Analitik", "Probabilitas", "Kalkulus Awal"],
    karya_penemuan: ["Teorema Terakhir Fermat", "Teorema Kecil Fermat", "Prinsip Fermat", "Fondasi teori probabilitas (dengan Pascal)"],
    sorotan_karier: ["Magistrat di Toulouse", "Matematikawan amatir paling berpengaruh", "Korespondensi dengan Pascal tentang probabilitas"],
    ringkasan: "Pierre de Fermat adalah matematikawan Prancis yang meletakkan dasar teori bilangan modern. Teorema Terakhir Fermat menjadi teka-teki matematika paling terkenal selama lebih dari 350 tahun.",
    img: "pierre-de-fermat"
  },
  {
    nama: "Isaac Newton",
    tahun_hidup: "1643–1727",
    bidang: ["Kalkulus", "Mekanika", "Optik", "Gravitasi"],
    karya_penemuan: ["Kalkulus diferensial dan integral", "Hukum gerak Newton", "Hukum gravitasi universal", "Teori warna"],
    sorotan_karier: ["Profesor Lucasian di Cambridge", "Menulis Principia Mathematica (1687)", "Presiden Royal Society"],
    ringkasan: "Isaac Newton adalah matematikawan dan fisikawan Inggris yang merumuskan kalkulus dan hukum gerak. Karyanya menjadi fondasi fisika klasik dan matematika terapan selama berabad-abad.",
    img: "isaac-newton"
  },
  {
    nama: "Gottfried Wilhelm Leibniz",
    tahun_hidup: "1646–1716",
    bidang: ["Kalkulus", "Logika Matematika", "Filsafat", "Kombinatorika"],
    karya_penemuan: ["Notasi kalkulus (dy/dx, ∫)", "Kalkulus diferensial dan integral (independen dari Newton)", "Sistem bilangan biner", "Mesin hitung mekanik"],
    sorotan_karier: ["Bekerja untuk House of Hanover", "Pendiri Akademi Ilmu Pengetahuan Berlin", "Mempengaruhi logika simbolik modern"],
    ringkasan: "Gottfried Wilhelm Leibniz adalah polymath Jerman yang mengembangkan kalkulus secara independen dari Newton. Notasi yang ia ciptakan masih dipakai hingga hari ini, dan gagasannya tentang logika simbolik mendahului zaman.",
    img: "gottfried-leibniz"
  },
  {
    nama: "Leonhard Euler",
    tahun_hidup: "1707–1783",
    bidang: ["Analisis", "Teori Bilangan", "Geometri", "Matematika Terapan"],
    karya_penemuan: ["Notasi fungsi f(x)", "Bilangan e", "Rumus Euler", "Solusi masalah Jembatan Königsberg (teori graf)", "Identitas Euler"],
    sorotan_karier: ["Bekerja di Akademi St. Petersburg", "Profesor di Berlin Academy", "Matematikawan paling produktif dalam sejarah"],
    ringkasan: "Leonhard Euler adalah matematikawan Swiss yang paling produktif dan berpengaruh pada abad ke-18. Ia menstandarkan banyak notasi matematika modern dan meletakkan dasar analisis, teori graf, serta mekanika.",
    img: "leonhard-euler"
  },
  {
    nama: "Carl Friedrich Gauss",
    tahun_hidup: "1777–1855",
    bidang: ["Teori Bilangan", "Aljabar", "Geometri", "Analisis", "Statistika"],
    karya_penemuan: ["Teorema fundamental aljabar", "Distribusi normal (kurva Gauss)", "Geometri non-Euclid", "Metode kuadrat terkecil"],
    sorotan_karier: ["Profesor di University of Göttingen", "Direktur Observatorium Göttingen", "Dijuluki Princeps Mathematicorum"],
    ringkasan: "Carl Friedrich Gauss adalah salah satu matematikawan terbesar sepanjang sejarah. Kontribusinya merentang dari teori bilangan, statistika, hingga geometri diferensial dan fisika matematika.",
    img: "carl-friedrich-gauss"
  },
  {
    nama: "Augustin-Louis Cauchy",
    tahun_hidup: "1789–1857",
    bidang: ["Analisis Real", "Analisis Kompleks", "Aljabar", "Mekanika Kontinum"],
    karya_penemuan: ["Definisi rigor limit", "Teorema Cauchy", "Fondasi analisis kompleks", "Teori grup permutasi"],
    sorotan_karier: ["Profesor di École Polytechnique", "Anggota Académie des Sciences", "Meletakkan dasar analisis matematika modern"],
    ringkasan: "Augustin-Louis Cauchy adalah matematikawan Prancis yang membuat analisis matematika menjadi rigor. Definisi limit dan karyanya tentang fungsi kompleks menjadi fondasi kalkulus modern.",
    img: "augustin-louis-cauchy"
  },
  {
    nama: "Bernhard Riemann",
    tahun_hidup: "1826–1866",
    bidang: ["Geometri Diferensial", "Analisis Kompleks", "Teori Bilangan", "Topologi"],
    karya_penemuan: ["Geometri Riemann", "Integral Riemann", "Hipotesis Riemann", "Permukaan Riemann"],
    sorotan_karier: ["Profesor di University of Göttingen", "Kuliah Habilitation tentang geometri", "Mempengaruhi teori relativitas umum"],
    ringkasan: "Bernhard Riemann adalah matematikawan Jerman yang merevolusi geometri dan analisis. Geometri Riemann menjadi bahasa matematika bagi teori relativitas umum, sementara hipotesis Riemann masih menjadi masalah terbuka paling terkenal.",
    img: "bernhard-riemann"
  },
  {
    nama: "Georg Cantor",
    tahun_hidup: "1845–1918",
    bidang: ["Teori Himpunan", "Analisis Real", "Logika Matematika", "Topologi"],
    karya_penemuan: ["Teori himpunan", "Bilangan kardinal dan ordinal transfinit", "Argumen diagonal Cantor", "Himpunan Cantor"],
    sorotan_karier: ["Profesor di University of Halle", "Mendirikan teori himpunan sebagai cabang matematika", "Menghadapi penolakan dari matematikawan sezamannya"],
    ringkasan: "Georg Cantor adalah matematikawan Jerman yang menciptakan teori himpunan dan mengungkap hierarki tak hingga. Gagasannya tentang kardinalitas mengubah fondasi matematika dan memicu krisis dasar abad ke-20.",
    img: "georg-cantor"
  },
  {
    nama: "Henri Poincaré",
    tahun_hidup: "1854–1912",
    bidang: ["Topologi", "Sistem Dinamis", "Geometri", "Fisika Matematika"],
    karya_penemuan: ["Konjektur Poincaré", "Fondasi topologi aljabar", "Teori sistem dinamis", "Kontribusi pada relativitas khusus"],
    sorotan_karier: ["Profesor di Sorbonne", "Anggota Académie française", "Dijuluki matematikawan terbesar pada masanya"],
    ringkasan: "Henri Poincaré adalah matematikawan Prancis yang visioner. Ia meletakkan dasar topologi modern dan teori sistem dinamis, serta memberikan kontribusi penting pada fisika matematika.",
    img: "henri-poincare"
  },
  {
    nama: "David Hilbert",
    tahun_hidup: "1862–1943",
    bidang: ["Geometri", "Analisis", "Logika Matematika", "Fisika Matematika"],
    karya_penemuan: ["23 Masalah Hilbert", "Ruang Hilbert", "Aksiomatisasi geometri", "Program Hilbert"],
    sorotan_karier: ["Profesor di University of Göttingen", "Pidato 23 Masalah (1900)", "Pemimpin sekolah matematika Göttingen"],
    ringkasan: "David Hilbert adalah matematikawan Jerman yang menjadi tokoh sentral matematika awal abad ke-20. Daftar 23 masalahnya menetapkan arah riset matematika selama puluhan tahun.",
    img: "david-hilbert"
  },
  {
    nama: "Emmy Noether",
    tahun_hidup: "1882–1935",
    bidang: ["Aljabar Abstrak", "Teori Bilangan", "Fisika Matematika"],
    karya_penemuan: ["Teorema Noether", "Teori ideal", "Ring Noetherian", "Fondasi aljabar abstrak"],
    sorotan_karier: ["Bekerja di University of Göttingen", "Salah satu matematikawan wanita pertama yang menjadi profesor di Jerman", "Mempengaruhi aljabar modern"],
    ringkasan: "Emmy Noether adalah matematikawan Jerman yang menjadi tokoh sentral aljabar abstrak. Teorema Noether menghubungkan simetri dengan hukum konservasi, dan karyanya mengubah cara matematikawan memandang struktur aljabar.",
    img: "emmy-noether"
  },
  {
    nama: "Srinivasa Ramanujan",
    tahun_hidup: "1887–1920",
    bidang: ["Teori Bilangan", "Analisis", "Fungsi Khusus", "Partisi"],
    karya_penemuan: ["Fungsi theta Ramanujan", "Rumus partisi", "Deret tak hingga", "Notasi Ramanujan"],
    sorotan_karier: ["Bekerja dengan G.H. Hardy di Cambridge", "Fellow Royal Society", "Matematikawan otodidak paling terkenal"],
    ringkasan: "Srinivasa Ramanujan adalah matematikawan India yang belajar sendiri dan menghasilkan kontribusi luar biasa pada teori bilangan dan analisis. Banyak rumusnya baru terbukti puluhan tahun kemudian.",
    img: "srinivasa-ramanujan"
  },
  {
    nama: "Andrew Wiles",
    tahun_hidup: "1953–",
    bidang: ["Teori Bilangan", "Geometri Aljabar", "Kurva Eliptik"],
    karya_penemuan: ["Bukti Teorema Terakhir Fermat", "Teknik modularity lifting", "Kontribusi pada konjektur modularitas"],
    sorotan_karier: ["Profesor di University of Oxford", "Peraih Abel Prize 2016", "Peraih Copley Medal"],
    ringkasan: "Andrew Wiles adalah matematikawan Inggris yang memecahkan Teorema Terakhir Fermat setelah lebih dari 350 tahun menjadi misteri. Pembuktiannya membuka era baru dalam teori bilangan dan geometri aritmetika.",
    img: "andrew-wiles"
  },
  {
    nama: "Grigori Perelman",
    tahun_hidup: "1966–",
    bidang: ["Geometri Riemann", "Topologi", "Analisis Geometri"],
    karya_penemuan: ["Bukti Konjektur Poincaré", "Aliran Ricci dengan pembedahan", "Kontribusi pada konjektur geometrisasi"],
    sorotan_karier: ["Bekerja di Steklov Institute, St. Petersburg", "Menolak Fields Medal 2006", "Menolak Millennium Prize 2010"],
    ringkasan: "Grigori Perelman adalah matematikawan Rusia yang membuktikan Konjektur Poincaré, salah satu masalah paling terkenal dalam topologi. Ia dikenal karena menolak penghargaan bergengsi dan memilih hidup menyendiri.",
    img: "grigori-perelman"
  },
  {
    nama: "Maryam Mirzakhani",
    tahun_hidup: "1977–2017",
    bidang: ["Geometri Hiperbolik", "Sistem Dinamis", "Topologi", "Teori Ergodic"],
    karya_penemuan: ["Dinamika dan geometri permukaan Riemann", "Ruang moduli", "Bukti baru konjektur Witten", "Kontribusi pada teori Teichmüller"],
    sorotan_karier: ["Profesor di Stanford University", "Peraih Fields Medal 2014 (wanita pertama)", "Peraih Clay Research Award"],
    ringkasan: "Maryam Mirzakhani adalah matematikawan Iran yang menjadi wanita pertama penerima Fields Medal. Karyanya tentang geometri dan dinamika permukaan Riemann menghubungkan beberapa cabang matematika dan fisika teoretis.",
    img: "maryam-mirzakhani"
  }
];