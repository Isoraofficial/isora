// data.js
const data = [
  {
    istilah: "Himpunan",
    definisi: "Kumpulan objek yang terdefinisi dengan jelas, sehingga setiap objek dapat ditentukan apakah termasuk anggota himpunan itu atau tidak.",
    deskripsi: "Himpunan adalah salah satu konsep paling dasar dalam matematika modern — hampir semua objek matematika dapat dinyatakan sebagai himpunan dengan struktur tambahan. Contoh: himpunan bilangan asli $\\{1, 2, 3, \\ldots\\}$, himpunan bilangan prima kurang dari 10 yaitu $\\{2, 3, 5, 7\\}$, dan himpunan kosong $\\emptyset$ yang tidak memiliki anggota."
  },
  {
    istilah: "Fungsi",
    definisi: "Relasi khusus antara dua himpunan yang memasangkan setiap anggota himpunan pertama (domain) ke tepat satu anggota himpunan kedua (kodomain).",
    deskripsi: "Fungsi adalah salah satu konsep paling fundamental dalam matematika — ia menyatakan hubungan deterministik antara dua kuantitas. Contoh: fungsi $f(x) = x^2$ memasangkan setiap bilangan real $x$ ke kuadratnya, sehingga $f(3) = 9$ dan $f(-2) = 4$. Setiap input selalu punya tepat satu output."
  },
  {
    istilah: "Limit",
    definisi: "Nilai yang didekati oleh suatu fungsi ketika inputnya mendekati suatu titik tertentu, meskipun fungsi itu mungkin tidak terdefinisi di titik tersebut.",
    deskripsi: "Limit adalah fondasi seluruh analisis matematika: turunan, integral, dan kontinuitas semuanya didefinisikan melalui limit. Contoh: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = 4$, meskipun fungsi $\\frac{x^2 - 4}{x - 2}$ tidak terdefinisi di $x = 2$ — tetapi nilainya mendekati $4$ ketika $x$ mendekati $2$."
  },
  {
    istilah: "Bilangan Prima",
    definisi: "Bilangan bulat $p > 1$ yang hanya habis dibagi oleh $1$ dan $p$ itu sendiri.",
    deskripsi: "Bilangan prima adalah 'atom' dari bilangan bulat: setiap bilangan bulat lebih besar dari 1 dapat difaktorkan menjadi bilangan prima secara unik. Contoh: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \\ldots$ — sedangkan $1$ bukan prima dan $4 = 2 \\times 2$ juga bukan prima karena bisa difaktorkan."
  },
  {
    istilah: "Grup",
    definisi: "Himpunan $G$ bersama operasi biner $\\cdot$ yang memenuhi tiga aksioma: asosiatif, memiliki elemen identitas, dan setiap elemen memiliki invers.",
    deskripsi: "Grup adalah salah satu struktur aljabar paling dasar — ia menangkap gagasan abstrak tentang 'simetri'. Contoh: himpunan bilangan bulat $\\mathbb{Z}$ bersama operasi penjumlahan membentuk grup, karena $(a + b) + c = a + (b + c)$, identitasnya $0$, dan invers dari $a$ adalah $-a$. Tetapi $\\mathbb{Z}$ bersama operasi perkalian bukan grup, karena tidak setiap bilangan bulat punya invers perkalian di $\\mathbb{Z}$."
  },
  {
    istilah: "Variabel",
    definisi: "Simbol, biasanya berupa huruf, yang mewakili bilangan atau objek matematika yang belum ditentukan atau dapat berubah.",
    deskripsi: "Variabel memungkinkan matematika menyatakan pola dan relasi secara umum, bukan hanya untuk kasus tertentu. Contoh: dalam persamaan $3x + 2 = 11$, huruf $x$ adalah variabel yang mewakili nilai yang harus dicari (dalam hal ini $x = 3$). Dalam fungsi $f(x) = x^2$, variabel $x$ mewakili sebarang bilangan yang dimasukkan ke fungsi."
  },
  {
    istilah: "Persamaan",
    definisi: "Pernyataan matematika yang menyatakan bahwa dua ekspresi memiliki nilai yang sama, ditandai dengan tanda sama dengan ($=$).",
    deskripsi: "Persamaan adalah alat utama untuk menyatakan relasi antar besaran dan mencari nilai yang belum diketahui. Contoh: $2x + 5 = 13$ adalah persamaan linear dengan solusi $x = 4$; $x^2 - 4 = 0$ adalah persamaan kuadrat dengan dua solusi $x = 2$ dan $x = -2$. Menyelesaikan persamaan berarti mencari semua nilai variabel yang membuat pernyataan itu benar."
  },
  {
    istilah: "Pertidaksamaan",
    definisi: "Pernyataan matematika yang menyatakan bahwa satu ekspresi lebih besar, lebih kecil, atau tidak sama dengan ekspresi lain, menggunakan tanda $<$, $>$, $\\leq$, $\\geq$, atau $\\neq$.",
    deskripsi: "Berbeda dengan persamaan yang solusinya biasanya berupa nilai tunggal, pertidaksamaan biasanya memiliki solusi berupa rentang nilai. Contoh: $2x + 3 < 11$ memiliki solusi $x < 4$ — yaitu semua bilangan real yang kurang dari $4$. Pertidaksamaan banyak dipakai dalam optimisasi dan analisis kendala."
  },
  {
    istilah: "Barisan",
    definisi: "Urutan objek matematika yang tersusun menurut aturan tertentu, biasanya diindeks oleh bilangan asli.",
    deskripsi: "Barisan adalah cara formal untuk menyatakan daftar tak hingga yang tersusun. Contoh: barisan bilangan asli $1, 2, 3, 4, \\ldots$; barisan bilangan genap $2, 4, 6, 8, \\ldots$; barisan Fibonacci $1, 1, 2, 3, 5, 8, 13, \\ldots$ yang setiap sukunya adalah jumlah dua suku sebelumnya. Barisan menjadi fondasi bagi konsep deret dan limit."
  },
  {
    istilah: "Deret",
    definisi: "Jumlah dari suku-suku suatu barisan, biasanya dinyatakan dalam bentuk $\\sum_{n=1}^{\\infty} a_n$.",
    deskripsi: "Deret adalah cara matematika menjumlahkan tak hingga banyak suku, dan pertanyaan utamanya adalah apakah jumlah itu konvergen (mendekati nilai tertentu) atau divergen. Contoh: deret geometri $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$ konvergen ke $2$, sedangkan deret harmonik $1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots$ divergen — jumlahnya tumbuh tanpa batas meskipun setiap sukunya mengecil menuju nol."
  },
  {
    istilah: "Turunan",
    definisi: "Laju perubahan sesaat suatu fungsi terhadap variabelnya, didefinisikan sebagai limit dari perbandingan perubahan fungsi terhadap perubahan variabel ketika perubahan itu menuju nol.",
    deskripsi: "Turunan mengukur seberapa cepat suatu kuantitas berubah pada titik tertentu — secara geometris, ia menyatakan kemiringan garis singgung pada grafik fungsi. Contoh: jika $f(x) = x^2$, maka $f'(x) = 2x$, sehingga di titik $x = 3$ laju perubahannya adalah $6$. Turunan dipakai luas dalam fisika (kecepatan adalah turunan posisi) dan optimisasi (mencari titik maksimum atau minimum)."
  },
  {
    istilah: "Integral",
    definisi: "Akumulasi perubahan sepanjang suatu interval, didefinisikan sebagai limit jumlah luas daerah-daerah kecil ketika lebar masing-masing menuju nol.",
    deskripsi: "Integral adalah operasi kebalikan dari turunan — jika turunan memecah sesuatu menjadi perubahan kecil, integral menggabungkan perubahan kecil itu kembali menjadi total. Contoh: $\\int_0^2 x\\,dx = 2$ menyatakan luas daerah di bawah garis $y = x$ dari $x = 0$ sampai $x = 2$. Integral dipakai untuk menghitung luas, volume, panjang kurva, dan total akumulasi dalam fisika dan ekonomi."
  },
  {
    istilah: "Kontinuitas",
    definisi: "Sifat fungsi yang tidak memiliki lompatan atau lubang pada suatu titik — secara formal, $\\lim_{x \\to a} f(x) = f(a)$.",
    deskripsi: "Fungsi kontinu adalah fungsi yang grafiknya dapat digambar tanpa mengangkat pena. Contoh: $f(x) = x^2$ kontinu di semua titik, sedangkan $f(x) = \\frac{1}{x}$ tidak kontinu di $x = 0$ karena nilainya melonjak menuju tak hingga. Kontinuitas adalah syarat penting bagi banyak teorema analisis, termasuk Teorema Nilai Antara."
  },
  {
    istilah: "Vektor",
    definisi: "Objek matematika yang memiliki besar dan arah, biasanya dinyatakan sebagai pasangan atau tupel bilangan dan dapat dijumlahkan serta dikalikan dengan skalar.",
    deskripsi: "Vektor adalah cara matematika menyatakan kuantitas yang tidak cukup dijelaskan oleh satu angka saja. Contoh: dalam fisika, kecepatan adalah vektor karena memiliki besar (misal $50$ km/jam) sekaligus arah (misal ke utara). Dalam ruang dua dimensi, vektor $(3, 4)$ menyatakan perpindahan $3$ satuan ke kanan dan $4$ satuan ke atas, dengan panjang $\\sqrt{3^2 + 4^2} = 5$."
  },
  {
    istilah: "Matriks",
    definisi: "Susunan bilangan berbentuk persegi panjang yang disusun dalam baris dan kolom, yang dapat dijumlahkan dan dikalikan menurut aturan tertentu.",
    deskripsi: "Matriks adalah alat utama aljabar linear untuk menyatakan transformasi dan sistem persamaan secara kompak. Contoh: matriks $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ memiliki dua baris dan dua kolom. Perkalian matriks dapat menyatakan rotasi, penskalaan, dan pencerminan dalam grafik komputer — serta menyelesaikan sistem persamaan linear dengan puluhan ribu variabel."
  },
  {
    istilah: "Ruang Vektor",
    definisi: "Himpunan objek (disebut vektor) yang dilengkapi dua operasi — penjumlahan vektor dan perkalian skalar — serta memenuhi delapan aksioma tertentu.",
    deskripsi: "Ruang vektor adalah generalisasi dari gagasan vektor di ruang dua atau tiga dimensi ke konteks yang jauh lebih umum. Contoh: himpunan semua pasangan bilangan real $\\mathbb{R}^2$ membentuk ruang vektor; himpunan semua polinomial berderajat paling tinggi 3 juga membentuk ruang vektor. Konsep ini menjadi fondasi aljabar linear, analisis fungsional, dan mekanika kuantum."
  },
  {
    istilah: "Probabilitas",
    definisi: "Ukuran numerik antara 0 dan 1 yang menyatakan seberapa besar kemungkinan suatu kejadian terjadi, dengan 0 berarti mustahil dan 1 berarti pasti.",
    deskripsi: "Probabilitas adalah cara formal untuk menangani ketidakpastian dan menjadi fondasi statistika serta machine learning. Contoh: peluang munculnya angka 4 pada dadu adil adalah $\\frac{1}{6}$, peluang munculnya angka genap adalah $\\frac{3}{6} = \\frac{1}{2}$, dan peluang munculnya angka lebih dari 6 adalah $0$. Probabilitas kejadian saling lepas dijumlahkan: $P(A \\cup B) = P(A) + P(B)$."
  },
  {
    istilah: "Distribusi Normal",
    definisi: "Distribusi probabilitas kontinu berbentuk lonceng simetris yang sepenuhnya ditentukan oleh rata-rata $\\mu$ dan simpangan baku $\\sigma$.",
    deskripsi: "Distribusi normal (atau distribusi Gauss) adalah distribusi paling penting dalam statistika karena muncul di mana-mana lewat Teorema Limit Pusat. Contoh: tinggi badan orang dewasa, nilai ujian, dan galat pengukuran sering kali mendekati distribusi normal. Sekitar 68% data berada dalam satu simpangan baku dari rata-rata, 95% dalam dua simpangan baku, dan 99,7% dalam tiga simpangan baku."
  },
  {
    istilah: "Graf",
    definisi: "Struktur matematika yang terdiri dari himpunan titik (vertex) dan himpunan sisi (edge) yang menghubungkan pasangan titik-titik tersebut.",
    deskripsi: "Graf adalah alat utama untuk memodelkan jaringan dan relasi — dari pertemanan di media sosial sampai rute penerbangan. Contoh: peta kota dapat dimodelkan sebagai graf, dengan persimpangan sebagai vertex dan jalan sebagai edge. Algoritma pencarian jalur terpendek (seperti Dijkstra) berjalan di atas graf dan menjadi fondasi GPS modern."
  },
  {
    istilah: "Kongruensi",
    definisi: "Dua bilangan bulat $a$ dan $b$ dikatakan kongruen modulo $n$ jika selisihnya $a - b$ habis dibagi $n$, ditulis $a \\equiv b \\pmod{n}$.",
    deskripsi: "Kongruensi memungkinkan kita 'berhitung dalam lingkaran' — hanya memperhatikan sisa pembagian, bukan nilai absolutnya. Contoh: $17 \\equiv 5 \\pmod{12}$ karena $17 - 5 = 12$ habis dibagi $12$; pada jam dinding, pukul 17 sama dengan pukul 5 sore. Konsep ini menjadi fondasi kriptografi RSA yang mengamankan komunikasi internet."
  }
];