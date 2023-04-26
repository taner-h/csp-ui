const range = require('lodash/range');
// const fs = require('fs');

function exportLanguageSlots(config) {
  const days = [config.languageDay1, config.languageDay2];
  const hours = [config.languageHour, config.languageHour + 1];
  const languageSlots = [days, hours];

  fs.writeFileSync('./data/languageSlots.json', JSON.stringify(languageSlots));
}

function exportEvolutionConstants(config) {
  const evolutionConstants = {
    SIZE: config.SIZE,
    STAGNATION_LIMIT: config.STAGNATION_LIMIT,
    ELITE_SIZE: config.ELITE_SIZE,
    GENERATION_LIMIT: config.GENERATION_LIMIT,
    CROSSOVER_RATE: config.CROSSOVER_RATE,
    MUTATION_TYPE: config.MUTATION_TYPE,
    MUTATION_RATE_1: config.MUTATION_RATE_1,
    MUTATION_RATE_2: config.MUTATION_RATE_2,
    MUTATION_RATE_3: config.MUTATION_RATE_3,
    STAGNATION_THRESHOLD_1: config.STAGNATION_THRESHOLD_1,
    STAGNATION_THRESHOLD_2: config.STAGNATION_THRESHOLD_2,
    GENERATION_THRESHOLD_1: config.GENERATION_THRESHOLD_1,
    GENERATION_THRESHOLD_2: config.GENERATION_THRESHOLD_2,
  };

  fs.writeFileSync(
    './data/evolutionConstants.json',
    JSON.stringify(evolutionConstants)
  );
}

function exportConstraintWeights(constraints) {
  fs.writeFileSync(
    './data/constraintWeights.json',
    JSON.stringify(constraints)
  );
}

function exportTeachers(teachers) {
  const allTeachers = teachers.map((teacher, index) => ({
    id: index,
    firstName: teacher.firstName,
    lastName: teacher.lastName,
    unavailable: teacher.hasUnavailable
      ? getUnavailableOfTeacher(teacher.unavailable)
      : [[], [], [], [], []],
  }));

  return allTeachers;
}

function getUnavailableOfTeacher(unavailable) {
  const days = [[], [], [], [], []];

  unavailable.forEach((period) => {
    const slots = range(period.startSlot, period.endSlot);
    days[period.day] = slots;
  });

  return days;
}

function getTeacherId(teachers, teacher) {
  return teachers.find(
    (t) => t.firstName === teacher.firstName && t.lastName === teacher.lastName
  ).id;
}

