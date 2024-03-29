function getTeacherName(teachers, teacherId) {
  const found = teachers.find((teacher) => teacher.id === teacherId);
  if (!found) {
    console.log(teacherId);
  }
  return `${found.firstName} ${found.lastName}`;
}

function getCourseName(courses, courseId) {
  const found = courses.find((course) => course.id === courseId);
  if (!found) {
    console.log(courseId);
  }
  return found.name;
}

const courses = [
  {
    id: 0,
    name: 'Matematik II',
    code: 'ING107',
    department: 0,
    year: 1,
    sessions: [
      {
        length: 2,
        teacherId: 0,
      },
      {
        length: 2,
        teacherId: 0,
      },
      {
        length: 2,
        teacherId: 0,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 1,
    name: 'Fizik II',
    code: 'ING117',
    department: 0,
    year: 1,
    sessions: [
      {
        length: 3,
        teacherId: 2,
      },
      {
        suffix: 'Lab A',
        isLab: true,
        length: 2,
        teacherId: 18,
      },
      {
        suffix: 'Lab B',
        isLab: true,
        length: 2,
        teacherId: 18,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 2,
    name: 'Algoritma ve İleri Bilgisayar Programlama',
    code: 'ING114',
    department: 0,
    year: 1,
    sessions: [
      {
        length: 2,
        teacherId: 3,
      },
      {
        length: 3,
        teacherId: 3,
      },
    ],
    cannotCollideWith: [7, 17, 25],
  },
  {
    id: 3,
    name: 'Programlama Dillerinin Prensipleri',
    code: 'ING115',
    department: 0,
    year: 1,
    sessions: [
      {
        length: 2,
        teacherId: 3,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 4,
    name: 'Kariyer Planlama',
    code: 'CNT120',
    department: 0,
    year: 1,
    sessions: [
      {
        length: 2,
        teacherId: 7,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 5,
    name: 'Bilgisayar Sistemlerine Giriş',
    code: 'INF116',
    department: 0,
    year: 1,
    sessions: [
      {
        length: 2,
        teacherId: 5,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 6,
    name: 'Teknik Resim',
    code: 'ING144',
    department: 0,
    year: 1,
    sessions: [
      {
        length: 2,
        teacherId: 6,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 7,
    name: 'Sayısal Elektronik',
    code: 'ING220',
    department: 0,
    year: 2,
    sessions: [
      {
        length: 2,
        teacherId: 8,
      },
      {
        suffix: 'Lab A',
        isLab: true,
        length: 2,
        teacherId: 8,
      },
      {
        suffix: 'Lab B',
        isLab: true,
        length: 2,
        teacherId: 8,
      },
    ],
    cannotCollideWith: [2, 17, 25],
  },
  {
    id: 8,
    name: 'Diferansiyel Denklemler',
    code: 'ING208',
    department: 0,
    year: 2,
    sessions: [
      {
        length: 3,
        teacherId: 1,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 9,
    name: 'Bilgisayar Mühendisliği İçin Olasılık ve İstatistiğe Giriş',
    code: 'ING211',
    department: 0,
    year: 2,
    sessions: [
      {
        length: 3,
        teacherId: 9,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 10,
    name: 'Nesneye Yönelik Programlama',
    code: 'INF243',
    department: 0,
    year: 2,
    sessions: [
      {
        length: 2,
        teacherId: 10,
      },
      {
        length: 2,
        teacherId: 10,
      },
      {
        suffix: 'Lab A',
        isLab: true,
        length: 2,
        teacherId: 10,
      },
      {
        suffix: 'Lab B',
        isLab: true,
        length: 2,
        teacherId: 10,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 11,
    name: 'Yüksek Matematik II',
    code: 'ING252',
    department: 0,
    year: 2,
    sessions: [
      {
        length: 3,
        teacherId: 1,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 12,
    name: 'Bilgi Teorisi',
    code: 'INF365',
    department: 0,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 4,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 13,
    name: 'Sayısal İşaret İşleme',
    code: 'INF345',
    department: 0,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 11,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 14,
    name: 'Mikroişlemciler',
    code: 'INF340',
    department: 0,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 11,
      },
      {
        suffix: 'Lab A',
        isLab: true,
        length: 2,
        teacherId: 11,
      },
      {
        suffix: 'Lab B',
        isLab: true,
        length: 2,
        teacherId: 11,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 15,
    name: 'Veritabanı Yönetimi ve Güvenliği',
    code: 'INF360',
    department: 0,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 13,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 16,
    name: 'Sayısal Analiz',
    code: 'INF325',
    department: 0,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 4,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 17,
    name: 'İşletim Sistemleri',
    code: 'INF333',
    department: 0,
    year: 3,
    sessions: [
      {
        length: 2,
        teacherId: 12,
      },
      {
        length: 2,
        teacherId: 12,
      },
    ],
    cannotCollideWith: [2, 7, 25],
  },
  {
    id: 18,
    name: 'Bilgisayar Ağları',
    code: 'INF334',
    department: 0,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 14,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 19,
    name: 'Otomat ve Diller Teorisi',
    code: 'INF323',
    department: 0,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 15,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 20,
    name: 'Yöneylem Araştırması',
    code: 'IND471',
    department: 0,
    year: 4,
    sessions: [
      {
        length: 2,
        teacherId: 7,
      },
      {
        length: 2,
        teacherId: 7,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 21,
    name: 'Mühendislik Ekonomisi',
    code: 'IND472',
    department: 0,
    year: 4,
    sessions: [
      {
        length: 2,
        teacherId: 7,
      },
      {
        length: 2,
        teacherId: 7,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 22,
    name: 'Sistem Mühendisliği',
    code: 'INF437',
    department: 0,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 10,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 23,
    name: 'Bilgi Çıkarımı ve Veri Madenciliğine Giriş',
    code: 'INF483',
    department: 0,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 9,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 24,
    name: 'Bilgisayar Mühendisliğinde Özel Konular',
    code: 'INF446',
    department: 0,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 3,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 25,
    name: 'Gömülü Sistem Tasarım Temelleri',
    code: 'INF482',
    department: 0,
    year: 4,
    sessions: [
      {
        length: 2,
        teacherId: 5,
      },
      {
        length: 2,
        teacherId: 5,
      },
    ],
    cannotCollideWith: [2, 7, 17],
  },
  {
    id: 26,
    name: 'Yazılım Mühendisliği ve Nesneye Yönelik Tasarım',
    code: 'INF481',
    department: 0,
    year: 4,
    sessions: [
      {
        length: 2,
        teacherId: 16,
      },
      {
        length: 2,
        teacherId: 16,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 27,
    name: 'Bitirme Projesi',
    code: 'INF494',
    department: 0,
    year: 4,
    sessions: [
      {
        isFixed: true,
        day: 4,
        hour: 9,
        length: 3,
        teacherId: 36,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 28,
    name: 'Şifrelemeye Giriş',
    code: 'INF441',
    department: 0,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 10,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 29,
    name: 'Girişimcilik/Sosyal Medya/Fotoğrafçılık',
    code: 'CNT417',
    department: 0,
    year: 4,
    hasMultiTeachers: true,
    teachers: [15, 13, 8],
    sessions: [
      {
        length: 2,
        teacherId: 38,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 30,
    code: 'ING107',
    name: 'Matematik II',
    department: 1,
    year: 1,
    sessions: [
      {
        length: 2,
        teacherId: 0,
      },
      {
        length: 2,
        teacherId: 0,
      },
      {
        length: 2,
        teacherId: 0,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 31,
    code: 'ING117',
    name: 'Fizik II',
    department: 1,
    year: 1,
    sessions: [
      {
        length: 2,
        teacherId: 18,
      },
      {
        suffix: 'Lab A',
        isLab: true,
        length: 2,
        teacherId: 18,
      },
      {
        suffix: 'Lab B',
        isLab: true,
        length: 2,
        teacherId: 18,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 32,
    code: 'ING134',
    name: 'Python ile Bilgisayar Programlama',
    department: 1,
    year: 1,
    sessions: [
      {
        length: 2,
        teacherId: 17,
      },
      {
        length: 2,
        teacherId: 17,
      },
    ],
    cannotCollideWith: [39, 49, 50],
  },
  {
    id: 33,
    code: 'ING145',
    name: 'Teknik Resim',
    department: 1,
    year: 1,
    sessions: [
      {
        length: 3,
        teacherId: 6,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 34,
    code: 'CNT120',
    name: 'Kariyer Planlama',
    department: 1,
    year: 1,
    sessions: [
      {
        length: 2,
        teacherId: 20,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 35,
    code: 'CNT110',
    name: 'Muhasebeye Giriş',
    department: 1,
    year: 1,
    sessions: [
      {
        length: 2,
        teacherId: 19,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 36,
    code: 'ING252',
    name: 'Yüksek Matematik II',
    department: 1,
    year: 2,
    sessions: [
      {
        length: 3,
        teacherId: 1,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 37,
    code: 'ING208',
    name: 'Diferansiyel Denklemler',
    department: 1,
    year: 2,
    sessions: [
      {
        length: 3,
        teacherId: 1,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 38,
    code: 'ING224',
    name: 'Bilişim Teknolojilerine Giriş',
    department: 1,
    year: 2,
    sessions: [
      {
        length: 3,
        teacherId: 23,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 39,
    code: 'ING242',
    name: 'İstatistik',
    department: 1,
    year: 2,
    sessions: [
      {
        length: 2,
        teacherId: 21,
      },
      {
        length: 2,
        teacherId: 21,
      },
    ],
    cannotCollideWith: [32, 49, 50],
  },
  {
    id: 40,
    code: 'ING225',
    name: 'Mühendisler için Proje, Risk ve Değişiklik Yönetimi',
    department: 1,
    year: 2,
    sessions: [
      {
        length: 3,
        teacherId: 22,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 41,
    code: 'IND232',
    name: 'Üretim Yöntemleri ve Malzeme Bilimi',
    department: 1,
    year: 2,
    sessions: [
      {
        length: 3,
        teacherId: 2,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 42,
    code: 'IND377',
    name: 'Oyun Teorisine Giriş',
    department: 1,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 26,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 43,
    code: 'IND345',
    name: 'Ergonomi',
    department: 1,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 30,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 44,
    code: 'IND362',
    name: 'Proje Yönetimine Giriş',
    department: 1,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 28,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 45,
    code: 'IND375',
    name: 'Uygulamalarla Matematiksel Modelleme',
    department: 1,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 29,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 46,
    code: 'IND304',
    name: 'Modelleme ve Simülasyon',
    department: 1,
    year: 3,
    sessions: [
      {
        length: 3,
        teacherId: 24,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 47,
    code: 'IND321',
    name: 'Mühendislik Ekonomisi',
    department: 1,
    year: 3,
    sessions: [
      {
        length: 2,
        teacherId: 27,
      },
      {
        length: 2,
        teacherId: 27,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 48,
    code: 'IND336',
    name: 'Üretim Planlama ve Kontrol',
    department: 1,
    year: 3,
    sessions: [
      {
        length: 2,
        teacherId: 21,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 49,
    code: 'IND372',
    name: 'Yöneylem Araştırması II',
    department: 1,
    year: 3,
    sessions: [
      {
        length: 2,
        teacherId: 25,
      },
      {
        length: 2,
        teacherId: 22,
      },
    ],
    cannotCollideWith: [32, 39, 50],
  },
  {
    id: 50,
    code: 'IND423',
    name: 'Finans Mühendisliği',
    department: 1,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 25,
      },
    ],
    cannotCollideWith: [32, 39, 49],
  },
  {
    id: 51,
    code: 'IND482',
    name: 'Endüstri Mühendisliğinde Güncel Konular ve Uygulamaları',
    department: 1,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 24,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 52,
    code: 'CNT476',
    name: 'İş Hukuku',
    department: 1,
    year: 4,
    sessions: [
      {
        length: 2,
        teacherId: 34,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 53,
    code: 'IND497',
    name: 'Bitirme Projesi',
    department: 1,
    year: 4,
    sessions: [
      {
        isFixed: true,
        day: 4,
        hour: 9,
        length: 3,
        teacherId: 37,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 54,
    code: 'IND404',
    name: 'Sistem Dinamiği',
    department: 1,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 22,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 55,
    code: 'IND422',
    name: 'Investment Analysis',
    department: 1,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 28,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 56,
    code: 'IND433',
    name: 'Enterprise Resources Planning',
    department: 1,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 31,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 57,
    code: 'IND439',
    name: 'Enerji Politikaları ve Planlaması',
    department: 1,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 35,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 58,
    code: 'IND456',
    name: 'Toplam Kalite Yönetimi',
    department: 1,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 32,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 59,
    code: 'IND463',
    name: 'Tesis Planlama',
    department: 1,
    year: 4,
    sessions: [
      {
        length: 3,
        teacherId: 32,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 60,
    code: 'CNT474',
    name: 'Risk Analizi ve Yönetimi',
    department: 1,
    year: 4,
    sessions: [
      {
        length: 2,
        teacherId: 27,
      },
    ],
    cannotCollideWith: [],
  },
  {
    id: 61,
    code: 'CNT475',
    name: 'Rekabet ve Pazarlama Yönetimi',
    department: 1,
    year: 4,
    sessions: [
      {
        length: 2,
        teacherId: 33,
      },
    ],
    cannotCollideWith: [],
  },
];

const teachers = [
  {
    id: 0,
    firstName: 'Marie',
    lastName: 'Peroueme',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 1,
    firstName: 'Damien',
    lastName: 'Berthet',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 2,
    firstName: 'Erden',
    lastName: 'Tuğcu',
    unavailable: [[], [9, 10, 11], [], [], []],
  },
  {
    id: 3,
    firstName: 'Uzay',
    lastName: 'Çetin',
    unavailable: [[], [], [15, 16], [], []],
  },
  {
    id: 4,
    firstName: 'Burak',
    lastName: 'Parlak',
    unavailable: [[], [], [], [], [16, 17]],
  },
  {
    id: 5,
    firstName: 'Teoman',
    lastName: 'Naskali',
    unavailable: [[12, 13], [], [], [], []],
  },
  {
    id: 6,
    firstName: 'Ufuk',
    lastName: 'Bahçeli',
    unavailable: [[16, 17], [], [], [], []],
  },
  {
    id: 7,
    firstName: 'Tamer',
    lastName: 'Özyiğit',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 8,
    firstName: 'Murat',
    lastName: 'Egi',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 9,
    firstName: 'Günce',
    lastName: 'Orman',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 10,
    firstName: 'Murat',
    lastName: 'Akın',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 11,
    firstName: 'Reis Burak',
    lastName: 'Arslan',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 12,
    firstName: 'Serhan',
    lastName: 'Daniş',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 13,
    firstName: 'Sultan',
    lastName: 'Turhan',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 14,
    firstName: 'Tankut',
    lastName: 'Acarman',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 15,
    firstName: 'Özgün',
    lastName: 'Pınarer',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 16,
    firstName: 'Gülfem',
    lastName: 'Alptekin',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 17,
    firstName: 'Orhan İlker',
    lastName: 'Başaran',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 18,
    firstName: 'Siegfried',
    lastName: 'Devoldere',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 19,
    firstName: 'Büke',
    lastName: 'Tolga',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 20,
    firstName: 'Nazlı',
    lastName: 'Göker Mutlu',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 21,
    firstName: 'Müjde',
    lastName: 'Genevois',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 22,
    firstName: 'Mehtap',
    lastName: 'Dursun',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 23,
    firstName: 'Orhan',
    lastName: 'Feyzioğlu',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 24,
    firstName: 'Gülçin',
    lastName: 'Büyüközkan',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 25,
    firstName: 'Ertuğrul',
    lastName: 'Karsak',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 26,
    firstName: 'Temel',
    lastName: 'Öncan',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 27,
    firstName: 'Tuncay',
    lastName: 'Gürbüz',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 28,
    firstName: 'Levent',
    lastName: 'Demircan',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 29,
    firstName: 'Ebru',
    lastName: 'Angün',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 30,
    firstName: 'İlke',
    lastName: 'Bereketli',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 31,
    firstName: 'Emre',
    lastName: 'Alptekin',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 32,
    firstName: 'Emre',
    lastName: 'Demircioğlu',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 33,
    firstName: 'Caner',
    lastName: 'Dinçer',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 34,
    firstName: 'Sedef',
    lastName: 'Koç',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 35,
    firstName: 'Devrim',
    lastName: 'İldiri',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 36,
    firstName: '',
    lastName: '',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 37,
    firstName: '',
    lastName: '',
    unavailable: [[], [], [], [], []],
  },
  {
    id: 38,
    firstName: '',
    lastName: '',
    unavailable: [[], [], [], [], []],
  },
];

// const mapped = courses.map((course) => ({
//   ...course,
//   sessions: course.sessions.map((session) => ({
//     ...session,
//     teacher: getTeacherName(teachers, session.teacherId),
//   })),
// }));
const mapped = courses
  .map((course) => ({
    ...course,
    cannotCollideWithSessions: course.cannotCollideWith.map((c) =>
      getCourseName(courses, c)
    ),
  }))
  .filter((c) => c.cannotCollideWith.length > 0);

console.log(JSON.stringify(mapped, null, 2));
