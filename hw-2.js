// Task 1 
   let x = 20;
   let y = 58;
   let z = 42;

   let sum = x + y + z;
   console.log(sum);



// task 2

   function age(i) {
      const secondsInMinutes = 60;
      const minutesInHours =  60;
      const hoursInDays = 24;
      const daysInYear = 365;
      const ageInAllTimings = {
         mySeconds: ((daysInYear * hoursInDays * minutesInHours * secondsInMinutes) * i) + ' seconds',
         myMinutes: ((daysInYear * hoursInDays * minutesInHours ) * i) + ' minutes',
         myHours: ((daysInYear * hoursInDays) * i) + ' hours',
         myDays: (daysInYear  * i) + ' days',
         myAge: i + ' years'
      }
      console.log(ageInAllTimings);
   }

   age(25);

// task 3

   let count = 42;
   let userName = '42';

   // count = String(count);
   // userName = Number(userName);
   count = count.toString();
   userName = parseInt(userName);

   console.log(count, userName);

// task 4
   let a = 1;
   let b = 2;
   let c = "белых медведей";

   const sumBear = a + '' + b + ' ' + c;
   console.log(sumBear);

// task 5

   let wordOne = 'доступ';
   let wordTwo = 'морпех';
   let wordThree = 'наледь';
   let wordFour = 'попрек';
   let wordFive = 'рубило';

   let lengthWords = wordOne + wordTwo + wordThree + wordFour + wordFive;
   console.log(lengthWords.length);

// task 6

   const number = 42;
   const boolean = true;
   const string = 'Pavel';
   console.log('number: ' + number + ' - ' + typeof(number));
   console.log('boolean: ' + boolean + ' - ' + typeof(boolean));
   console.log('string: ' + string + ' - ' + typeof(string));

// task 7

   let obj = {
      myName: prompt('укажите ваше имя:'),
      myAge: prompt('укажите ваш возраст:')
   }
   console.log(obj.myName + ',' + obj.myAge)

// advanced lvl

// task 1
   let h = 4;
   let f = 3;
   console.log(h, f)
   h = (f + h) - (f = h);
   console.log(h, f);

// task 2
   let codeWord1 = "обернись";
   let codeWord2 = "неужели";
   let codeWord3 = "огурцы";
   let codeWord4 = "липкие";
   let codeWord5 = "?!";
   //  option 1
   const codeWords = [codeWord1, codeWord2, codeWord3, codeWord4, codeWord5];
   let cipher = '';
   for (let i = 0; i < codeWords.length; i++) {
      let n = codeWords[i].split('');
      cipher += n[1];
   }
   console.log(cipher);

   //  option 2 
   let cipher2 = `${codeWord1[1]}${codeWord2[1]}${codeWord3[1]}${codeWord4[1]}${codeWord5[1]}`