

let ism = "Vali";
let yosh = 30;
let talabami = false;
let hobby = "Futbol";

function stringgaAylantir(qiymat) {
  return qiymat.toString();
}


const kitob1 = {
  sarlavha: "Alkimyogar",
  muallif: "Paulo Coelho",
  nashrYili: 1988,
  sahifalarSoni: 208,
  mavjud: true,
};

const kitob2 = {
  sarlavha: "Yulduzli tunlar",
  muallif: "Pirimqul Qodirov",
  nashrYili: 1975,
  sahifalarSoni: 400,
  mavjud: false,
};

function kitobHaqidaMalumot(kitob) {
  return `${kitob.sarlavha}, 
    muallifi: ${kitob.muallif}, 
    nashr yili: ${kitob.nashrYili}, 
    sahifalar soni: ${kitob.sahifalarSoni}, 
    mavjud: ${kitob.mavjud ? "Bor" : "Yo'q"}`;
}

class Kutubxona {
  constructor() {
    this.kitoblar = [];
  }

  kitobQoshish(kitob) {
    this.kitoblar.push(kitob);
  }

  kitobniTopish(sarlavha) {
    return this.kitoblar.find((kitob) => kitob.sarlavha === sarlavha);
  }

  mavjudKitoblarSoni() {
    return this.kitoblar.filter((kitob) => kitob.mavjud).length;
  }
}

const kutubxona = new Kutubxona();
kutubxona.kitobQoshish(kitob1);
kutubxona.kitobQoshish(kitob2);

const topilganKitob = kutubxona.kitobniTopish("Alkimyogar");



console.log(stringgaAylantir(456));
console.log(stringgaAylantir("Dunyo"));
console.log(kitobHaqidaMalumot(kitob1));
console.log(kitobHaqidaMalumot(kitob2));
console.log("Topilgan kitob:", topilganKitob);
console.log("Mavjud kitoblar soni:", kutubxona.mavjudKitoblarSoni());


// _________________________________________________________________
function Qiymati(value) {
  console.log("Qiymat:", value);
}

Qiymati(100);
Qiymati("Dasturlash");
Qiymati(false);



let TasodifiyQiymat;

TasodifiyQiymat = 25;
console.log("Son:", TasodifiyQiymat);

TasodifiyQiymat = "JavaScript";
console.log("Matn:", TasodifiyQiymat);

TasodifiyQiymat = { title: "Kitob", pages: 150 };
console.log("Ob'ekt:", TasodifiyQiymat);



let qiymat = "Hello TypeScript!";
let stringLength = qiymat.length;
console.log("Matn uzunligi:", stringLength);




let raqam;
raqam = "789";
let raqamLength = raqam.length;
console.log("Raqam uzunligi:", raqamLength);



let booleanValue = "false";
let isTrue = booleanValue === "true";
console.log("Boolean qiymat:", isTrue);



let object = { name: "Sarah", age: 28 };
let person = object;
console.log("Ism:", person.name, "Yosh:", person.age);
