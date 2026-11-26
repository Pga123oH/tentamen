/* Sesi 2 — Abdominal wall & saluran cerna bawah.
   Dirangkum dari rekaman praktikum + PPT Ajar Atrium "I.3 Sesi 2". */
(window.SESSIONS = window.SESSIONS || []).push((() => {
const SIGNALS = [
  { t: "Limfatik", d: "Sesi 2 tidak akan keluar; sesi lain mungkin. Diucapkan dengan \"kayaknya\", lalu diulang \"catat\".", s: "kuat", sl: "67–73", w: "01:45", top: true },
  { t: "Anomali", d: "Jarang ditanya, paling banyak satu nomor.", s: "kira", sl: "—", w: "01:45" },
  { t: "Nama arteri arcade", d: "Boleh menjawab dengan istilah Latin saja (arcus arteriosus).", s: "jelas", sl: "48, 51", w: "05:00" },
  { t: "Jejunum vs ileum", d: "Pembeda paling jelas: plicae circulares. Jejunum rapat, ileum jarang. Ini jawaban saat ditanya tips tentamen.", s: "jelas", sl: "51", w: "05:00", top: true },
  { t: "Taenia coli", d: "Angkatan sebelumnya cukup menjawab \"taenia coli\". Untuk tahun ini belum pasti, jadi tetap hafalkan ketiganya.", s: "belum", sl: "59–61", w: "15:00" },
  { t: "Taenia di perlekatan mesocolon transversum", d: "Kalau ditunjuk di sana, jawabannya taenia mesocolica.", s: "jelas", sl: "59–60", w: "15:00" },
  { t: "Mesocolon sigmoideum", d: "Penunjuk pasti diletakkan dekat colon sigmoideum.", s: "jelas", sl: "39", w: "20:00" },
  { t: "Divertikulum (true/false)", d: "Belum kompetensi kalian, lupakan saja.", s: "jelas", sl: "—", w: "15:00" },
  { t: "Fascia Camper vs Scarpa", d: "Menyebut salah satunya dianggap benar. Lapisan lemak kuning: sebut Camper.", s: "jelas", sl: "9", w: "45:00" },
  { t: "Vagina m. recti", d: "Cukup sebut lamina anterior atau posterior, tidak perlu merinci aponeurosis penyusunnya. Disebut \"yang paling ditanya\".", s: "jelas", sl: "19–20", w: "45:00–50:00", top: true },
  { t: "Aponeurosis", d: "Kemungkinan tidak ditanya sendiri karena ada di mana-mana.", s: "kira", sl: "12", w: "50:00" },
  { t: "M. psoas minor", d: "Kalau ditunjuk, kemungkinan di tendonnya yang putih dan panjang.", s: "kuat", sl: "24", w: "01:00" },
  { t: "Tiga saraf dinding posterior", d: "Preparat ujian dipilih yang menampakkan ketiganya (subcostalis, iliohypogastricus, ilioinguinalis), jadi bisa dikenali dari urutannya.", s: "kuat", sl: "26", w: "01:10" },
  { t: "Batas canalis inguinalis", d: "Tampaknya disebut jarang ditanyakan, tetapi teorinya tetap dijelaskan. Audio di bagian ini tidak jelas.", s: "belum", sl: "28", w: "01:15" },
  { t: "Sinonim istilah", d: "Banyak sinonim; rujuk TA2 (Terminologia Anatomica). Referensi bisa membantu membela jawaban.", s: "kuat", sl: "semua", w: "01:40" }
];


const GROUPS = [
  { id: "usus-halus", t: "Jejunum, ileum, caecum, appendix", sl: "slide 46–56", items: [
    ["Arterial arcade dan vasa recta", "terlihat", "Jejunum: arcade 1–2 tingkat, vasa recta panjang. Ileum: lebih kompleks, vasa recta pendek. Keduanya cabang a. mesenterica superior.", "48, 51", "05:00"],
    ["Plicae circulares", "terlihat", "Jejunum rapat, ileum jarang. Pembeda paling jelas di preparat.", "51", "05:00"],
    ["Peyer's patches", "sulit", "Dilihat di histologi. Banyak di ileum sebagai pertahanan terhadap refluks bakteri dari caecum.", "51", "05:00"],
    ["Appendix vermiformis", "terlihat", "Penanda bahwa sudah masuk caecum. Lumennya sempit dan buntu, mudah tersumbat feses.", "54", "05:00–10:00"],
    ["Valvula ileocaecalis", "terlihat", "Post mortem berbentuk katup: labrum superius (ileocolicum), labrum inferius (ileocaecale), dan frenulum. Saat hidup tampak seperti donat (papilla ilealis).", "55", "10:00"],
    ["Ostium appendicis vermiformis", "terlihat", "Lubang di bawah valvula ileocaecalis, menuju appendix.", "55", "10:00"],
    ["Mesoappendix", "terlihat", "Lipatan peritoneum yang menggantung appendix.", "54", "10:00"],
    ["A. appendicularis", "tidak", "Secara teori berjalan di dalam mesoappendix.", "54", "10:00"]
  ]},
  { id: "colon", t: "Colon", sl: "slide 57–61", items: [
    ["Haustra coli", "tidak", "Preparat sudah lurus. Haustra terbentuk karena taenia lebih pendek dari ususnya, sehingga dinding tertarik menggelembung.", "59", "10:00"],
    ["Taenia coli (umum)", "sulit", "Penebalan lapisan otot longitudinal yang memisah jadi tiga. Sebagian preparat terpotong tepat di taenia.", "60–61", "15:00"],
    ["Taenia mesocolica", "terlihat", "Tempat menempelnya mesocolon transversum.", "59–60", "15:00, 20:00"],
    ["Taenia omentalis", "sulit", "Dikenali dari appendices epiploicae yang menempel di sepanjang garisnya.", "59–60", "15:00"],
    ["Taenia libera", "sulit", "Tidak ditempeli apa pun. Paling jelas dekat junctio rectosigmoid.", "59–61", "15:00, 20:00"],
    ["Flexura coli dextra dan sinistra", "terlihat", "Dextra letaknya lebih rendah (L2) daripada sinistra (L1).", "57", "15:00"],
    ["Plicae semilunares", "terlihat", "Lipatan mukosa di usus besar.", "59", "20:00"],
    ["Junctio rectosigmoid", "terlihat", "Batasnya saat ketiga taenia menyebar dan tidak lagi berupa pita.", "61", "20:00"]
  ]},
  { id: "peritoneum", t: "Peritoneum dan rongganya", sl: "slide 31–44", items: [
    ["Recessus intersigmoideus", "terlihat", "Di antara lengkung colon sigmoideum, di sisi belakangnya.", "41", "15:00–20:00"],
    ["Recessus ileocaecalis sup./inf. dan retrocaecalis", "belum", "Namai sesuai posisinya terhadap ileocaecal junction; disebut \"cukup kalian pahami\".", "40–41", "20:00"],
    ["Plica caecalis", "terlihat", "Lipatan dekat caecum. Tidak ada di teks slide.", "—", "20:00"],
    ["Mesenterium dan omentum", "belum", "Omentum minus dan mesenterium: 2 lapis. Omentum majus: 4 lapis. Semuanya lipatan peritoneum viseral.", "34", "20:00"],
    ["Excavatio vs spatium", "terlihat", "Excavatio masih di dalam peritoneum; spatium (retropubicum, retroperitoneale) di luarnya.", "43–44", "40:00"],
    ["Bursa omentalis", "belum", "Kalau ditanya ruangannya, jawaban \"bursa omentalis\" tampaknya sudah cukup.", "42", "01:35"]
  ]},
  { id: "rectum", t: "Rectum dan anus", sl: "slide 63–66", items: [
    ["Flexura sacralis", "terlihat", "Rectum mengikuti lengkung sacrum.", "64", "20:00"],
    ["Columna dan sinus analis", "sulit", "Sinus yang menjorok ke dalam, columna di sebelahnya.", "66", "25:00–35:00"],
    ["Linea dentata / pectinata", "sulit", "Di bawah columna dan sinus. Beda warna mukosa (hindgut lebih merah, proctodeum lebih pucat) harus dibayangkan.", "66", "30:00–35:00"],
    ["Linea anocutanea (white line of Hilton)", "sulit", "Hanya diperkirakan letaknya; peralihan mukosa ke kutis.", "66", "30:00"],
    ["M. sphincter ani internus dan externus", "sulit", "Internus mengikuti dinding rectum, externus di luarnya.", "66", "35:00"]
  ]},
  { id: "dinding", t: "Dinding abdomen", sl: "slide 7–24", items: [
    ["Planum transpyloricum", "terlihat", "Garis imajiner di tengah antara tepi atas manubrium sterni dan symphysis pubis. Pembagian regio versi 2 paling banyak dipakai.", "7", "40:00"],
    ["M. obliquus externus (MOEA)", "terlihat", "Serabut berbentuk \"V\", arah inferomedial. Lapisan otot paling luar.", "13", "45:00"],
    ["M. obliquus internus (MOIA)", "terlihat", "Serabut berbentuk \"A\", arah superomedial.", "14", "45:00"],
    ["Fascia Camper", "terlihat", "Lapisan lemak kuning di bawah umbilicus.", "9", "45:00"],
    ["Fascia Scarpa", "sulit", "Sulit dibedakan dari Camper.", "9", "45:00"],
    ["Fascia investiens superficialis dan intermedia", "terlihat", "Lapisan putih di luar MOEA, dan di antara MOEA dan MOIA.", "9–10", "45:00"],
    ["Fascia investiens profunda", "tidak", "Pada preparat ini MOIA dan m. transversus menyatu.", "9–10", "45:00"],
    ["M. transversus abdominis", "terlihat", "Serabut horizontal.", "15", "45:00"],
    ["Fascia transversalis, lemak ekstraperitoneal, peritoneum parietale", "terlihat", "Urutan dari luar ke dalam setelah m. transversus.", "9", "45:00–50:00"],
    ["M. rectus abdominis", "terlihat", "Otot vertikal di tengah; lateral dan anterolateral otot pipih tidak berlanjut di sini.", "16", "45:00"],
    ["Vagina m. recti lamina anterior dan posterior", "terlihat", "Lamina posterior hanya ada di 2/3 superior.", "19–20", "45:00–50:00"],
    ["Linea arcuata", "terlihat", "Batas bawah lamina posterior. Di bawahnya dinding lebih lemah, terkait hernia.", "17–20", "45:00"],
    ["Intersectiones tendineae", "terlihat", "Garis putih pemisah \"six pack\".", "18", "50:00"],
    ["Linea alba dan linea semilunaris", "belum", "Alba di garis tengah; semilunaris di tepi lateral m. rectus.", "17", "50:00"],
    ["Annulus umbilicalis", "terlihat", "Disebut kelihatan di preparat.", "18", "50:00"],
    ["Fossa inguinalis dan a. epigastrica inferior", "belum", "Medial dari a. epigastrica inferior: hernia direk. Lateral: indirek.", "21–22", "55:00–01:00"],
    ["M. psoas major dan minor", "sulit", "Minor dikenali dari tendonnya yang panjang; tidak semua preparat bisa dibedakan.", "24", "01:00"]
  ]},
  { id: "saraf", t: "Saraf, regio inguinalis, organ lain", sl: "slide 26–33", items: [
    ["N. subcostalis, iliohypogastricus, ilioinguinalis", "sulit", "Urutan dari atas ke bawah. Subcostalis tepat di bawah costa 12 (bisa diraba). Ilioinguinalis menuju canalis inguinalis.", "26", "01:05–01:10"],
    ["Funiculus spermaticus dan lig. inguinale", "terlihat", "Funiculus berada di atas ligamentum.", "27", "01:10"],
    ["N. ilioinguinalis vs r. genitalis n. genitofemoralis", "belum", "Ilioinguinalis di luar funiculus; r. genitalis di dalamnya (pada wanita bersama lig. rotundum). Keduanya di dalam canalis.", "27", "01:05–01:10"],
    ["Annulus inguinalis dan crus medial/lateral", "sulit", "Profundus sekitar pertengahan lig. inguinale; superficialis diperkirakan dari dua crusnya.", "27–28", "01:10"],
    ["Isi spatium subinguinale", "belum", "Terdengar n. cutaneus femoris lateralis dan n. femoralis.", "29", "01:20–01:25"],
    ["Duodenum", "belum", "Terdengar retroperitoneal kecuali bagian awalnya.", "32–33", "01:25"]
  ]}
];

const REMARKS = [
  { t: "Penting atau sering ditanya", items: [
    ["Yang paling signifikan secara klinis", "Linea pectinata: batas persarafan viseral (nyeri difus) dan somatik (nyeri terlokalisasi). Relevan untuk hemorrhoid interna dan eksterna.", "66", "30:00–35:00"],
    ["Yang paling ditanya", "Vagina m. recti lamina anterior dan posterior.", "19–20", "45:00"],
    ["Yang paling penting ini", "Muncul di pembahasan sekitar duodenum, tetapi objeknya tidak terdengar. Cek audionya.", "?", "01:25"],
    ["Yang jelas itu", "Plicae circulares untuk membedakan jejunum dan ileum.", "51", "05:00"]
  ]},
  { t: "Diminta dihafal atau dipahami", soft: true, items: [
    ["Ini hafalannya", "Muncul tepat sebelum bahasan bidang pembagi regio abdomen (versi 2).", "7", "40:00"],
    ["Hafalin aja", "Diucapkan di antara psoas dan inervasi; kemungkinan tabel vaskularisasi.", "25 (dugaan)", "01:00"],
    ["Cukup kalian pahami", "Penamaan recessus di sekitar ileocaecal.", "40–41", "20:00"],
    ["Intinya konsepnya gitu", "Posisi tiap taenia terhadap perlekatannya.", "59–61", "15:00"]
  ]}
];

const CLINIC = [
  ["Peyer's patches di ileum", "Ileum dekat dengan caecum yang kaya bakteri, jadi butuh pertahanan imun bila ada refluks.", "51", "05:00"],
  ["Appendicitis", "Lumen appendix sempit dan buntu. Feses yang tersangkut memicu pertumbuhan bakteri lalu peradangan.", "54", "05:00–10:00"],
  ["Nyeri viseral vs somatik", "Di atas linea pectinata nyerinya difus; di bawahnya terlokalisasi. Karena itu operasi hemorrhoid eksterna terasa sakit.", "31, 66", "30:00–35:00"],
  ["Hernia di bawah linea arcuata", "Lamina posterior vagina m. recti tidak ada di 1/3 inferior, sehingga lebih rentan saat tekanan abdomen naik.", "17, 20", "45:00"],
  ["Hernia inguinalis", "Direk (medial) muncul di medial a. epigastrica inferior, lewat trigonum Hesselbach. Indirek (lateral) di lateralnya.", "21–22", "01:00"]
];

const CHECKS = [
  ["Level flexura coli", "Dextra sekitar \"C2\", sinistra \"C1\".", "Slide 57: L2 dan L1.", "Pakai L2/L1; kemungkinan salah ucap atau salah transkrip.", "15:00"],
  ["Asal n. iliohypogastricus", "T12 dan L1.", "Slide 26: L1.", "Tanyakan kunci mana yang dipakai.", "01:05"],
  ["Saraf di atas linea pectinata", "\"N. rektalis superior\".", "Tidak disebut di slide 66. Dari pengetahuan umum (belum dicek ke buku), area ini dipersarafi saraf otonom viseral.", "Cek ke dosen atau atlas.", "30:00"],
  ["Istilah Latin arcade", "\"Arcus arterialis\".", "Gambar slide 51: \"arcus arteriosi\".", "Ikuti ejaan atlas atau slide.", "05:00"],
  ["Batas trigonum Hesselbach", "Pembicara lupa batas bawahnya.", "Slide 21–22 tidak merinci. Pengetahuan umum: inferior lig. inguinale, medial tepi lateral m. rectus, lateral a. epigastrica inferior.", "Cek ke atlas.", "55:00–01:00"],
  ["Judul PPT", "Nama file menyebut \"Upper GIT\".", "Slide 1 menyebut \"Lower Gastrointestinal Tract\".", "Pastikan ini file sesi yang benar.", "—"]
];

const SKIPPED = [
  ["Origo, insertio, fungsi otot dinding abdomen", "13–16"],
  ["Plica vesicalis transversa", "23"],
  ["Rincian vaskularisasi per regio", "25"],
  ["Klasifikasi organ intra/retroperitoneal lengkap", "32–33"],
  ["Ligamen penyusun omentum", "35–36"],
  ["Recessus supracolica dan bare area hepar", "38"],
  ["Lig. Treitz dan flexura duodenojejunalis", "47"],
  ["Variasi posisi appendix dan intususepsi", "54, 56"],
  ["Pembagian 1/3 rectum, plica transversae, flexura lateralis", "63–64"]
];

return {
  id: "2",
  tab: "Sesi 2",
  tabSub: "Dinding abdomen & GIT bawah",
  kicker: "Blok I.3 · Praktikum Anatomi · Sesi 2",
  title: "Dinding Abdomen & Saluran Cerna Bawah",
  lede: "Hasil mencocokkan rekaman praktikum dengan PPT Ajar Atrium. Isinya: apa yang terlihat di preparat, apa yang kemungkinan keluar saat tentamen, dan apa saja yang ditekankan asisten.",
  storageKey: "tentamen-i3s2-done",
  ledes: {
    sinyal: "Sinyal paling jelas: limfatik sesi ini kemungkinan tidak keluar, dan anomali paling banyak satu nomor.",
    remarks: "Penekanan terkuat ada pada linea pectinata, vagina m. recti, dan bagian yang diminta dihafal. Kutipan diambil dari transkrip, jadi cocokkan dengan audio bila perlu.",
    cek: "Ada yang berbeda antara rekaman dan PPT. Tanyakan ke asisten atau cek atlas sebelum menghafal."
  },
  skippedNote: 'Rekaman paling rusak di sekitar <span class="mono">00:00</span>, <span class="mono">55:00</span>, dan <span class="mono">01:15–01:40</span>. Kalau punya audionya, putar ulang bagian itu, terutama "yang paling penting ini" di blok <span class="mono">01:25</span>.',
  pptName: "I.3 Sesi 2 Abdominal Wall and GIT",
  SIGNALS, GROUPS, REMARKS, CLINIC, CHECKS, SKIPPED
};
})());