// function exportCourses() {
//   const courses = [
//     {
//       name: 'Matematik II',
//       code: 'ING107',
//       department: 0,
//       year: 1,
//       hasNoTeacher: false,
//       hasCoursesToNotCollide: false,
//       cannotCollideWith: [],
//       hasMultipleTeachers: false,
//       hasLabs: true,
//       hasFixed: true,
//       sessions: [
//         {
//           suffix: 'Lab A',
//           isLab: true,
//           isFixed: false,
//           day: '',
//           hour: '',
//           length: 2,
//           teacher: {
//             firstName: 'Marie',
//             lastName: 'Peroueme',
//             hasUnavailable: false,
//             unavailable: [{ day: '', startSlot: '', endSlot: '' }],
//           },
//         },
//         {
//           suffix: 'Lab B',
//           isLab: true,
//           isFixed: false,
//           day: '',
//           hour: '',
//           length: 2,
//           teacher: {
//             firstName: 'Marie',
//             lastName: 'Peroueme',
//             hasUnavailable: false,
//             unavailable: [{ day: '', startSlot: '', endSlot: '' }],
//           },
//         },
//         {
//           suffix: null,
//           isLab: false,
//           isFixed: true,
//           day: 2,
//           hour: 9,
//           length: 3,
//           teacher: {
//             firstName: 'Damien',
//             lastName: 'Berthet',
//             hasUnavailable: false,
//             unavailable: [{ day: '', startSlot: '', endSlot: '' }],
//           },
//         },
//       ],
//     },
//     {
//       name: 'Fizik II',
//       code: 'ING117',
//       department: 0,
//       year: 1,
//       hasNoTeacher: false,
//       hasCoursesToNotCollide: false,
//       cannotCollideWith: [],
//       hasMultipleTeachers: false,
//       hasLabs: false,
//       hasFixed: false,
//       sessions: [
//         {
//           suffix: null,
//           isLab: false,
//           isFixed: false,
//           day: '',
//           hour: '',
//           length: 2,
//           teacher: {
//             firstName: 'Erden',
//             lastName: 'Tuğcu',
//             hasUnavailable: true,
//             unavailable: [{ day: 1, startSlot: 9, endSlot: 12 }],
//           },
//         },
//         {
//           suffix: null,
//           isLab: false,
//           isFixed: false,
//           day: '',
//           hour: '',
//           length: 3,
//           teacher: {
//             firstName: 'Erden',
//             lastName: 'Tuğcu',
//             hasUnavailable: true,
//             unavailable: [{ day: 1, startSlot: 9, endSlot: 12 }],
//           },
//         },
//       ],
//     },
//     {
//       name: 'Algoritma ve İleri Bilgisayar Programlama',
//       code: 'ING114',
//       department: 0,
//       year: 1,
//       hasNoTeacher: false,
//       hasCoursesToNotCollide: false,
//       cannotCollideWith: [],
//       hasMultipleTeachers: false,
//       hasLabs: false,
//       hasFixed: false,
//       sessions: [
//         {
//           suffix: null,
//           isLab: false,
//           isFixed: false,
//           day: '',
//           hour: '',
//           length: 3,
//           teacher: {
//             firstName: 'Uzay',
//             lastName: 'Çetin',
//             hasUnavailable: true,
//             unavailable: [{ day: 2, startSlot: 15, endSlot: 17 }],
//           },
//         },
//       ],
//     },
//     {
//       name: 'Programlama Dillerinin Prensipleri',
//       code: 'ING115',
//       department: 0,
//       year: 1,
//       hasNoTeacher: false,
//       hasCoursesToNotCollide: true,
//       cannotCollideWith: ['Matematik II', 'Fizik II'],
//       hasMultipleTeachers: false,
//       hasLabs: false,
//       hasFixed: false,
//       sessions: [
//         {
//           suffix: null,
//           isLab: false,
//           isFixed: false,
//           day: '',
//           hour: '',
//           length: 2,
//           teacher: {
//             firstName: 'Burak',
//             lastName: 'Parlak',
//             hasUnavailable: true,
//             unavailable: [{ day: 4, startSlot: 16, endSlot: 18 }],
//           },
//         },
//       ],
//     },
//     {
//       name: 'Kariyer Planlama',
//       code: 'CNT120',
//       department: 0,
//       year: 1,
//       hasNoTeacher: true,
//       hasCoursesToNotCollide: false,
//       cannotCollideWith: [],
//       hasMultipleTeachers: false,
//       hasLabs: false,
//       hasFixed: false,
//       sessions: [
//         {
//           suffix: null,
//           isLab: false,
//           isFixed: false,
//           day: '',
//           hour: '',
//           length: 3,
//           teacher: {
//             firstName: 'Damien',
//             lastName: 'Berthet',
//             hasUnavailable: false,
//             unavailable: [{ day: '', startSlot: '', endSlot: '' }],
//           },
//         },
//       ],
//     },
//   ];

//   const teachers = [
//     {
//       id: 0,
//       firstName: 'Marie',
//       lastName: 'Peroueme',
//       unavailable: [[], [], [], [], [9, 10]],
//     },
//     {
//       id: 1,
//       firstName: 'Damien',
//       lastName: 'Berthet',
//       unavailable: [[], [11, 12], [], [9], [16, 17]],
//     },
//     {
//       id: 2,
//       firstName: 'Erden',
//       lastName: 'Tuğcu',
//       unavailable: [[], [9, 10, 11], [15, 16, 17], [], []],
//     },
//     {
//       id: 3,
//       firstName: 'Uzay',
//       lastName: 'Çetin',
//       unavailable: [[], [], [], [], []],
//     },
//     {
//       id: 4,
//       firstName: 'Burak',
//       lastName: 'Parlak',
//       unavailable: [[], [], [], [], [16, 17]],
//     },
//   ];

//   const multiTeacherCourses = courses.filter(
//     (course) => course.hasMultipleTeachers
//   );

//   const teacherCount = allTeachers.length;

