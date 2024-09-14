


let ism: string = "Vali";
let yosh: number = 30;
let talabami: boolean = false;
let hobby: string | null = "Futbol";

function stringgaAylantir(qiymat: number | string): string {
  return qiymat.toString();
}




interface Kitob {
  sarlavha: string;
  muallif: string;
  nashrYili: number;
  sahifalarSoni: number;
  mavjud: boolean;
}

const kitob1: Kitob = {
  sarlavha: "Alkimyogar",
  muallif: "Paulo Coelho",
  nashrYili: 1988,
  sahifalarSoni: 208,
  mavjud: true,
};

const kitob2: Kitob = {
  sarlavha: "Yulduzli tunlar",
  muallif: "Pirimqul Qodirov",
  nashrYili: 1975,
  sahifalarSoni: 400,
  mavjud: false,
};

function kitobHaqidaMalumot(kitob: Kitob): string {
  return `${kitob.sarlavha}, 
    muallifi: ${kitob.muallif}, 
    nashr yili: ${kitob.nashrYili}, 
    sahifalar soni: ${kitob.sahifalarSoni}, 
    mavjud: ${kitob.mavjud ? "Bor" : "Yo'q"}`;
}




class Kutubxona {
  kitoblar: Kitob[] = [];

  kitobQoshish(kitob: Kitob) {
    this.kitoblar.push(kitob);
  }

  kitobniTopish(sarlavha: string): Kitob | undefined {
    return this.kitoblar.find((kitob) => kitob.sarlavha === sarlavha);
  }

  mavjudKitoblarSoni(): number {
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



// ____________________________________________________________________
function Qiymati(value: any): void {
  console.log("Qiymat:", value);
}

Qiymati(100);
Qiymati("Dasturlash");
Qiymati(false);




let TasodifiyQiymat: any;

TasodifiyQiymat = 25;
console.log("Son:", TasodifiyQiymat);

TasodifiyQiymat = "JavaScript";
console.log("Matn:", TasodifiyQiymat);

TasodifiyQiymat = { title: "Kitob", pages: 150 };
console.log("Ob'ekt:", TasodifiyQiymat);




let qiymat: string | undefined = "Hello TypeScript!";
let stringLength: number = (qiymat as string).length;
console.log("Matn uzunligi:", stringLength);



let raqam: string | number;
raqam = "789";
let raqamLength: number = (raqam as string).length;
console.log("Raqam uzunligi:", raqamLength);



let booleanValue: string | boolean = "false";
let isTrue: boolean = booleanValue as unknown as boolean;
console.log("Boolean qiymat:", isTrue);




let object: any = { name: "Doe", age: 28 };
let person: { name: string; age: number } = object as {
  name: string;
  age: number;
};
console.log("Ism:", person.name, "Yosh:", person.age);
