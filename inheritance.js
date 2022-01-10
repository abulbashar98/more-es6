
class PrgrmngHeroTeamMmbr {
    name;
    designation = 'web dev'
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}








class Support extends PrgrmngHeroTeamMmbr {

    designation;
    groupSupportTime;
    constructor(name, address, designation, time) {
        super(name, address)
        this.designation = designation
        this.groupSupportTime = time;
    }

    startAgroupSupportSession(time) {
        console.log(this.name + ' start group support session at ', time)
    }
}


class StudentCare extends PrgrmngHeroTeamMmbr {
    designation;
    constructor(name, address, designation) {
        super(name, address)
        this.designation = designation;
    }

    buildRoutine(student) {
        console.log(this.name + ' build a specia guideline routine for', student)
    }
}

class NeptuneDev extends PrgrmngHeroTeamMmbr {
    designation;
    codeEditor;
    constructor(name, address, designation, editor) {
        super(name, address)
        this.designation = designation;
        this.codeEditor = editor;
    }

    releaseApp(version) {
        console.log(this.name + ' release app version', version)
    }
}


const tamim = new Support('tamim', 'chattogram', 'support web dev', 6);
const soumya = new Support('soummya', 'kolabagan', 'suppor web dev', 11)
const liton = new Support('liton', 'kolabagan', 'suppor web dev', 7)
const afif = new Support('afif', 'kolabagan', 'suppor web dev', 8)
console.log(tamim);
tamim.startAgroupSupportSession(7)

const sakib = new StudentCare('Sakib', 'jhinaidaha', 'student care dev')
sakib.buildRoutine('Khaled')
const mash = new StudentCare('mashrafe', 'norail', 'student care dev')
console.log(mash);


const mushfiq = new NeptuneDev('mushfiq', 'barishal', 'Neptune dev', 'android studio')
mushfiq.releaseApp('12.5.9.8')
const sabbir = new NeptuneDev('sabbir', 'dhaka', 'neptune web dev', 'android studio')
console.log(sabbir)






//===>

// PS C:\Main Projects\more-es6> node inheritance.js
// Support {
//   name: 'tamim',
//   designation: 'support web dev',
//   address: 'chattogram',
//   groupSupportTime: 6
// }
// tamim start group support session at  7
// Sakib build a specia guideline routine for Khaled
// StudentCare {
//   name: 'mashrafe',
//   designation: 'student care dev',
//   address: 'norail'
// }
// mushfiq release app version 12.5.9.8
// NeptuneDev {
//   name: 'sabbir',
//   designation: 'neptune web dev',
//   address: 'dhaka',
//   codeEditor: 'android studio'
// }