//   const teachers = allTeachers.push({
//     id: teacherCount,
//     firstName: '',
//     lastName: '',
//     unavailable: [[], [], [], [], []],
//   });

//   const noTeacherCourses = courses.filter((course) => course.hasNoTeacher);

//   const noTeacherCourseCount = noTeacherCourses.length;

//   let offset = 1;

//   noTeacherCourses.forEach((course) => {
//     teachers.push({
//       id: teacherCount + offset,
//       firstName: '',
//       lastName: '',
//       unavailable: [[], [], [], [], []],
//     });

//     offset += 1;
//   });

//   const multiTeacherCourse = {
//     name: multiTeacherCourses.map((c) => c.name).join('/'),
//     code: multiTeacherCourses.map((c) => c.code).join('/'),
//     department: 0,
//     year: 4,
//     hasNoTeacher: false,
//     hasCoursesToNotCollide: false,
//     cannotCollideWith: [],
//     hasMultipleTeachers: true,
//     teachers: multiTeacherCourses.map((c) =>
//       getTeacherId(c.sessions[0].teacher)
//     ),
//     hasLabs: false,
//     hasFixed: false,
//     sessions: [
//       {
//         suffix: null,
//         isLab: false,
//         isFixed: false,
//         day: '',
//         hour: '',
//         length: 2,
//         teacherId: teacherCount,
//       },
//     ],
//   };

//   const coursesWithTeachers = courses.filter(
//     (course) => !course.hasMultipleTeachers && !course.hasNoTeacher
//   );

//   const coursesWithTeachers1 = coursesWithTeachers.push(multiTeacherCourse);

//   const newNoTeacherCourses = noTeacherCourses.map((course, index) => ({
//     ...course,
//     sessions: course.sessions.map((session) => ({
//       ...session,
//       teacherId: teacherCount + index + 1,
//     })),
//   }));

//   const coursesWithTeachers2 = coursesWithTeachers1.push(
//     ...newNoTeacherCourses
//   );

//   const allCourses = coursesWithTeachers2.map((course, index) => ({
//     id: index,
//     ...course,
//   }));

//   const newAllCourses = allCourses.map((course, index) => ({
//     id: course.id,
//     code: course.code,
//     name: course.name,
//     department: course.department,
//     year: course.year,
//     cannotCollideWith: course.hasCoursesToNotCollide
//       ? course.cannotCollideWith.map((courseName) =>
//           getCoursesToNotCollide(courseName, allCourses)
//         )
//       : [],
//     hasMultipleTeachers: course.hasMultipleTeachers,
//     teachers: course.hasMultipleTeachers ? course.teachers : [],
//     sessions: course.sessions.map((session) => ({
//       isLab: course.isLab,
//       isFixed: course.isFixed,
//       suffix: course.isLab ? course.suffix : null,
//       day: course.isFixed ? course.day : null,
//       hour: course.isFixed ? course.hour : null,
//       length: course.length,
//       teacherId: getTeacherId(teachers, course.teacher),
//     })),
//   }));

//   return { teachers, courses: newAllCourses };
// }

function getCoursesToNotCollide(courseName, allCourses) {
  return allCourses.find((course) => course.name === courseName).id;
}

// exportCourses();

