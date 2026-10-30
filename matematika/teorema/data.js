const data = [
  {
    nama: "Teorema Pythagoras",
    pernyataan: "Pada segitiga siku-siku dengan sisi tegak $a$, $b$, dan hipotenusa $c$ berlaku: $$a^2 + b^2 = c^2$$",
    penjelasan: "Berlaku untuk setiap segitiga siku-siku di ruang Euklides. Hubungan ini menjadi dasar geometri analitik, trigonometri, dan konsep jarak Euclidean.",
    contoh: "Segitiga dengan sisi tegak $a = 3$ dan $b = 4$ memiliki hipotenusa $c = 5$, karena $3^2 + 4^2 = 9 + 16 = 25 = 5^2$. Tripel $(3, 4, 5)$ adalah salah satu tripel Pythagoras paling sederhana. Contoh lain: $(5, 12, 13)$ dan $(8, 15, 17)$.",
    meta: "Pythagoras, c. 500 SM"
  },
  {
    nama: "Teorema Terakhir Fermat",
    pernyataan: "Untuk setiap bilangan bulat $n > 2$, persamaan berikut tidak memiliki solusi bilangan bulat positif $x, y, z$: $$x^n + y^n = z^n$$",
    penjelasan: "Dirumuskan oleh Pierre de Fermat pada 1637 dan baru berhasil dibuktikan oleh Andrew Wiles pada 1994, setelah lebih dari 350 tahun menjadi teka-teki. Untuk $n = 2$, persamaan ini justru punya tak hingga banyak solusi — itulah tripel Pythagoras.",
    contoh: "Untuk $n = 3$, tidak ada bilangan bulat positif $x, y, z$ yang memenuhi $x^3 + y^3 = z^3$. Namun untuk $n = 2$, kita punya $3^2 + 4^2 = 5^2$ dan $5^2 + 12^2 = 13^2$.",
    meta: "Fermat, 1637; Wiles, 1994"
  },
  {
    nama: "Prinsip Pigeonhole",
    pernyataan: "Jika $n + 1$ objek ditempatkan ke dalam $n$ wadah, maka setidaknya satu wadah berisi lebih dari satu objek.",
    penjelasan: "Tampak sepele, tetapi sangat kuat dalam pembuktian eksistensi. Sering dipakai untuk menunjukkan bahwa suatu hal pasti terjadi tanpa perlu menemukan contohnya secara eksplisit.",
    contoh: "Di antara 13 orang, pasti ada minimal 2 orang yang lahir di bulan yang sama — karena hanya ada 12 bulan dalam setahun.",
    meta: "Dirichlet, 1834"
  },
  {
    nama: "Teorema Bayes",
    pernyataan: "Untuk kejadian $A$ dan $B$ dengan $P(B) > 0$: $$P(A \\mid B) = \\frac{P(B \\mid A)\\, P(A)}{P(B)}$$",
    penjelasan: "Menghubungkan probabilitas bersyarat dalam dua arah. Menjadi dasar inferensi Bayes dan banyak algoritma machine learning modern. Kesalahan paling umum adalah mengabaikan probabilitas awal (prior).",
    contoh: "Sebuah tes penyakit memiliki sensitivitas 99% dan spesifisitas 99%. Jika penyakit hanya menyerang 1 dari 10.000 orang, orang yang dites positif hanya memiliki peluang sekitar 1% benar-benar sakit, karena banyaknya *false positive* dari orang sehat.",
    meta: "Bayes, 1763"
  },
  {
    nama: "Teorema Fundamental Kalkulus",
    pernyataan: "Jika $f$ kontinu pada $[a, b]$ dan $F$ adalah antiturunan dari $f$ (yaitu $F'(x) = f(x)$), maka: $$\\int_a^b f(x)\\,dx = F(b) - F(a)$$",
    penjelasan: "Menghubungkan dua konsep utama kalkulus — turunan dan integral — sebagai operasi yang saling membalik. Tanpa teorema ini, menghitung integral harus dilakukan lewat limit jumlah yang sangat melelahkan.",
    contoh: "Untuk menghitung $\\int_0^2 x^2\\,dx$, cari antiturunan $F(x) = \\frac{x^3}{3}$, lalu hitung $F(2) - F(0) = \\frac{8}{3} - 0 = \\frac{8}{3}$.",
    meta: "Newton & Leibniz, abad ke-17"
  },
  {
    nama: "Teorema Fundamental Aljabar",
    pernyataan: "Setiap polinomial berderajat $n \\geq 1$ dengan koefisien kompleks memiliki tepat $n$ akar kompleks, dihitung dengan multiplisitas.",
    penjelasan: "Menjamin bahwa setiap persamaan polinomial selalu punya solusi di bilangan kompleks. Tanpa teorema ini, banyak persamaan tidak akan memiliki solusi, dan aljabar akan penuh dengan pengecualian.",
    contoh: "Polinomial $x^2 + 1 = 0$ tidak memiliki akar real, tetapi memiliki dua akar kompleks: $x = i$ dan $x = -i$.",
    meta: "Gauss, 1799"
  },
  {
    nama: "Teorema Limit Pusat",
    pernyataan: "Jika $X_1, X_2, \\ldots$ adalah variabel acak independen dengan rata-rata $\\mu$ dan variansi $\\sigma^2$, maka untuk $n \\to \\infty$: $$\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)$$",
    penjelasan: "Menjelaskan mengapa distribusi normal muncul di mana-mana. Rata-rata dari banyak variabel acak independen cenderung berdistribusi normal, apa pun distribusi aslinya.",
    contoh: "Jika kita melempar dadu 100 kali dan menghitung rata-ratanya, hasilnya akan mendekati 3,5 dan distribusinya mendekati normal — meskipun hasil satu kali lemparan dadu berdistribusi seragam.",
    meta: "Laplace & Lyapunov, abad ke-19"
  },
  {
    nama: "Teorema Nilai Antara",
    pernyataan: "Jika $f$ kontinu pada interval tertutup $[a, b]$ dan $f(a) \\leq k \\leq f(b)$, maka ada $c \\in [a, b]$ sehingga $f(c) = k$.",
    penjelasan: "Secara intuitif: fungsi kontinu tidak bisa 'melompat' dari satu nilai ke nilai lain tanpa melewati semua nilai di antaranya. Menjadi dasar algoritma pencarian akar seperti metode biseksi.",
    contoh: "Fungsi $f(x) = x^3 - x - 2$ memenuhi $f(1) = -2$ dan $f(2) = 4$. Karena $f$ kontinu dan $-2 \\leq 0 \\leq 4$, pasti ada $c \\in [1, 2]$ dengan $f(c) = 0$.",
    meta: "Bolzano, 1817"
  },
  {
    nama: "Bilangan Prima Tak Hingga",
    pernyataan: "Terdapat tak hingga banyaknya bilangan prima.",
    penjelasan: "Dibuktikan oleh Euclid melalui argumen kontradiksi yang elegan: jika bilangan prima berhingga, hasil kalinya ditambah satu menghasilkan bilangan baru yang tidak habis dibagi prima mana pun.",
    contoh: "Andaikan bilangan prima hanya $2, 3, 5$. Kalikan semuanya dan tambah satu: $2 \\times 3 \\times 5 + 1 = 31$. Bilangan $31$ bukan kelipatan $2$, $3$, maupun $5$, jadi ia harus memiliki faktor prima baru.",
    meta: "Euclid, c. 300 SM"
  },
  {
    nama: "Teorema Ketidaklengkapan Gödel",
    pernyataan: "Setiap sistem aksioma yang konsisten dan cukup kuat untuk memuat aritmetika pasti tidak lengkap — ada pernyataan benar yang tidak dapat dibuktikan di dalam sistem itu.",
    penjelasan: "Hasil ini mengubah cara matematikawan memandang batas sistem formal. Matematika tidak bisa sepenuhnya ditangkap oleh satu sistem aksioma tunggal.",
    contoh: "Hipotesis kontinuum Cantor tidak dapat dibuktikan maupun disangkal dalam ZFC (sistem aksioma standar matematika).",
    meta: "Gödel, 1931"
  },
  {
    nama: "Teorema Binomial",
    pernyataan: "Untuk setiap bilangan bulat $n \\geq 0$ dan bilangan real $x, y$: $$(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$$",
    penjelasan: "Menghubungkan ekspansi aljabar dengan kombinatorika. Koefisien $\\binom{n}{k}$ menyatakan banyaknya cara memilih $k$ faktor $y$ dari $n$ faktor yang tersedia.",
    contoh: "Untuk $n = 3$: $(x + y)^3 = x^3 + 3x^2 y + 3xy^2 + y^3$. Koefisien $1, 3, 3, 1$ sesuai dengan baris keempat segitiga Pascal.",
    meta: "Newton, 1665"
  },
  {
    nama: "Teorema Kecil Fermat",
    pernyataan: "Jika $p$ adalah bilangan prima dan $a$ adalah bilangan bulat yang tidak habis dibagi $p$, maka: $$a^{p-1} \\equiv 1 \\pmod{p}$$",
    penjelasan: "Menjadi dasar uji primalitas dan algoritma kriptografi RSA. Meski disebut 'kecil' untuk membedakannya dari Teorema Terakhir Fermat, hasil ini sangat kuat dalam komputasi.",
    contoh: "Ambil $p = 7$ dan $a = 3$. Maka $3^{6} = 729$, dan $729 \\div 7 = 104$ sisa $1$. Jadi $3^6 \\equiv 1 \\pmod{7}$.",
    meta: "Fermat, 1640"
  },
  {
    nama: "Teorema Euler",
    pernyataan: "Jika $a$ dan $n$ relatif prima (yaitu $\\gcd(a, n) = 1$), maka: $$a^{\\varphi(n)} \\equiv 1 \\pmod{n}$$",
    penjelasan: "Generalisasi Teorema Kecil Fermat dari bilangan prima ke sebarang bilangan. Fungsi $\\varphi(n)$ (totient Euler) menghitung banyaknya bilangan $\\leq n$ yang relatif prima dengan $n$.",
    contoh: "Ambil $n = 10$ dan $a = 3$. Karena $\\gcd(3, 10) = 1$ dan $\\varphi(10) = 4$, maka $3^4 = 81 \\equiv 1 \\pmod{10}$.",
    meta: "Euler, 1736"
  },
  {
    nama: "Teorema Rolle",
    pernyataan: "Jika $f$ kontinu pada $[a, b]$, diferensiabel pada $(a, b)$, dan $f(a) = f(b)$, maka ada $c \\in (a, b)$ sehingga $f'(c) = 0$.",
    penjelasan: "Secara intuitif: jika sebuah kurva mulus kembali ke ketinggian yang sama, pasti ada titik di antaranya yang garis singgungnya horizontal.",
    contoh: "Fungsi $f(x) = x^2 - 4x + 3$ pada interval $[0, 4]$ memiliki $f(0) = 3$ dan $f(4) = 3$. Turunannya $f'(x) = 2x - 4$, yang bernilai $0$ di $x = 2$.",
    meta: "Rolle, 1691"
  },
  {
    nama: "Teorema Nilai Rata-rata",
    pernyataan: "Jika $f$ kontinu pada $[a, b]$ dan diferensiabel pada $(a, b)$, maka ada $c \\in (a, b)$ sehingga: $$f'(c) = \\frac{f(b) - f(a)}{b - a}$$",
    penjelasan: "Menyatakan bahwa pada suatu titik di antara $a$ dan $b$, laju perubahan sesaat sama dengan laju perubahan rata-rata.",
    contoh: "Jika sebuah mobil menempuh 120 km dalam 2 jam, kecepatan rata-ratanya $60$ km/jam. Teorema ini menjamin speedometer mobil pasti pernah menunjukkan tepat $60$ km/jam.",
    meta: "Cauchy, 1823"
  },
  {
    nama: "Teorema Dasar Aritmetika",
    pernyataan: "Setiap bilangan bulat $n > 1$ dapat dinyatakan sebagai hasil kali bilangan prima secara unik, hingga urutan faktornya: $$n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}$$",
    penjelasan: "Menjamin bahwa bilangan prima adalah 'atom' dari bilangan bulat. Tanpa keunikan faktorisasi ini, banyak bukti dalam teori bilangan akan runtuh.",
    contoh: "Bilangan $360 = 2^3 \\times 3^2 \\times 5$. Tidak ada cara lain untuk memfaktorkan $360$ menjadi bilangan prima, kecuali dengan mengubah urutan faktornya.",
    meta: "Euclid, c. 300 SM"
  },
  {
    nama: "Hukum Bilangan Besar",
    pernyataan: "Jika $X_1, X_2, \\ldots$ adalah variabel acak independen dengan rata-rata $\\mu$ dan variansi berhingga, maka rata-rata sampelnya konvergen ke $\\mu$: $$\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^{n} X_i \\;\\xrightarrow{p}\\; \\mu \\quad \\text{untuk } n \\to \\infty$$",
    penjelasan: "Menjelaskan mengapa frekuensi relatif suatu kejadian mendekati probabilitasnya dalam jangka panjang. Inilah yang membuat asuransi dan kasino bisa bekerja secara prediktabel.",
    contoh: "Jika kita melempar koin 10 kali, hasilnya bisa 7 kepala. Tetapi jika 10.000 kali, proporsi kepala akan sangat dekat dengan 0,5.",
    meta: "Bernoulli, 1713"
  },
  {
    nama: "Teorema Apit",
    pernyataan: "Jika $g(x) \\leq f(x) \\leq h(x)$ dan $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$, maka $\\lim_{x \\to a} f(x) = L$.",
    penjelasan: "Jika sebuah fungsi 'terjepit' di antara dua fungsi yang menuju nilai yang sama, maka fungsi itu juga harus menuju nilai tersebut.",
    contoh: "$\\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right) = 0$, karena $-x^2 \\leq x^2 \\sin\\left(\\frac{1}{x}\\right) \\leq x^2$, dan kedua batas menuju $0$.",
    meta: "Dirichlet, 1835"
  },
  {
    nama: "Teorema Wilson",
    pernyataan: "Bilangan bulat $p > 1$ adalah prima jika dan hanya jika: $$(p - 1)! \\equiv -1 \\pmod{p}$$",
    penjelasan: "Memberikan karakterisasi eksak untuk bilangan prima. Meski secara teoretis indah, teorema ini tidak efisien untuk uji primalitas karena menghitung faktorial sangat lambat untuk $p$ besar.",
    contoh: "Untuk $p = 5$: $(5-1)! = 24$, dan $24 \\equiv -1 \\pmod{5}$ karena $24 = 5 \\times 5 - 1$.",
    meta: "Wilson, 1770"
  },
  {
    nama: "Teorema Ramsey",
    pernyataan: "Untuk setiap bilangan bulat $r, s \\geq 1$, terdapat bilangan terkecil $R(r, s)$ sehingga setiap graf dengan $R(r, s)$ vertex pasti memuat clique berukuran $r$ atau independent set berukuran $s$.",
    penjelasan: "Menyatakan bahwa dalam sistem yang cukup besar, keteraturan tertentu tidak bisa dihindari — tidak peduli bagaimana elemen-elemennya diatur.",
    contoh: "Nilai $R(3, 3) = 6$ berarti: dari 6 orang mana pun, selalu ada 3 orang yang saling kenal, atau 3 orang yang saling tidak kenal.",
    meta: "Ramsey, 1930"
  },
  {
    nama: "Aturan Sinus",
    pernyataan: "Pada segitiga sebarang dengan sisi $a, b, c$ dan sudut di hadapannya $A, B, C$, berlaku: $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$",
    penjelasan: "Menyatakan bahwa perbandingan panjang sisi terhadap sinus sudut di hadapannya selalu konstan. Berguna untuk menyelesaikan segitiga yang bukan siku-siku.",
    contoh: "Jika diketahui sudut $A = 30^\\circ$, sisi $a = 10$, dan sudut $B = 45^\\circ$, maka sisi $b = \\frac{10 \\cdot \\sin 45^\\circ}{\\sin 30^\\circ} = 10\\sqrt{2} \\approx 14{,}14$.",
    meta: "Matematikawan Arab & Eropa, abad pertengahan"
  },
  {
    nama: "Aturan Kosinus",
    pernyataan: "Pada segitiga sebarang, kuadrat panjang sisi sama dengan jumlah kuadrat sisi lain dikurangi dua kali hasil kali sisi tersebut dengan kosinus sudut apitnya: $$c^2 = a^2 + b^2 - 2ab \\cos C$$",
    penjelasan: "Generalisasi Teorema Pythagoras untuk semua jenis segitiga. Jika $C = 90^\\circ$, maka $\\cos C = 0$, sehingga kembali menjadi $c^2 = a^2 + b^2$.",
    contoh: "Jika $a=5$, $b=7$, dan sudut apit $C=60^\\circ$, maka $c^2 = 25 + 49 - 2(5)(7)(0{,}5) = 74 - 35 = 39$. Jadi $c = \\sqrt{39} \\approx 6{,}24$.",
    meta: "Al-Kashi, abad ke-15"
  },
  {
    nama: "Teorema Thales",
    pernyataan: "Jika $A$, $B$, dan $C$ adalah titik-titik berbeda pada sebuah lingkaran di mana garis $AC$ adalah diameter, maka sudut $\\angle ABC$ adalah sudut siku-siku ($90^\\circ$).",
    penjelasan: "Salah satu teorema geometri paling dasar. Menyatakan bahwa segitiga yang dibentuk oleh diameter lingkaran dan satu titik di kelilingnya selalu merupakan segitiga siku-siku.",
    contoh: "Sebuah taman berbentuk setengah lingkaran dengan diameter 10 meter. Jika Anda berdiri di titik mana pun di tepi lengkungan dan memandang kedua ujung diameter, sudut pandang Anda selalu tepat 90 derajat.",
    meta: "Thales, c. 600 SM"
  },
  {
    nama: "Rumus Euler untuk Polihedron",
    pernyataan: "Untuk setiap polihedron konveks, hubungan antara jumlah titik sudut ($V$), rusuk ($E$), dan sisi ($F$) adalah: $$V - E + F = 2$$",
    penjelasan: "Menunjukkan sebuah invarian topologis. Berapa pun bentuk polihedronnya, selama ia konveks (tanpa lubang), hasil perhitungan ini selalu sama.",
    contoh: "Kubus memiliki 8 titik sudut, 12 rusuk, dan 6 sisi. Maka $8 - 12 + 6 = 2$. Prisma segitiga memiliki 6 titik sudut, 9 rusuk, dan 5 sisi: $6 - 9 + 5 = 2$.",
    meta: "Leonhard Euler, 1758"
  },
  {
    nama: "Teorema Sisa Cina",
    pernyataan: "Jika $m_1, m_2, \\ldots, m_k$ adalah bilangan bulat yang saling relatif prima, maka sistem kongruensi $x \\equiv a_i \\pmod{m_i}$ memiliki solusi unik modulo $M = m_1 m_2 \\cdots m_k$.",
    penjelasan: "Memungkinkan kita menyelesaikan sistem persamaan modulo secara terpisah, lalu menggabungkannya menjadi satu solusi. Sangat penting dalam kriptografi dan ilmu komputer.",
    contoh: "Sistem $x \\equiv 2 \\pmod{3}$ dan $x \\equiv 3 \\pmod{5}$ memiliki solusi $x = 8$, karena $8 \\div 3$ sisa 2, dan $8 \\div 5$ sisa 3. Solusi uniknya adalah $8 \\pmod{15}$.",
    meta: "Sun Tzu, abad ke-3 M"
  },
  {
    nama: "Teorema De Moivre",
    pernyataan: "Untuk bilangan kompleks dalam bentuk polar dan bilangan bulat $n$, berlaku: $$(r(\\cos\\theta + i\\sin\\theta))^n = r^n(\\cos(n\\theta) + i\\sin(n\\theta))$$",
    penjelasan: "Mempermudah perhitungan pangkat bilangan kompleks. Sangat berguna dalam analisis fasor pada teknik elektro dan pencarian akar-akar kompleks.",
    contoh: "Untuk mencari $(1+i)^4$, ubah ke polar: $\\sqrt{2}(\\cos 45^\\circ + i\\sin 45^\\circ)$. Maka hasilnya $(\\sqrt{2})^4(\\cos 180^\\circ + i\\sin 180^\\circ) = 4(-1 + 0) = -4$.",
    meta: "Abraham de Moivre, 1707"
  },
  {
    nama: "Aturan L'Hôpital",
    pernyataan: "Jika $\\lim_{x \\to c} \\frac{f(x)}{g(x)}$ menghasilkan bentuk tak tentu $\\frac{0}{0}$ atau $\\frac{\\infty}{\\infty}$, maka: $$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$$",
    penjelasan: "Metode praktis untuk menghitung limit bentuk tak tentu dengan menggunakan turunan, menggantikan manipulasi aljabar yang rumit.",
    contoh: "$\\lim_{x \\to 0} \\frac{\\sin x}{x}$ menghasilkan $\\frac{0}{0}$. Turunkan pembilang dan penyebut: $\\lim_{x \\to 0} \\frac{\\cos x}{1} = \\frac{1}{1} = 1$.",
    meta: "Guillaume de l'Hôpital, 1696"
  },
  {
    nama: "Teorema Nilai Ekstrem",
    pernyataan: "Jika fungsi $f$ kontinu pada interval tertutup $[a, b]$, maka $f$ mencapai nilai maksimum dan minimum absolutnya di interval tersebut.",
    penjelasan: "Menjamin keberadaan nilai tertinggi dan terendah dari kurva kontinu pada selang tertutup. Menjadi dasar optimasi dalam kalkulus.",
    contoh: "Fungsi $f(x) = x^2$ pada interval $[-1, 2]$ memiliki nilai minimum absolut $0$ (di $x=0$) dan nilai maksimum absolut $4$ (di $x=2$).",
    meta: "Karl Weierstrass, 1861"
  },
  {
    nama: "Ketaksamaan Cauchy-Schwarz",
    pernyataan: "Untuk semua bilangan real $a_i$ dan $b_i$: $$\\left(\\sum_{i=1}^n a_i b_i\\right)^2 \\leq \\left(\\sum_{i=1}^n a_i^2\\right)\\left(\\sum_{i=1}^n b_i^2\\right)$$",
    penjelasan: "Salah satu ketaksamaan paling penting dalam matematika. Menghubungkan hasil kali titik (dot product) dengan norma vektor, dan menjadi fondasi bagi konsep sudut dalam ruang vektor.",
    contoh: "Untuk vektor $(1, 2)$ dan $(3, 4)$: $(1 \\cdot 3 + 2 \\cdot 4)^2 = 11^2 = 121$. Sedangkan $(1^2 + 2^2)(3^2 + 4^2) = 5 \\times 25 = 125$. Benar bahwa $121 \\leq 125$.",
    meta: "Cauchy & Schwarz, abad ke-19"
  },
  {
    nama: "Teorema Taylor",
    pernyataan: "Jika $f$ memiliki turunan hingga orde $n+1$ pada interval terbuka yang memuat $a$, maka: $$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)$$",
    penjelasan: "Mengaproksimasi fungsi rumit menggunakan polinomial. Semakin tinggi derajat polinomialnya, semakin akurat aproksimasinya. Menjadi dasar kalkulasi numerik pada komputer.",
    contoh: "Fungsi $e^x$ dapat didekati dengan $1 + x + \\frac{x^2}{2!}$ di sekitar $x=0$. Jika $x=0{,}1$, aproksimasinya adalah $1 + 0{,}1 + 0{,}005 = 1{,}105$, sangat dekat dengan nilai aslinya $1{,}10517$.",
    meta: "Brook Taylor, 1715"
  },
  {
    nama: "Teorema Bolzano-Weierstrass",
    pernyataan: "Setiap barisan bilangan real yang terbatas pasti memiliki subbarisan yang konvergen.",
    penjelasan: "Hasil fundamental dalam analisis real yang menyatakan bahwa dalam ruang terbatas, selalu ada pola yang mengumpul (konvergen).",
    contoh: "Barisan $(-1)^n$ (yaitu $-1, 1, -1, 1, ...$) adalah barisan terbatas. Subbarisan bilangan ganjilnya adalah $(-1, -1, -1, ...)$ yang konvergen ke $-1$.",
    meta: "Bolzano & Weierstrass, abad ke-19"
  },
  {
    nama: "Teorema Cayley-Hamilton",
    pernyataan: "Setiap matriks persegi memenuhi polinomial karakteristiknya sendiri: $$p(A) = 0$$",
    penjelasan: "Mengaitkan matriks dengan polinomial yang didefinisikan oleh determinan. Sangat berguna dalam aljabar linear untuk menghitung pangkat matriks atau invers tanpa komputasi berlebihan.",
    contoh: "Matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ memiliki polinomial karakteristik $\\lambda^2 - 5\\lambda - 2$. Maka $A^2 - 5A - 2I = 0$.",
    meta: "Cayley & Hamilton, 1858"
  },
  {
    nama: "Teorema Rank-Nulitas",
    pernyataan: "Untuk transformasi linear $T: V \\to W$ pada ruang vektor berdimensi hingga: $$\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)$$",
    penjelasan: "Menyatakan bahwa dimensi domain sama dengan jumlah dimensi hasil pemetaan dan dimensi ruang nol (kernel). Fondasi dalam memecahkan sistem persamaan linear.",
    contoh: "Sebuah matriks $3 \\times 3$ dengan rank 2 pasti memiliki nullity 1. Ini berarti ada 1 variabel bebas saat menyelesaikan persamaan linearnya.",
    meta: "Aljabar Linear, abad ke-19"
  },
  {
    nama: "Ketaksamaan Chebyshev",
    pernyataan: "Untuk variabel acak $X$ dengan rata-rata $\\mu$ dan simpangan baku $\\sigma$, berlaku: $$P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$",
    penjelasan: "Memberikan batas bawah probabilitas seberapa dekat data dengan rata-rata, tanpa perlu mengetahui bentuk distribusinya.",
    contoh: "Untuk distribusi apa pun, peluang data menyimpang lebih dari 2 simpangan baku dari rata-rata tidak akan melebihi $\\frac{1}{2^2} = 25\\%$. Artinya, minimal 75% data berada dalam rentang $\\mu \\pm 2\\sigma$.",
    meta: "Pafnuty Chebyshev, 1867"
  },
  {
    nama: "Ketaksamaan Markov",
    pernyataan: "Jika $X$ adalah variabel acak non-negatif dan $a > 0$, maka: $$P(X \\geq a) \\leq \\frac{\\mathbb{E}[X]}{a}$$",
    penjelasan: "Batas atas probabilitas variabel acak melebihi ambang tertentu berdasarkan nilai harapannya. Sangat berguna dalam analisis algoritma.",
    contoh: "Jika rata-rata waktu eksekusi algoritma adalah 10 detik, maka peluang algoritma memakan waktu lebih dari 50 detik tidak akan melebihi $\\frac{10}{50} = 20\\%$.",
    meta: "Andrey Markov, 1889"
  },
  {
    nama: "Hukum Probabilitas Total",
    pernyataan: "Jika $B_1, B_2, \\ldots, B_n$ adalah partisi dari ruang sampel, maka: $$P(A) = \\sum_{i=1}^n P(A \\mid B_i) P(B_i)$$",
    penjelasan: "Memungkinkan perhitungan probabilitas suatu kejadian dengan memecahnya berdasarkan skenario-skenario yang mungkin terjadi.",
    contoh: "Peluang mengambil bola merah dari kotak A adalah 0,4 dan dari kotak B adalah 0,6. Jika Anda memilih kotak secara acak (peluang 0,5), total peluang mendapat bola merah adalah $0{,}5(0{,}4) + 0{,}5(0{,}6) = 0{,}5$.",
    meta: "Teori Probabilitas Dasar"
  },
  {
    nama: "Ketaksamaan Jensen",
    pernyataan: "Jika $f$ adalah fungsi konveks dan $X$ variabel acak, maka: $$f(\\mathbb{E}[X]) \\leq \\mathbb{E}[f(X)]$$",
    penjelasan: "Menyatakan bahwa nilai fungsi dari rata-rata selalu lebih kecil atau sama dengan rata-rata dari nilai fungsi, untuk fungsi yang melengkung ke atas (konveks).",
    contoh: "Untuk $f(x) = x^2$ (konveks), rata-rata dari kuadrat selalu lebih besar atau sama dengan kuadrat dari rata-rata. Jika data $1$ dan $3$, rata-ratanya $2$. $2^2 = 4$, sedangkan rata-rata kuadratnya $\\frac{1^2 + 3^2}{2} = 5$. Benar bahwa $4 \\leq 5$.",
    meta: "Johan Jensen, 1906"
  },
  {
    nama: "Teorema Titik Tetap Brouwer",
    pernyataan: "Setiap fungsi kontinu dari cakram tertutup (atau bola pejal) ke dirinya sendiri memiliki setidaknya satu titik tetap.",
    penjelasan: "Menyatakan bahwa jika Anda memetakan suatu ruang secara kontinu ke ruang yang sama, pasti ada titik yang tidak bergerak (titik tetap).",
    contoh: "Jika Anda mengaduk kopi dalam cangkir lalu menunggu sampai diam, selalu ada satu titik di permukaan kopi yang posisinya persis sama seperti sebelum diaduk.",
    meta: "L.E.J. Brouwer, 1911"
  },
  {
    nama: "Teorema Titik Tetap Banach",
    pernyataan: "Setiap pemetaan kontraksi pada ruang metrik lengkap memiliki tepat satu titik tetap.",
    penjelasan: "Menjamin eksistensi dan keunikan solusi dari banyak persamaan iteratif. Menjadi dasar metode iterasi numerik seperti metode Newton-Raphson.",
    contoh: "Persamaan $x = \\cos(x)$ dapat diselesaikan dengan melakukan iterasi $x_{n+1} = \\cos(x_n)$ dari nilai awal apa pun. Konvergen ke nilai sekitar $0{,}739$.",
    meta: "Stefan Banach, 1922"
  },
  {
    nama: "Teorema Green",
    pernyataan: "Untuk kurva tertutup sederhana $C$ yang membatasi daerah $D$, berlaku: $$\\oint_C (L\\,dx + M\\,dy) = \\iint_D \\left(\\frac{\\partial M}{\\partial x} - \\frac{\\partial L}{\\partial y}\\right) dA$$",
    penjelasan: "Menghubungkan integral garis di sekitar batas dengan integral lipat dua di dalam daerah. Sangat berguna dalam perhitungan fluks dan sirkulasi medan vektor.",
    contoh: "Menghitung luas daerah $D$ dengan memilih $L = 0$ dan $M = x$, sehingga luas $= \\frac{1}{2} \\oint_C (x\\,dy - y\\,dx)$.",
    meta: "George Green, 1828"
  },
  {
    nama: "Teorema Stokes",
    pernyataan: "Integral garis dari medan vektor di sekitar batas permukaan sama dengan integral permukaan dari curl medan vektor tersebut: $$\\oint_{\\partial \\Sigma} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_\\Sigma (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$$",
    penjelasan: "Generalisasi Teorema Green ke ruang 3D. Menghubungkan sirkulasi medan vektor dengan rotasi lokalnya di permukaan.",
    contoh: "Jika medan vektor merepresentasikan aliran fluida, rotasi (curl) menunjukkan seberapa besar fluida berputar di titik tersebut. Teorema Stokes menyatakan total putaran sepanjang batas sama dengan total putaran di dalam area.",
    meta: "George Gabriel Stokes, 1854"
  },
  {
    nama: "Teorema Rotasi Euler",
    pernyataan: "Setiap perpindahan sebuah benda tegar (rigid body) di ruang tiga dimensi dengan satu titik tetap dapat direpresentasikan sebagai rotasi terhadap suatu sumbu tetap.",
    penjelasan: "Menjadi fondasi dalam kinematika benda tegar dan grafika komputer. Menjamin bahwa rotasi 3D apa pun dapat disederhanakan menjadi satu sumbu dan satu sudut.",
    contoh: "Jika Anda memutar kubus secara acak di tangan Anda, selalu ada satu garis lurus (sumbu) yang menembus kubus dan tetap tidak berubah arahnya selama rotasi.",
    meta: "Leonhard Euler, 1775"
  },
  {
    nama: "Kesetimbangan Nash",
    pernyataan: "Setiap permainan berhingga dengan strategi campuran memiliki setidaknya satu kesetimbangan Nash.",
    penjelasan: "Dalam teori permainan, kesetimbangan Nash adalah kondisi di mana tidak ada pemain yang bisa mendapatkan keuntungan dengan mengubah strateginya secara sepihak.",
    contoh: "Dalam permainan Batu-Gunting-Kertas, satu-satunya kesetimbangan Nash adalah memilih setiap opsi dengan probabilitas yang sama (1/3). Jika tidak, lawan bisa mengeksploitasi pola Anda.",
    meta: "John Forbes Nash, 1950"
  },
  {
    nama: "Teorema Ketidakmungkinan Arrow",
    pernyataan: "Jika sebuah sistem pemungutan suara peringkat memiliki setidaknya tiga pilihan dan memenuhi kriteria keadilan tertentu, maka sistem tersebut harus bersifat diktator.",
    penjelasan: "Hasil revolusioner dalam teori pilihan sosial. Menunjukkan bahwa tidak ada sistem pemilu yang sempurna secara matematis.",
    contoh: "Sistem pemilihan presiden yang adil untuk semua pihak tidak mungkin ada jika ada tiga kandidat atau lebih, kecuali kita menerima satu orang sebagai diktator yang keputusannya selalu menang.",
    meta: "Kenneth Arrow, 1951"
  },
  {
    nama: "Teorema Perkawinan Hall",
    pernyataan: "Graf bipartit memiliki pencocokan sempurna (perfect matching) jika dan hanya jika untuk setiap himpunan bagian $S$ dari satu sisi, jumlah tetangga $N(S)$ memenuhi $|N(S)| \\geq |S|$.",
    penjelasan: "Menentukan kapan semua elemen dalam satu kelompok dapat dipasangkan secara unik dengan elemen di kelompok lain. Sangat berguna dalam penjadwalan dan alokasi sumber daya.",
    contoh: "Jika ada 5 pelamar kerja dan 5 posisi, setiap pelamar harus memenuhi syarat untuk setidaknya 1 posisi. Jika ada 3 pelamar yang hanya bisa mengisi 2 posisi yang sama, maka pencocokan sempurna mustahil dilakukan.",
    meta: "Philip Hall, 1935"
  },
  {
    nama: "Teorema Dilworth",
    pernyataan: "Lebar dari sebuah poset (partially ordered set) sama dengan jumlah minimum rantai (chain) yang diperlukan untuk menutupi seluruh elemen poset tersebut.",
    penjelasan: "Menghubungkan konsep antichain (elemen yang tidak bisa dibandingkan) dengan partisi menjadi rantai terurut. Fundamental dalam teori himpunan terurut.",
    contoh: "Jika kita memiliki 4 antichain (elemen yang tidak ada hubungannya), kita membutuhkan minimal 4 rantai untuk mengelompokkan semua elemen tersebut.",
    meta: "Robert P. Dilworth, 1950"
  },
  {
    nama: "Teorema Garis Euler",
    pernyataan: "Pada segitiga sebarang, titik pusat (centroid), titik pusat lingkaran luar (circumcenter), dan titik pusat ortosenter (orthocenter) selalu terletak pada satu garis lurus.",
    penjelasan: "Garis yang menghubungkan ketiga titik pusat utama segitiga ini disebut Garis Euler. Jarak antara centroid ke orthocenter adalah dua kali jarak centroid ke circumcenter.",
    contoh: "Pada segitiga sama sisi, ketiga titik pusat ini berimpit di satu titik, sehingga garis Euler-nya menjadi titik tunggal.",
    meta: "Leonhard Euler, 1765"
  },
  {
    nama: "Teorema Empat Warna",
    pernyataan: "Setiap peta geografis yang digambar pada bidang datar dapat diwarnai dengan maksimal empat warna sedemikian rupa sehingga tidak ada dua wilayah yang berbatasan langsung memiliki warna yang sama.",
    penjelasan: "Merupakan teorema pertama yang dibuktikan secara masif dengan bantuan komputer. Menghubungkan pewarnaan graf (graph coloring) dengan topologi permukaan.",
    contoh: "Peta Indonesia yang rumit sekalipun hanya membutuhkan maksimal 4 warna untuk memastikan tidak ada provinsi yang bertetangga memiliki warna yang sama.",
    meta: "Appel & Haken, 1976"
  },
  {
    nama: "Teorema Ptolemy",
    pernyataan: "Untuk segiempat siklik (segiempat yang titik-titik sudutnya terletak pada satu lingkaran), hasil kali diagonalnya sama dengan jumlah hasil kali sisi-sisi yang berhadapan: $$ac + bd = pq$$",
    penjelasan: "Menghubungkan panjang sisi dan diagonal pada bangun datar di dalam lingkaran. Menjadi alat penting dalam geometri Euclidean dan astronomi kuno.",
    contoh: "Untuk segiempat beraturan (persegi) dengan sisi 1, diagonalnya adalah $\\sqrt{2}$. Maka $1 \\cdot 1 + 1 \\cdot 1 = \\sqrt{2} \\cdot \\sqrt{2}$, yang mana $2 = 2$.",
    meta: "Claudius Ptolemy, c. 150 M"
  },
  {
    nama: "Teorema Menelaus",
    pernyataan: "Untuk titik $D$, $E$, $F$ yang terletak pada garis sisi $BC$, $CA$, $AB$ pada segitiga $ABC$, ketiga titik tersebut segaris (kolinear) jika dan hanya jika: $$\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = -1$$",
    penjelasan: "Salah satu teorema klasik geometri proyektif. Menentukan syarat tiga titik pada perpanjangan sisi segitiga berada pada satu garis lurus.",
    contoh: "Jika $D, E, F$ adalah titik tengah dari sisi-sisi segitiga, maka $\\frac{1}{1} \\cdot \\frac{1}{1} \\cdot \\frac{1}{1} = 1 \\neq -1$, sehingga ketiganya tidak mungkin segaris.",
    meta: "Menelaus, c. 100 M"
  }
];