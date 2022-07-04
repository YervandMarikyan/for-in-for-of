"use strict";

// 2. ստեղծում եք մեկ հատ Object 10 հատ property-ներով, 5 property-Ն պետք ա լինեն object, ու 
// for in-ով անում եք այնպես, որ կոնսոլում տպվեն համ առաջին մակարդակի property-ները իրենց value-ներով, 
// համ 2րդ մակարդակի (Օբյեկտի մեջի Օբյեկտների)

const university = {
    name: "Yerevan State University",
    foundedIn: 1919,
    academicStaff: 1600,
    aboutUniversity: `Yerevan State University (YSU; Armenian: Երևանի Պետական Համալսարան, ԵՊՀ), also simply University of Yerevan, is the oldest 
    continuously operating public university in Armenia. Founded in 1919, it is the largest university in the country.`,
    branch: "YSU Ijevan Branch",
    management: {
        rector: "Hovhannes Hovhannisyan",
        viceRector1: "Karen Darbinyan",
        viceRector2: "Hayk Sargsyan",
        viceRector3: "David Sahakyan"
    },    
    faculties: {
        fac1: "Physics",
        fac2: "Mathematics and Mechanics",
        fac3: "Informatics and Applied Mathematics",
        fac4: "FLaw",
        fac5: "International Relations"
    },
    hr: {
        headOfHr: "Gohar Galstyan",
        seniorHr: "Lusine Hakobyan",
        hrAssistant: "Elen Vardanyan"
    },
    security: {
        headOfSecurity: "Gurgen Grigoryan",
        seniorSpecialist: "Gevorg Karapetyan",
        watchmans: ["Tigran Levonyan", "Gegham Sargsyan", "Rudik Vardanyan"]
    },
    contacts: {
        telephone: "+374 10 505050",
        email: "ysu@university.am",
        adress: "Armenia, Yerevan, Alek Manukyan 1"        
    }
};

function printObjectInfo(object) {
    for(let key in object) {
        console.log(`1-st Property: ${key}`);
        if(typeof(object[key]) === "object") {
            for(let innerKey in object[key]) {
                console.log(`   2-nd Property: ${innerKey}, Value: ${object[key][innerKey]}`);
            }
        } else {
            console.log(`1-st Property: ${key}, Value: ${object[key]}`);
        }
    }
}
//printObjectInfo(university);
console.log(`***************************`);

// 3․  ստեղծում եք մեկ հատ Array, 10 հատ item-ներով, 5 item-ը պետք ա լինեն Array-ներ, ու for in-ով ու 
// for of-ով անում եք այնպես, որ կոնսոլում տպվեն համ առաջին մակարդակի item-ները համ 2րդ մակարդակի 
// (Զանգվածի մեջ զանգված)

const menu = [
    "Mineral Water",
    ["Wine", "Vodka", "Martini", "Brandy"],
    "Order Song",
    "Order Taxi or Driver",
    ["Summer salad", "Caesar", "Vinaigrette"],
    ["Cola", "Pepsi", "Natakhtari"],
    ["Pepperoni", "Margherita", "Assorted pizza"],
    ["Mikado", "Ecler", "Napoleon", "Cheescake"],
    "Sigaret",
    "Laptop for Work"
];

function printArray(arr) {
    console.log(`           "Print with for in"`);
    for(let index in arr) {
        if(typeof(arr[index]) === "object") {
            for(let innerIndex in arr[index]) {
                console.log(`   ${arr[index][innerIndex]}`);
            }            
        } else {
            console.log(arr[index]);
        }
        console.log(`------------------------`);
    }

    console.log(`           "Print with for of"`);
    for(let item of arr) {
        if(typeof(item) === "object") {
            for(let innerItem of item) {
                console.log(`   ${innerItem}`);
            }            
        } else {
            console.log(item);
        }
        console.log(`------------------------`);
    }
}
//printArray(menu);




// 4․ ստեղծում եք առանձին Object ու Array, որոնց մեջ ստեղծում եք function-ներ, ու փորձում եք ստանալ 
// destructuring անելով, այսինքն առանց կետի կանչելով, ուղղակի գրեք ֆունկցիայի անունը ու կանչեք

const testObj = {
    funcCallWithDestructuring1() {
        console.log(`Function 1 Call from Object`);
    },
    funcCallWithDestructuring2() {
        console.log(`Function 2 Call from Object`);
    }
};

const {funcCallWithDestructuring1, funcCallWithDestructuring2} = testObj;
funcCallWithDestructuring1();
funcCallWithDestructuring2();


const testArr = [
    function funcCallFromArr1() {
        return`Function 1 Call from Array`;
    },
    function funcCallFromArr2() {
        return`Function 2 Call from Array`;
    }
];

const [funcCallFromArr1, funcCallFromArr2] = testArr;
console.log(funcCallFromArr1());
console.log(funcCallFromArr2());