function exportCoursesAndTeachers(courses, teachersState) {
  const teachers = exportTeachers(teachersState);
  // const courses = [
  //   {
  //     name: 'Matematik II',
  //     code: 'ING107',
  //     department: 0,
  //     year: 1,
  //     hasNoTeacher: false,
  //     hasCoursesToNotCollide: false,
  //     cannotCollideWith: [],
  //     hasMultipleTeachers: false,
  //     hasLabs: true,
  //     hasFixed: true,
  //     sessions: [
  //       {
  //         suffix: 'Lab A',
  //         isLab: true,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 2,
  //         teacher: {
  //           firstName: 'Marie',
  //           lastName: 'Peroueme',
  //           hasUnavailable: false,
  //           unavailable: [{ day: '', startSlot: '', endSlot: '' }],
  //         },
  //       },
  //       {
  //         suffix: 'Lab B',
  //         isLab: true,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 2,
  //         teacher: {
  //           firstName: 'Marie',
  //           lastName: 'Peroueme',
  //           hasUnavailable: false,
  //           unavailable: [{ day: '', startSlot: '', endSlot: '' }],
  //         },
  //       },
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: true,
  //         day: 2,
  //         hour: 9,
  //         length: 3,
  //         teacher: {
  //           firstName: 'Damien',
  //           lastName: 'Berthet',
  //           hasUnavailable: false,
  //           unavailable: [{ day: '', startSlot: '', endSlot: '' }],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Fizik II',
  //     code: 'ING117',
  //     department: 0,
  //     year: 1,
  //     hasNoTeacher: false,
  //     hasCoursesToNotCollide: false,
  //     cannotCollideWith: [],
  //     hasMultipleTeachers: false,
  //     hasLabs: false,
  //     hasFixed: false,
  //     sessions: [
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 2,
  //         teacher: {
  //           firstName: 'Erden',
  //           lastName: 'Tuğcu',
  //           hasUnavailable: true,
  //           unavailable: [{ day: 1, startSlot: 9, endSlot: 12 }],
  //         },
  //       },
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 3,
  //         teacher: {
  //           firstName: 'Erden',
  //           lastName: 'Tuğcu',
  //           hasUnavailable: true,
  //           unavailable: [{ day: 1, startSlot: 9, endSlot: 12 }],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Algoritma ve İleri Bilgisayar Programlama',
  //     code: 'ING114',
  //     department: 0,
  //     year: 1,
  //     hasNoTeacher: false,
  //     hasCoursesToNotCollide: false,
  //     cannotCollideWith: [],
  //     hasMultipleTeachers: false,
  //     hasLabs: false,
  //     hasFixed: false,
  //     sessions: [
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 3,
  //         teacher: {
  //           firstName: 'Uzay',
  //           lastName: 'Çetin',
  //           hasUnavailable: true,
  //           unavailable: [{ day: 2, startSlot: 15, endSlot: 17 }],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Programlama Dillerinin Prensipleri',
  //     code: 'ING115',
  //     department: 0,
  //     year: 1,
  //     hasNoTeacher: false,
  //     hasCoursesToNotCollide: true,
  //     cannotCollideWith: ['Matematik II', 'Fizik II'],
  //     hasMultipleTeachers: false,
  //     hasLabs: false,
  //     hasFixed: false,
  //     sessions: [
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 2,
  //         teacher: {
  //           firstName: 'Burak',
  //           lastName: 'Parlak',
  //           hasUnavailable: true,
  //           unavailable: [{ day: 4, startSlot: 16, endSlot: 18 }],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Kariyer Planlama',
  //     code: 'CNT120',
  //     department: 0,
  //     year: 1,
  //     hasNoTeacher: true,
  //     hasCoursesToNotCollide: false,
  //     cannotCollideWith: [],
  //     hasMultipleTeachers: false,
  //     hasLabs: false,
  //     hasFixed: false,
  //     sessions: [
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 3,
  //         teacher: {
  //           firstName: 'Damien',
  //           lastName: 'Berthet',
  //           hasUnavailable: false,
  //           unavailable: [{ day: '', startSlot: '', endSlot: '' }],
  //         },
  //       },
  //     ],
  //   },
  // ];

  // const courses = [
  //   {
  //     name: 'Matematik II',
  //     code: 'ING107',
  //     department: 0,
  //     year: 1,
  //     hasNoTeacher: false,
  //     hasCoursesToNotCollide: false,
  //     cannotCollideWith: [],
  //     hasMultipleTeachers: false,
  //     hasLabs: true,
  //     hasFixed: true,
  //     sessions: [
  //       {
  //         suffix: 'Lab A',
  //         isLab: true,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 2,
  //         teacher: {
  //           firstName: 'Marie',
  //           lastName: 'Peroueme',
  //           hasUnavailable: false,
  //           unavailable: [{ day: '', startSlot: '', endSlot: '' }],
  //         },
  //       },
  //       {
  //         suffix: 'Lab B',
  //         isLab: true,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 2,
  //         teacher: {
  //           firstName: 'Marie',
  //           lastName: 'Peroueme',
  //           hasUnavailable: false,
  //           unavailable: [{ day: '', startSlot: '', endSlot: '' }],
  //         },
  //       },
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: true,
  //         day: 2,
  //         hour: 9,
  //         length: 3,
  //         teacher: {
  //           firstName: 'Damien',
  //           lastName: 'Berthet',
  //           hasUnavailable: false,
  //           unavailable: [{ day: '', startSlot: '', endSlot: '' }],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Fizik II',
  //     code: 'ING117',
  //     department: 0,
  //     year: 1,
  //     hasNoTeacher: false,
  //     hasCoursesToNotCollide: false,
  //     cannotCollideWith: [],
  //     hasMultipleTeachers: false,
  //     hasLabs: false,
  //     hasFixed: false,
  //     sessions: [
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 2,
  //         teacher: {
  //           firstName: 'Erden',
  //           lastName: 'Tuğcu',
  //           hasUnavailable: true,
  //           unavailable: [{ day: 1, startSlot: 9, endSlot: 12 }],
  //         },
  //       },
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 3,
  //         teacher: {
  //           firstName: 'Erden',
  //           lastName: 'Tuğcu',
  //           hasUnavailable: true,
  //           unavailable: [{ day: 1, startSlot: 9, endSlot: 12 }],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Algoritma ve İleri Bilgisayar Programlama',
  //     code: 'ING114',
  //     department: 0,
  //     year: 1,
  //     hasNoTeacher: false,
  //     hasCoursesToNotCollide: false,
  //     cannotCollideWith: [],
  //     hasMultipleTeachers: false,
  //     hasLabs: false,
  //     hasFixed: false,
  //     sessions: [
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 3,
  //         teacher: {
  //           firstName: 'Uzay',
  //           lastName: 'Çetin',
  //           hasUnavailable: true,
  //           unavailable: [{ day: 2, startSlot: 15, endSlot: 17 }],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Programlama Dillerinin Prensipleri',
  //     code: 'ING115',
  //     department: 0,
  //     year: 1,
  //     hasNoTeacher: false,
  //     hasCoursesToNotCollide: true,
  //     cannotCollideWith: ['Matematik II', 'Fizik II'],
  //     hasMultipleTeachers: false,
  //     hasLabs: false,
  //     hasFixed: false,
  //     sessions: [
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 2,
  //         teacher: {
  //           firstName: 'Burak',
  //           lastName: 'Parlak',
  //           hasUnavailable: true,
  //           unavailable: [{ day: 4, startSlot: 16, endSlot: 18 }],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Kariyer Planlama',
  //     code: 'CNT120',
  //     department: 0,
  //     year: 1,
  //     hasNoTeacher: true,
  //     hasCoursesToNotCollide: false,
  //     cannotCollideWith: [],
  //     hasMultipleTeachers: false,
  //     hasLabs: false,
  //     hasFixed: false,
  //     sessions: [
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 3,
  //         teacher: {
  //           firstName: 'Damien',
  //           lastName: 'Berthet',
  //           hasUnavailable: false,
  //           unavailable: [{ day: '', startSlot: '', endSlot: '' }],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Fotoğrafçılık',
  //     code: 'CNT401',
  //     department: 0,
  //     year: 4,
  //     hasNoTeacher: false,
  //     hasCoursesToNotCollide: false,
  //     cannotCollideWith: [],
  //     hasMultipleTeachers: true,
  //     hasLabs: false,
  //     hasFixed: false,
  //     sessions: [
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 2,
  //         teacher: {
  //           firstName: 'Uzay',
  //           lastName: 'Çetin',
  //           hasUnavailable: true,
  //           unavailable: [{ day: 2, startSlot: 15, endSlot: 17 }],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Sosyal Medya',
  //     code: 'CNT402',
  //     department: 0,
  //     year: 4,
  //     hasNoTeacher: false,
  //     hasCoursesToNotCollide: false,
  //     cannotCollideWith: [],
  //     hasMultipleTeachers: true,
  //     hasLabs: false,
  //     hasFixed: false,
  //     sessions: [
  //       {
  //         suffix: null,
  //         isLab: false,
  //         isFixed: false,
  //         day: '',
  //         hour: '',
  //         length: 2,
  //         teacher: {
  //           firstName: 'Burak',
  //           lastName: 'Parlak',
  //           hasUnavailable: true,
  //           unavailable: [{ day: 4, startSlot: 16, endSlot: 18 }],
  //         },
  //       },
  //     ],
  //   },
  // ];

  // const teachers = [
  //   {
  //     id: 0,
  //     firstName: 'Marie',
  //     lastName: 'Peroueme',
  //     unavailable: [[], [], [], [], [9, 10]],
  //   },
  //   {
  //     id: 1,
  //     firstName: 'Damien',
  //     lastName: 'Berthet',
  //     unavailable: [[], [11, 12], [], [9], [16, 17]],
  //   },
  //   {
  //     id: 2,
  //     firstName: 'Erden',
  //     lastName: 'Tuğcu',
  //     unavailable: [[], [9, 10, 11], [15, 16, 17], [], []],
  //   },
  //   {
  //     id: 3,
  //     firstName: 'Uzay',
  //     lastName: 'Çetin',
  //     unavailable: [[], [], [], [], []],
  //   },
  //   {
  //     id: 4,
  //     firstName: 'Burak',
  //     lastName: 'Parlak',
  //     unavailable: [[], [], [], [], [16, 17]],
  //   },
  // ];

  const multiTeacherCourses = courses.filter(
    (course) => course.hasMultipleTeachers
  );

  multiTeacherCourses.forEach((course) => {
    const courseIndex = courses.findIndex((c) => c.name === course.name);
    if (courseIndex > -1) {
      courses.splice(courseIndex, 1);
    }
  });

  if (multiTeacherCourses.length > 0) {
    teachers.push({
      id: teachers.length,
      firstName: '',
      lastName: '',
      unavailable: [[], [], [], [], []],
    });

    courses.push({
      name: multiTeacherCourses.map((c) => c.name).join('/'),
      code: multiTeacherCourses.map((c) => c.code).join('/'),
      department: 0,
      year: 4,
      hasNoTeacher: false,
      hasCoursesToNotCollide: false,
      cannotCollideWith: [],
      hasMultipleTeachers: true,
      teachers: multiTeacherCourses.map((c) =>
        getTeacherId(teachers, c.sessions[0].teacher)
      ),
      hasLabs: false,
      hasFixed: false,
      sessions: [
        {
          suffix: null,
          isLab: false,
          isFixed: false,
          day: '',
          hour: '',
          length: 2,
          teacherId: teachers.length - 1,
        },
      ],
    });
  }

  const noTeacherCourses = courses.filter((course) => course.hasNoTeacher);

  if (noTeacherCourses.length > 0) {
    for (let index = 0; index < noTeacherCourses.length; index++) {
      teachers.push({
        id: teachers.length,
        firstName: '',
        lastName: '',
        unavailable: [[], [], [], [], []],
      });

      const courseIndex = courses.findIndex(
        (c) => c.code === noTeacherCourses[index].code
      );
      courses[courseIndex].teacherId = teachers.length - 1;
    }
  }

  courses.forEach((course, index) => {
    course.id = index;
  });

  const newAllCourses = courses.map((course, index) => ({
    id: course.id,
    code: course.code,
    name: course.name,
    department: course.department,
    year: course.year,
    cannotCollideWith: course.hasCoursesToNotCollide
      ? course.cannotCollideWith.map((courseName) =>
          getCoursesToNotCollide(courseName, courses)
        )
      : [],
    hasNoTeacher: course.hasNoTeacher,
    hasMultiTeachers: course.hasMultipleTeachers,
    teachers: course.hasMultipleTeachers ? course.teachers : [],
    sessions: course.sessions.map((session) => ({
      isLab: session.isLab,
      isFixed: session.isFixed,
      suffix: session.isLab ? session.suffix : null,
      day: session.isFixed ? session.day : null,
      hour: session.isFixed ? session.hour : null,
      length: session.length,
      teacherId: course.teacherId
        ? course.teacherId
        : session.teacherId
        ? session.teacherId
        : getTeacherId(teachers, session.teacher),
    })),
  }));

  fs.writeFileSync('./data/teachers.json', JSON.stringify(teachers));
  fs.writeFileSync('./data/courses.json', JSON.stringify(newAllCourses));

  // console.log(JSON.stringify({ teachers, courses: newAllCourses }, null, 2));
}

// exportCourses2();

function exportData(teachers, courses, config, constraints) {
  exportLanguageSlots(config);
  exportEvolutionConstants(config);
  exportConstraintWeights(constraints);
  exportCoursesAndTeachers(courses, teachers);
}

export { exportData };
