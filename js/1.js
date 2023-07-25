// //4. Напишіть код, який буде запитувати
// //логін з допомогою prompt і виводити результат
// //в консоль браузера

// //Якщо користувач вводить "Admin" 
// //то prompt запитує пароль і якщо 
// // пароль не ввели або натиснули кнопку Esc треба показати alert "Cancel"

// //Пароль перевіряти так:
// //Якщо ввели віриний пароль "I am a boss",
// //тоді показати alert "Hello, Boss!"
// //інакше показати alert " Wrong password"

// //Якщо користувач вводить невірний пароль (не "I am a boss") 
// // тоді показати alert "I don't know you"(я вас не знаю)
// // *const login = prompt("Enter your login: ");
// // console.log(login);
// // if (login === "Admin"){
// //     const password = prompt("Enter your password: ");
// //     if (password) {
// //        if(password === "I am a boss"){
// //         alert("Hello, Boss!");
// //        } else{
// //         alert("Wrong password")
// //        }
// //     } else{
// //         alert("Cancel");
// //     }
// // } else {
// //     alert("I don't know you");
// // }




// //5. При завантаженні сторінки користувачу пропонується
// //в prompt ввести число. Ввод додається до значення 
// //змінної total.
// //Операція вводу числа продовжується до тех пір,
// //поки користувач не натисне кнопку Cancel в prompt.
// //Після того як користувач закінчив введення чисел і натиснув на
// //кнопку Cancel, показати alert з текстом  "Загальна сумма введених чисел дорівнює - [число]."
// //Робити перевірку, що користувач ввів саме число не потрібно.
// let userNumber = Number(prompt('Введіть число'));
// let total = 0;
// let check = false;
// // console.log(value)
// do {
//     if (userNumber){
//         total += userNumber;
//         userNumber = Number(prompt('Введіть число'));
//         check = true;
//     } else{
//         alert(`Загальна сумма введених чисел дорівнює - ${total}.`);
//         check = false;
//     }
// } while (check)