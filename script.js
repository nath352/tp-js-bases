const prenom = "Nathan";
let age = 16;
console.log(prenom,age)

const moyenne = 16

if (moyenne <13){
    console.log("accès interdtit aux moins de 13 ans.");
} else if (moyenne <18){
    console.log("vous pouvez accéder à la section ado");
}else{
    console.log("Bienvenue dans l'espace adulte")
}

for (let i=0; i<10 ; i++) {
console.log("7*"+ (i+1) + ":" + 7*(i));
}