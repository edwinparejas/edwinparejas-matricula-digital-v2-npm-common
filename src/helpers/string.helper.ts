export default class String {
  /**
   * Convert string to Date
   * @param {?('dd/mm/yyyy'|'yyyymmdd'|'yyyy-mm-dd')} format Date format - 'dd/mm/yyyy' by default
   * @returns {Date} Date
   */
  static toDate = (str: string, format = 'dd/mm/yyyy'): Date => {
    let y: number;
    let m: number;
    let d: number;
    if (format === 'dd/mm/yyyy') {
      y = parseInt(str.substr(6, 4));
      m = parseInt(str.substr(3, 2)) - 1;
      d = parseInt(str.substr(0, 2));
    } else if (format === 'yyyymmdd') {
      y = parseInt(str.substr(0, 4));
      m = parseInt(str.substr(4, 2)) - 1;
      d = parseInt(str.substr(6, 2));
    } else if (format === 'yyyy-mm-dd') {
      y = parseInt(str.substr(0, 4));
      m = parseInt(str.substr(5, 2)) - 1;
      d = parseInt(str.substr(8, 2));
    } else {
      throw new Error(`El formato de fecha especificado (${format}) es incorrecto`);
    }
    const date = new Date(y, m, d);
    return date;
  };

  /**
   * Concatenate parts of a full name
   * @param {string} name Name
   * @param {string} firstSurname First surname
   * @param {string} secondSurname Second surname
   * @returns {string} Full name
   */
  static getFullName = (name: string, firstSurname: string, secondSurname: string): string => {
    if (!name) {
      throw new Error("El parámetro 'name' está vacío");
    }

    if (firstSurname) {
      throw new Error("El parámetro 'firstSurname' está vacío");
    }

    const fs = firstSurname ? `${firstSurname} ` : '';
    const ss = secondSurname ? `${secondSurname}` : '';
    const lastName = `${fs}${ss}`.trim();
    const fullName = `${lastName}, ${name}`;
    return fullName.toUpperCase();
  };

  static ordinalTextMapping = [
    // unidades
    ['', 'primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto', 'séptimo', 'octavo', 'noveno'],
    // decenas
    ['', 'décimo', 'vigésimo', 'trigésimo', 'cuadragésimo', 'quincuagésimo', 'sexagésimo', 'septuagésimo', 'octagésimo', 'nonagésimo'],
    // centenas
    [
      '',
      'centésimo',
      'ducentésimo',
      'tricentésimo',
      'cuadrigentésimo',
      'quingentésimo',
      'sexcentésimo',
      'septingentésimo',
      'octingentésimo',
      'noningentésimo',
    ],
    // unidades de millar
    [
      '',
      'milésimo',
      'dosmilésimo',
      'tresmilésimo ',
      'cuatromilésimo',
      'cincomilésimo',
      'seismilésimo',
      'sietemilésimo',
      'ochomilésimo',
      'nuevemilésimo',
    ],
  ];

  // static toOrdinal = (number = 0, gender = 'm') => {
  //   let ordinal = '';
  //   const digits = [...number.toString()];
  //   digits.forEach((digit, i) => {
  //     const digitOrdinal = this.ordinalTextMapping[digits.length - i - 1][digit];
  //     if (!digitOrdinal) return;
  //     if (gender === 'f') {
  //       const digitOrdinalUpdated = `${digitOrdinal.substr(0, [digitOrdinal.length - 1])}a`;
  //       ordinal += `${digitOrdinalUpdated} `;
  //     } else {
  //       ordinal += `${digitOrdinal} `;
  //     }
  //   });
  //   return ordinal.trim();
  // };
}
