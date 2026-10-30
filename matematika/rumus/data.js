const data = [
  {
    nama: "Rumus Kuadratik",
    rumus: "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
    variabel: [
      { simbol: "$a$", keterangan: "koefisien $x^2$, dengan $a \\neq 0$" },
      { simbol: "$b$", keterangan: "koefisien $x$" },
      { simbol: "$c$", keterangan: "konstanta" }
    ],
    deskripsi: "Memberikan solusi dari persamaan kuadrat $ax^2 + bx + c = 0$. Nilai diskriminan $b^2 - 4ac$ menentukan sifat akarnya: positif menghasilkan dua akar real berbeda, nol menghasilkan satu akar ganda, dan negatif menghasilkan dua akar kompleks konjugat."
  },
  {
    nama: "Teorema Pythagoras",
    rumus: "$$a^2 + b^2 = c^2$$",
    variabel: [
      { simbol: "$a, b$", keterangan: "panjang sisi tegak segitiga siku-siku" },
      { simbol: "$c$", keterangan: "panjang hipotenusa (sisi miring)" }
    ],
    deskripsi: "Berlaku untuk setiap segitiga siku-siku di ruang Euklides. Kuadrat hipotenusa sama dengan jumlah kuadrat kedua sisi tegaknya. Hubungan ini menjadi dasar bagi konsep jarak Euclidean dan trigonometri."
  },
  {
    nama: "Luas Lingkaran",
    rumus: "$$L = \\pi r^2$$",
    variabel: [
      { simbol: "$L$", keterangan: "luas lingkaran" },
      { simbol: "$\\pi$", keterangan: "konstanta pi, sekitar $3{,}14159$" },
      { simbol: "$r$", keterangan: "jari-jari lingkaran" }
    ],
    deskripsi: "Menyatakan luas daerah yang dibatasi oleh lingkaran berjari-jari $r$. Konstanta $\\pi$ muncul secara alami sebagai perbandingan antara keliling dan diameter setiap lingkaran di ruang Euklides."
  },
  {
    nama: "Keliling Lingkaran",
    rumus: "$$K = 2\\pi r$$",
    variabel: [
      { simbol: "$K$", keterangan: "keliling lingkaran" },
      { simbol: "$\\pi$", keterangan: "konstanta pi, sekitar $3{,}14159$" },
      { simbol: "$r$", keterangan: "jari-jari lingkaran" }
    ],
    deskripsi: "Menyatakan panjang busur penuh yang membentuk lingkaran berjari-jari $r$. Jika menggunakan diameter $d = 2r$, rumus ini dapat ditulis $K = \\pi d$."
  },
  {
    nama: "Volume Bola",
    rumus: "$$V = \\frac{4}{3} \\pi r^3$$",
    variabel: [
      { simbol: "$V$", keterangan: "volume bola" },
      { simbol: "$r$", keterangan: "jari-jari bola" },
      { simbol: "$\\pi$", keterangan: "konstanta pi, sekitar $3{,}14159$" }
    ],
    deskripsi: "Menyatakan volume bola pejal berjari-jari $r$. Hasil ini pertama kali dibuktikan oleh Archimedes melalui metode ekshausti, jauh sebelum kalkulus ditemukan."
  },
  {
    nama: "Luas Permukaan Bola",
    rumus: "$$L = 4\\pi r^2$$",
    variabel: [
      { simbol: "$L$", keterangan: "luas permukaan bola" },
      { simbol: "$r$", keterangan: "jari-jari bola" },
      { simbol: "$\\pi$", keterangan: "konstanta pi, sekitar $3{,}14159$" }
    ],
    deskripsi: "Menyatakan luas kulit bola berjari-jari $r$. Menariknya, luas permukaan bola sama dengan empat kali luas lingkaran besar yang memotongnya — hasil yang juga dibuktikan oleh Archimedes."
  },
  {
    nama: "Luas Segitiga",
    rumus: "$$L = \\frac{1}{2} \\cdot a \\cdot t$$",
    variabel: [
      { simbol: "$L$", keterangan: "luas segitiga" },
      { simbol: "$a$", keterangan: "panjang alas segitiga" },
      { simbol: "$t$", keterangan: "tinggi segitiga terhadap alas $a$" }
    ],
    deskripsi: "Menyatakan luas segitiga sebagai setengah dari hasil kali alas dan tingginya. Berlaku untuk semua jenis segitiga — siku-siku, lancip, maupun tumpul — asalkan tinggi diukur tegak lurus terhadap alas."
  },
  {
    nama: "Volume Kerucut",
    rumus: "$$V = \\frac{1}{3} \\pi r^2 t$$",
    variabel: [
      { simbol: "$V$", keterangan: "volume kerucut" },
      { simbol: "$r$", keterangan: "jari-jari alas kerucut" },
      { simbol: "$t$", keterangan: "tinggi kerucut" }
    ],
    deskripsi: "Menyatakan volume kerucut sebagai sepertiga volume tabung dengan alas dan tinggi yang sama. Rumus ini juga berlaku untuk limas dengan alas sebarang: volumenya selalu sepertiga dari prisma yang sesuai."
  },
  {
    nama: "Volume Tabung",
    rumus: "$$V = \\pi r^2 t$$",
    variabel: [
      { simbol: "$V$", keterangan: "volume tabung" },
      { simbol: "$r$", keterangan: "jari-jari alas tabung" },
      { simbol: "$t$", keterangan: "tinggi tabung" }
    ],
    deskripsi: "Menyatakan volume tabung sebagai hasil kali luas alas lingkaran dengan tinggi tabung. Rumus ini adalah penerapan langsung prinsip bahwa volume prisma adalah luas alas dikali tinggi."
  },
  {
    nama: "Identitas Euler",
    rumus: "$$e^{i\\pi} + 1 = 0$$",
    variabel: [
      { simbol: "$e$", keterangan: "basis logaritma natural, sekitar $2{,}71828$" },
      { simbol: "$i$", keterangan: "satuan imajiner, dengan $i^2 = -1$" },
      { simbol: "$\\pi$", keterangan: "konstanta pi, sekitar $3{,}14159$" }
    ],
    deskripsi: "Menghubungkan lima konstanta fundamental matematika — $e$, $i$, $\\pi$, $1$, dan $0$ — dalam satu persamaan yang sangat sederhana. Sering disebut sebagai persamaan paling indah dalam matematika karena menyatukan cabang-cabang yang tampak terpisah."
  },
  {
    nama: "Deret Geometri Tak Hingga",
    rumus: "$$S_\\infty = \\frac{a}{1 - r}, \\quad |r| < 1$$",
    variabel: [
      { simbol: "$S_\\infty$", keterangan: "jumlah seluruh deret tak hingga" },
      { simbol: "$a$", keterangan: "suku pertama deret" },
      { simbol: "$r$", keterangan: "rasio antar-suku, dengan $|r| < 1$" }
    ],
    deskripsi: "Menghitung jumlah tak hingga dari deret geometri yang konvergen, yaitu deret dengan rasio $r$ antara $-1$ dan $1$. Sebagai contoh, $1 + \\frac{1}{2} + \\frac{1}{4} + \\cdots = 2$ karena $a = 1$ dan $r = \\frac{1}{2}$."
  },
  {
    nama: "Jumlah Deret Aritmetika",
    rumus: "$$S_n = \\frac{n}{2} (a + U_n)$$",
    variabel: [
      { simbol: "$S_n$", keterangan: "jumlah $n$ suku pertama" },
      { simbol: "$n$", keterangan: "banyaknya suku" },
      { simbol: "$a$", keterangan: "suku pertama" },
      { simbol: "$U_n$", keterangan: "suku ke-$n$" }
    ],
    deskripsi: "Menghitung jumlah $n$ suku pertama dari deret aritmetika, yaitu deret dengan selisih tetap antar-suku. Sebagai contoh, $1 + 2 + 3 + \\cdots + 100 = \\frac{100}{2}(1 + 100) = 5050$."
  },
  {
    nama: "Fungsi Kepadatan Normal",
    rumus: "$$f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\, e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}$$",
    variabel: [
      { simbol: "$\\mu$", keterangan: "rata-rata (mean) distribusi" },
      { simbol: "$\\sigma$", keterangan: "simpangan baku (standar deviasi)" },
      { simbol: "$\\sigma^2$", keterangan: "variansi distribusi" },
      { simbol: "$x$", keterangan: "nilai variabel acak" }
    ],
    deskripsi: "Fungsi kepadatan probabilitas untuk distribusi normal, yang berbentuk kurva lonceng simetris di sekitar rata-rata. Distribusi ini muncul di mana-mana berkat Teorema Limit Pusat, dan menjadi dasar statistika inferensial."
  },
  {
    nama: "Aturan Sinus",
    rumus: "$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$",
    variabel: [
      { simbol: "$a, b, c$", keterangan: "panjang sisi segitiga" },
      { simbol: "$A, B, C$", keterangan: "sudut di hadapan sisi $a$, $b$, dan $c$" }
    ],
    deskripsi: "Menyatakan bahwa perbandingan panjang sisi terhadap sinus sudut di hadapannya selalu sama pada segitiga sebarang. Berguna untuk menyelesaikan segitiga ketika diketahui dua sudut dan satu sisi, atau dua sisi dan satu sudut."
  },
  {
    nama: "Aturan Kosinus",
    rumus: "$$c^2 = a^2 + b^2 - 2ab \\cos C$$",
    variabel: [
      { simbol: "$a, b, c$", keterangan: "panjang sisi segitiga" },
      { simbol: "$C$", keterangan: "sudut di hadapan sisi $c$" }
    ],
    deskripsi: "Generalisasi Teorema Pythagoras untuk segitiga sebarang. Jika $C = 90^\\circ$, maka $\\cos C = 0$ dan rumus ini kembali menjadi $c^2 = a^2 + b^2$. Berguna untuk menyelesaikan segitiga ketika diketahui dua sisi dan sudut yang mengapitnya."
  },
  {
    nama: "Jarak Euclidean",
    rumus: "$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$",
    variabel: [
      { simbol: "$d$", keterangan: "jarak antara dua titik" },
      { simbol: "$(x_1, y_1)$", keterangan: "koordinat titik pertama" },
      { simbol: "$(x_2, y_2)$", keterangan: "koordinat titik kedua" }
    ],
    deskripsi: "Menghitung jarak terpendek antara dua titik pada bidang datar. Rumus ini adalah penerapan langsung Teorema Pythagoras dalam sistem koordinat Cartesian, dan dapat digeneralisasi ke ruang berdimensi sebarang."
  },
  {
    nama: "Persamaan Garis Lurus",
    rumus: "$$y = mx + c$$",
    variabel: [
      { simbol: "$y$", keterangan: "koordinat vertikal" },
      { simbol: "$x$", keterangan: "koordinat horizontal" },
      { simbol: "$m$", keterangan: "kemiringan (gradien) garis" },
      { simbol: "$c$", keterangan: "titik potong dengan sumbu $y$" }
    ],
    deskripsi: "Bentuk paling umum dari persamaan garis lurus. Kemiringan $m$ menyatakan seberapa curam garis tersebut, sedangkan $c$ menyatakan di mana garis memotong sumbu vertikal. Setiap garis lurus (kecuali garis vertikal) dapat dinyatakan dalam bentuk ini."
  },
  {
    nama: "Rumus Euler untuk Polihedron",
    rumus: "$$V - E + F = 2$$",
    variabel: [
      { simbol: "$V$", keterangan: "jumlah vertex (titik sudut)" },
      { simbol: "$E$", keterangan: "jumlah edge (sisi/rusuk)" },
      { simbol: "$F$", keterangan: "jumlah face (muka/bidang sisi)" }
    ],
    deskripsi: "Berlaku untuk setiap polihedron konveks. Rumus ini menyatakan bahwa kombinasi jumlah titik, sisi, dan muka selalu konstan, terlepas dari bentuk polihedronnya. Hasil ini menjadi jembatan awal antara geometri dan topologi."
  },
  {
    nama: "Nilai Harapan",
    rumus: "$$\\mathbb{E}[X] = \\sum_{i} x_i \\, p_i$$",
    variabel: [
      { simbol: "$\\mathbb{E}[X]$", keterangan: "nilai harapan dari variabel acak $X$" },
      { simbol: "$x_i$", keterangan: "nilai yang mungkin diambil oleh $X$" },
      { simbol: "$p_i$", keterangan: "probabilitas $X$ bernilai $x_i$" }
    ],
    deskripsi: "Menyatakan rata-rata jangka panjang dari suatu variabel acak, dengan setiap nilai ditimbang berdasarkan probabilitasnya. Sebagai contoh, nilai harapan pelemparan dadu adil adalah $\\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3{,}5$. Untuk variabel kontinu, penjumlahan diganti dengan integral."
  },
  {
    nama: "Variansi",
    rumus: "$$\\mathrm{Var}(X) = \\mathbb{E}[(X - \\mu)^2]$$",
    variabel: [
      { simbol: "$\\mathrm{Var}(X)$", keterangan: "variansi dari variabel acak $X$" },
      { simbol: "$\\mu$", keterangan: "nilai harapan $\\mathbb{E}[X]$" },
      { simbol: "$\\mathbb{E}$", keterangan: "operator nilai harapan" }
    ],
    deskripsi: "Mengukur seberapa jauh nilai-nilai variabel acak menyebar di sekitar rata-ratanya. Variansi adalah kuadrat dari simpangan baku. Alternatif rumus yang sering dipakai untuk perhitungan: $\\mathrm{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$."
  },
  {
    nama: "Luas Trapesium",
    rumus: "$$L = \\frac{1}{2}(a + b) \\cdot t$$",
    variabel: [
      { simbol: "$L$", keterangan: "luas trapesium" },
      { simbol: "$a, b$", keterangan: "panjang sisi sejajar" },
      { simbol: "$t$", keterangan: "tinggi (jarak tegak lurus antar sisi sejajar)" }
    ],
    deskripsi: "Menyatakan luas trapesium sebagai setengah dari hasil kali jumlah sisi sejajarnya dengan tingginya. Rumus ini dapat diturunkan dengan membagi trapesium menjadi dua segitiga atau satu jajar genjang."
  },
  {
    nama: "Luas Permukaan Balok",
    rumus: "$$L = 2(pl + pt + lt)$$",
    variabel: [
      { simbol: "$L$", keterangan: "luas permukaan balok" },
      { simbol: "$p$", keterangan: "panjang balok" },
      { simbol: "$l$", keterangan: "lebar balok" },
      { simbol: "$t$", keterangan: "tinggi balok" }
    ],
    deskripsi: "Menghitung total luas seluruh bidang sisi pada balok. Karena balok memiliki 3 pasang sisi yang saling berhadapan dan kongruen (sama ukuran), rumusnya adalah dua kali jumlah luas dari tiga sisi yang berbeda."
  },
  {
    nama: "Suku ke-n Barisan Aritmetika",
    rumus: "$$U_n = a + (n - 1)b$$",
    variabel: [
      { simbol: "$U_n$", keterangan: "suku ke-$n$" },
      { simbol: "$a$", keterangan: "suku pertama ($U_1$)" },
      { simbol: "$b$", keterangan: "beda (selisih) antar-suku" },
      { simbol: "$n$", keterangan: "indeks suku (bilangan asli)" }
    ],
    deskripsi: "Digunakan untuk mencari nilai suku tertentu pada barisan aritmetika tanpa harus menuliskan seluruh deretnya. Selisih antar-suku ($b$) selalu konstan. Contoh: Jika $a=3$ dan $b=2$, maka suku ke-5 adalah $U_5 = 3 + (5-1)2 = 11$."
  },
  {
    nama: "Suku ke-n Barisan Geometri",
    rumus: "$$U_n = a \\cdot r^{n-1}$$",
    variabel: [
      { simbol: "$U_n$", keterangan: "suku ke-$n$" },
      { simbol: "$a$", keterangan: "suku pertama ($U_1$)" },
      { simbol: "$r$", keterangan: "rasio (perbandingan antar-suku)" },
      { simbol: "$n$", keterangan: "indeks suku (bilangan asli)" }
    ],
    deskripsi: "Digunakan untuk mencari nilai suku ke-$n$ pada barisan geometri, di mana perbandingan antara dua suku berurutan selalu tetap. Contoh: Jika $a=2$ dan $r=3$, maka suku ke-4 adalah $U_4 = 2 \\cdot 3^{4-1} = 2 \\cdot 27 = 54$."
  },
  {
    nama: "Aturan Turunan Pangkat",
    rumus: "$$f'(x) = n \\cdot x^{n-1}$$",
    variabel: [
      { simbol: "$f'(x)$", keterangan: "turunan pertama dari fungsi $f(x)$" },
      { simbol: "$x$", keterangan: "variabel basis" },
      { simbol: "$n$", keterangan: "pangkat (konstanta bilangan real)" }
    ],
    deskripsi: "Aturan paling dasar dalam kalkulus diferensial untuk mencari laju perubahan fungsi polinomial. Turunkan pangkat menjadi koefisien di depan, lalu kurangi pangkatnya dengan satu. Contoh: Turunan dari $x^3$ adalah $3x^{3-1} = 3x^2$."
  }
];