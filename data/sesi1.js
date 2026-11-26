/* Sesi 1 — Saluran cerna atas (cavum oris sampai duodenum).
   Dirangkum dari rekaman praktikum + PPT Ajar Atrium "I.3 Sesi 1 Upper GIT". */
(window.SESSIONS = window.SESSIONS || []).push((() => {

const SIGNALS = [
  { t: "Fokus ke organ baru", d: "Struktur tulang (palatum, mandibula) masih bisa keluar, tetapi kemungkinan besar soal fokus ke organ-organ yang baru. Asisten bilang \"catat\".", s: "kuat", sl: "3–7", w: "00:00", top: true },
  { t: "Bagian luar mulut", d: "Struktur eksternal (philtrum, vermilion border, commissura, angulus oris) jarang keluar. Asisten bilang \"catat\".", s: "kuat", sl: "8–9", w: "05:00" },
  { t: "Fungsi otot palatum molle", d: "\"Buat fungsinya semua harusnya keluar.\" Hafalkan tabel fungsi di slide 21.", s: "kuat", sl: "21", w: "20:00", top: true },
  { t: "Inervasi cavum oris", d: "Kurang lebih tidak keluar. Cukup tahu konsepnya: atap (palatum, gigi atas) oleh CN V2, lantai (gigi bawah) oleh CN V3. Cabang-cabangnya tidak perlu.", s: "kira", sl: "22", w: "25:00" },
  { t: "Isthmus faucium", d: "Kalau ditanya, jawabannya \"batas\", bukan lubang. Asisten bilang \"catat\".", s: "jelas", sl: "39", w: "45:00", top: true },
  { t: "Cekungan di laryngopharynx", d: "Kalau ditanya cekungan di daerah laring, jawabannya pasti recessus piriformis. Di laryngopharynx cukup ingat dua: recessus piriformis dan plica n. laryngei superioris.", s: "jelas", sl: "40", w: "45:00", top: true },
  { t: "Constrictio esofagus", d: "Yang penting tahu tempat tiap penyempitan (m. cricopharyngeus, arcus aorta + bronchus principalis sinistra di VT3, hiatus esophagealis).", s: "kuat", sl: "44", w: "50:00", top: true },
  { t: "Vaskularisasi esofagus", d: "\"Insyaallah enggak keluar.\" Ada nada tidak yakin, jadi tetap baca sekilas.", s: "kira", sl: "45–46", w: "55:00" },
  { t: "Limfatik esofagus", d: "Tidak keluar karena tidak dibahas.", s: "kuat", sl: "47", w: "55:00" },
  { t: "Papilla duodeni: muara vs saluran", d: "Ditanya muara atau tonjolan → papilla duodeni major/minor. Ditanya saluran → ductus pancreaticus. Asisten bilang \"catat\".", s: "jelas", sl: "57–58", w: "01:15", top: true },
  { t: "M. transversus linguae", d: "Menurut asisten tidak akan keluar karena seratnya bercampur dan tidak bisa dikenali. Kalau ragu, \"pegang di verticalis\".", s: "kira", sl: "29", w: "37:30" },
  { t: "Papilla vallata", d: "Papilla yang besar-besar; \"kalau keluar pasti benar\" (mudah dikenali).", s: "kuat", sl: "26", w: "30:00" },
  { t: "Menggambar lidah", d: "Ada yang bertanya apakah akan disuruh menggambar; jawabannya tidak perlu.", s: "jelas", sl: "24", w: "25:00" },
  { t: "Struktur histologi gigi", d: "Enamel, dentin, pulpa, cementum masuk histologi. Preparat hanya menampakkan corona.", s: "kira", sl: "31", w: "40:00" }
];

const GROUPS = [
  { id: "tulang", t: "Kerangka cavum oris", sl: "slide 3–7", items: [
    ["Processus palatinus maxillae dan lamina horizontalis ossis palatini", "terlihat", "Keduanya menyusun palatum durum.", "3, 20", "00:00"],
    ["Foramen palatinum majus dan foramina palatina minora", "terlihat", "Majus kanan-kiri; minora lebih kecil dan di belakangnya.", "3", "00:00"],
    ["Processus pyramidalis", "terlihat", "Dicari di tengkorak lain; tidak ada di tengkorak pertama.", "3", "00:00"],
    ["Canalis dan foramen incisivum", "terlihat", "Salurannya canalis, lubangnya foramen. Dilalui n. nasopalatinus dan anastomosis a. palatina major–a. sphenopalatina.", "3", "00:00"],
    ["Sutura palatina mediana dan transversa", "sulit", "Mediana membagi dua palatum; transversa di antara maxilla dan os palatinum. Kurang jelas di tulang tiruan.", "4", "00:00"],
    ["Lamina lateralis/medialis proc. pterygoidei dan fossa pterygoidea", "terlihat", "Fossa adalah cekungan di antara kedua lamina.", "4", "00:00"],
    ["Choanae", "terlihat", "Pembukaan posterior cavum nasi.", "4", "00:00"],
    ["Mandibula", "belum", "Dianggap review dari blok sebelumnya; dipersilakan belajar sendiri.", "5–7", "00:00"]
  ]},
  { id: "wajah", t: "Bibir dan otot wajah", sl: "slide 8–14", items: [
    ["Philtrum, sulcus nasolabialis", "terlihat", "Philtrum: cekungan di tengah bibir atas. Sulcus nasolabialis: alur dari hidung ke bibir.", "8", "00:00"],
    ["Vermilion border", "terlihat", "Batas kulit dengan zona transisional (area lipstik).", "8", "00:00–05:00"],
    ["Commissura labiorum vs angulus oris", "terlihat", "Commissura = persambungan bibir atas dan bawah. Angulus = sudutnya.", "8–9", "05:00"],
    ["Sulcus mentolabialis, tuberculum labii superioris, rima oris", "terlihat", "Sulcus di antara bibir bawah dan dagu; tuberculum tonjolan kecil di bibir atas; rima oris = celah mulut.", "8–9", "05:00"],
    ["M. orbicularis oris", "terlihat", "Melingkari bibir.", "11–12", "07:30"],
    ["M. depressor labii inferioris", "terlihat", "Serat dari medial ke lateral bawah.", "11–12", "07:30"],
    ["M. depressor anguli oris", "terlihat", "Serat dari lateral ke medial.", "11–12", "07:30"],
    ["M. levator labii superioris dan levator anguli oris", "sulit", "Kurang kelihatan; tergantung kadaver.", "11–12", "07:30"],
    ["M. masseter", "terlihat", "Besar di sisi wajah, paling superfisial.", "13", "10:00, 01:27"],
    ["M. buccinator", "terlihat", "Lebih dalam dari masseter; baru tampak setelah masseter diangkat. Serat horizontal.", "12", "10:00, 01:27"],
    ["M. temporalis", "terlihat", "Ditunjuk saat keliling kadaver.", "13", "01:27"],
    ["M. pterygoideus medialis", "sulit", "Serat vertikal, dari mandibula ke atas, letaknya lebih dalam.", "14", "10:00, 01:27–01:30"],
    ["M. pterygoideus lateralis", "sulit", "Serat lebih horizontal. Satu-satunya otot mastikasi yang membuka mulut.", "14", "10:00, 01:27"]
  ]},
  { id: "oris", t: "Cavum oris dan palatum", sl: "slide 16–22", items: [
    ["Vestibulum oris vs cavitas oris propria", "terlihat", "Dipisahkan arcus dentalis: vestibulum di depan gigi, cavitas oris propria di belakangnya.", "16", "10:00"],
    ["Frenulum labii superioris dan inferioris", "terlihat", "Lipatan di garis tengah yang melekatkan bibir ke gingiva. Coba lihat di bibirmu sendiri.", "17", "15:00"],
    ["Batas cavitas oris propria", "belum", "Anterolateral arcus dentalis, atap palatum durum/molle, lantai diaphragma oris, posterior isthmus faucium.", "18", "15:00"],
    ["Diaphragma oris", "sulit", "Otot lantai mulut; di kadaver pertama tidak tampak. Cek daftar ototnya di bagian Perlu dicek.", "19", "15:00"],
    ["M. digastricus venter anterior", "terlihat", "Ciri khas: tendon putih panjang.", "19", "01:25–01:30"],
    ["Plicae palatinae transversae", "terlihat", "Lipatan melintang di palatum durum.", "20", "15:00–20:00"],
    ["Papilla incisiva dan raphe palati", "sulit", "Di garis tengah, jadi pada preparat yang dibelah hanya tampak setengah.", "20", "20:00"],
    ["M. palatoglossus dan palatopharyngeus", "terlihat", "Berada di arcus yang namanya sama. Ditunjuk di arcus → jawab otot sesuai arcusnya.", "21", "20:00"],
    ["M. tensor dan levator veli palatini", "sulit", "Hanya tampak sebagai titik. Tensor di atas, levator di bawah (torus levatorius).", "21", "20:00"],
    ["M. uvulae", "terlihat", "Mudah dikenali di tengah palatum molle.", "21", "20:00"]
  ]},
  { id: "lingua", t: "Lingua dan dentes", sl: "slide 24–34", items: [
    ["Apex, corpus, radix linguae", "terlihat", "Puncak, badan, akar lidah.", "24", "25:00"],
    ["Sulcus terminalis", "terlihat", "Batas 2/3 anterior dan 1/3 posterior, di depan papilla vallata.", "24", "25:00"],
    ["Foramen caecum", "terlihat", "Lubang di tengah; sisa jalur migrasi ductus thyroglossus.", "24", "25:00"],
    ["Tonsilla lingualis", "terlihat", "Jaringan limfoid di bagian posterior lidah.", "24", "25:00"],
    ["Plica dan caruncula sublingualis", "sulit", "Muara kelenjar ludah di bawah lidah; plica biasanya tidak tampak.", "25", "30:00"],
    ["Papilla vallata", "terlihat", "Besar-besar, berjajar di depan sulcus terminalis.", "26", "30:00"],
    ["Papilla foliata", "sulit", "Hanya di posterolateral lidah.", "26", "30:00"],
    ["Otot ekstrinsik lidah", "sulit", "Menggerakkan lidah. Salah satu otot -glossus \"enggak kelihatan sama sekali\".", "27–28", "35:00"],
    ["M. longitudinalis superior dan verticalis linguae", "terlihat", "Longitudinal di atas, vertikal di tengah.", "29", "37:30"],
    ["M. longitudinalis inferior", "sulit", "Di bawah, lebih dalam.", "29", "37:30–40:00"],
    ["M. transversus linguae", "tidak", "Bercampur dengan verticalis; tidak bisa dikenali.", "29", "37:30"],
    ["Corona, cervix, radix dentis", "sulit", "Preparat hanya menampakkan corona.", "31", "40:00"],
    ["Jenis gigi", "terlihat", "Per rahang: incisivus 4, caninus 2, premolar 4, molar 6.", "32–34", "40:00"]
  ]},
  { id: "pharynx", t: "Pharynx dan esophagus", sl: "slide 36–47", items: [
    ["Pembagian pharynx", "belum", "Nasopharynx basis cranii–VC2 (CN V2), oropharynx VC2–VC3 (CN IX), laryngopharynx VC3–VC6 (CN X).", "36", "40:00"],
    ["Tonsilla pharyngea dan torus levatorius", "terlihat", "Di sudut posterosuperior nasopharynx.", "37–38", "20:00"],
    ["Arcus palatoglossus dan palatopharyngeus", "terlihat", "Tonsilla palatina terletak di antara keduanya.", "39", "45:00"],
    ["Isthmus faucium", "terlihat", "Batas antara cavitas oris propria dan oropharynx: palatum molle, arcus palatoglossus, dorsum linguae.", "39", "45:00"],
    ["Recessus piriformis", "terlihat", "Cekungan di laryngopharynx.", "40", "45:00"],
    ["Plica n. laryngei superioris", "sulit", "Lipatan di recessus piriformis.", "40", "45:00"],
    ["Esophagus pars cervicalis, thoracica, abdominalis", "terlihat", "Cervicalis VC6–VT1, thoracica VT1–VT10, abdominalis VT10–VT11 (sangat pendek, di bawah diafragma).", "43", "45:00–50:00"],
    ["Constrictio pharyngoesophagea", "belum", "Akibat m. cricopharyngeus, peralihan laryngopharynx ke esophagus.", "44", "50:00"],
    ["Constrictio bronchoaortica", "belum", "Persilangan arcus aorta dengan bronchus principalis sinistra (VT3).", "44", "50:00"],
    ["Constrictio diaphragmatica", "belum", "Di hiatus esophagealis (VT10).", "44", "50:00"]
  ]},
  { id: "gaster", t: "Gaster dan duodenum", sl: "slide 50–59", items: [
    ["Cardia, fundus, corpus, pars pylorica", "terlihat", "Fundus lebih tinggi dari tempat masuk esophagus.", "50", "55:00–01:00"],
    ["Curvatura major dan minor", "terlihat", "Lengkungan besar dan kecil.", "50", "01:00"],
    ["Incisura angularis dan incisura cardiaca", "sulit", "Sudut-sudut tajam pada gaster.", "50", "01:00"],
    ["M. sphincter pylori vs ostium pyloricum", "sulit", "Ditanya otot → m. sphincter pylori. Ditanya lubang → ostium pyloricum.", "50", "01:00"],
    ["Rugae gastricae", "terlihat", "Lipatan mukosa yang memungkinkan lambung membesar saat terisi.", "51", "01:00"],
    ["Plica longitudinalis gastricae", "sulit", "Di sepanjang curvatura minor; jalur cepat air minum.", "51", "01:05"],
    ["Pars duodeni", "terlihat", "Superior, descendens, horizontalis, ascendens.", "56", "01:05–01:10"],
    ["Flexura duodeni superior, inferior, duodenojejunalis", "sulit", "Belokan di antara pars duodeni.", "57", "01:10"],
    ["Plicae circulares duodeni", "terlihat", "Memperluas permukaan penyerapan.", "57", "01:10"],
    ["Plica longitudinalis duodeni", "sulit", "Di pars descendens, proksimal dari papilla duodeni major.", "57", "01:10"],
    ["Papilla duodeni major dan minor", "sulit", "Major: muara ampulla hepatopancreatica. Minor: muara ductus pancreaticus accessorius. Keduanya kecil.", "57–58", "01:15–01:20"],
    ["Lig. Treitz", "tidak", "Batas GIT atas dan bawah, karena itu jadi penutup Sesi 1. Tidak akan terlihat di preparat.", "59", "01:10"]
  ]}
];

const REMARKS = [
  { t: "Penting atau perlu dicatat", items: [
    ["Ini tolong dicatat ya", "Pembagian vestibulum oris dan cavitas oris propria oleh arcus dentalis.", "16", "10:00"],
    ["Isthmus faucium itu batas, catat", "Jangan jawab sebagai lubang atau lingkaran.", "39", "45:00"],
    ["Pasti nanti bakal recessus piriformis, catat", "Kalau ditanya cekungan di laring.", "40", "45:00"],
    ["Kalau misalkan saluran, baru ductus pancreaticus. Catat", "Muara atau tonjolan = papilla; saluran = ductus.", "57–58", "01:15"],
    ["Buccinator baru ada kalau habis ada masseter, catat", "Buccinator lebih dalam dari masseter.", "12–13", "10:00"],
    ["Ini patokan penting", "Lig. Treitz sebagai batas GIT atas dan bawah.", "59", "01:10"]
  ]},
  { t: "Kata kunci untuk membedakan", soft: true, items: [
    ["Lihat arah seratnya", "Depressor labii inferioris medial→lateral bawah; depressor anguli oris lateral→medial.", "11", "07:30"],
    ["Yang vertikal itu yang medial", "M. pterygoideus medialis vertikal dan lebih dalam.", "14", "01:30"],
    ["Ciri-cirinya tendon", "Digastricus punya tendon putih yang panjang.", "19", "01:30"],
    ["Pegang di verticalis", "Untuk otot intrinsik lidah, karena transversus tidak bisa dikenali.", "29", "37:30"]
  ]}
];

const CLINIC = [
  ["Benda asing di esofagus", "Makanan yang tersangkut cenderung berhenti di salah satu dari tiga constrictio, jadi lokasinya bisa ditebak di X-ray atau CT.", "44", "50:00"],
  ["Hiatal hernia", "Lemahnya hiatus diafragma membuat gaster naik ke mediastinum; bisa menyebabkan makanan tersangkut, iskemia, atau infeksi. Asisten menyarankan dibaca.", "48", "55:00"],
  ["Bedah bariatrik", "Lambung dipotong menjadi kecil sehingga cepat kenyang.", "54", "01:05"]
];

const CHECKS = [
  ["Otot diaphragma oris", "Disebut geniohyoideus lalu \"styloglossus\".", "Slide 19: m. digastricus venter anterior, m. mylohyoideus, m. geniohyoideus.", "Pakai versi PPT; styloglossus adalah otot ekstrinsik lidah.", "15:00"],
  ["Ductus atau ampulla hepatopancreatica", "Asisten sendiri tidak yakin dan bilang akan mencarinya.", "Slide 58: ampulla hepatopancreatica (gabungan ductus choledochus dan ductus pancreaticus) dengan sphincter of Oddi.", "Pakai \"ampulla hepatopancreatica\".", "01:15–01:20"],
  ["Nama constrictio pertama", "Disebut penyempitan karena m. cricopharyngeus.", "Slide 44: constrictio pharyngoesophagea.", "Hafalkan nama di PPT.", "50:00"],
  ["Inervasi oropharynx", "Sempat disebut CN XII, lalu dikoreksi.", "Slide 36: CN IX.", "Pakai CN IX.", "40:00"],
  ["Level pars abdominalis esophagus", "Terdengar \"T12, 10 sampai 11\".", "Slide 43: VT10–VT11.", "Pakai VT10–VT11.", "50:00"],
  ["Pterygoideus lateral vs medial", "Di kadaver sempat tertukar beberapa kali.", "Kesimpulan akhir: medialis vertikal dan lebih dalam.", "Cek ulang di atlas.", "01:27–01:30"]
];

const SKIPPED = [
  ["Detail os mandibulae", "5–7"],
  ["Inervasi otot diaphragma oris", "19"],
  ["Otot ekstrinsik lidah satu per satu (fungsi, inervasi)", "27–28"],
  ["Ostium pharyngeum tubae, torus tubarius, plica salpingo-", "37–38"],
  ["Waldeyer's ring", "41"],
  ["Drainase vena dan plexus esophageus (hanya sekilas)", "46–47"],
  ["Lapisan tunica muscularis gaster", "51"],
  ["Omentum majus dan minus, bursa omentalis", "52–53"],
  ["Sphincter of Oddi", "58"]
];

return {
  id: "1",
  tab: "Sesi 1",
  tabSub: "GIT atas",
  kicker: "Blok I.3 · Praktikum Anatomi · Sesi 1",
  title: "Saluran Cerna Atas",
  lede: "Dari cavum oris sampai duodenum. Hasil mencocokkan rekaman praktikum dengan PPT Ajar Atrium: apa yang terlihat di preparat, apa yang kemungkinan keluar saat tentamen, dan apa saja yang ditekankan asisten.",
  storageKey: "tentamen-i3s1-done",
  ledes: {
    sinyal: "Sinyal paling jelas: fokus soal ke organ baru, fungsi otot palatum molle kemungkinan keluar, dan limfatik esofagus tidak keluar.",
    remarks: "Asisten paling sering bilang \"catat\" untuk pembagian ruang mulut, isthmus faucium, recessus piriformis, dan papilla duodeni. Kutipan diambil dari transkrip, jadi cocokkan dengan audio bila perlu.",
    cek: "Beberapa ucapan di rekaman berbeda dengan PPT atau tidak pasti. Untuk tentamen, utamakan istilah di PPT."
  },
  skippedNote: 'Rekaman paling rusak di sekitar <span class="mono">25:00–35:00</span> (lidah), <span class="mono">01:00–01:10</span> (gaster dan duodenum), dan <span class="mono">01:27–01:30</span> (keliling kadaver). Kalau punya audionya, putar ulang bagian itu.',
  pptName: "I.3 Sesi 1 Upper GIT",
  SIGNALS, GROUPS, REMARKS, CLINIC, CHECKS, SKIPPED
};
})());
