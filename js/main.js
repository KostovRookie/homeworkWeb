import { findMaxValueInArray, findMinValueInArray, findAverageValueInArray } from './utils.js';

function logToBoth(message, type = 'инфо', data = null) {
    if (data !== null) {
        console.log(message, data);
    } else {
        console.log(message);
    }
    
    if (window.visualConsole) {
        window.visualConsole.log(message, type, data);
    }
}

const testArray = [11, 235, 52, 30, 15, 20];

logToBoth('Резултати от функциите за масиви', 'инфо');
logToBoth('Макс стойност', 'ok', findMaxValueInArray(testArray));
logToBoth('Мин стойност', 'ok', findMinValueInArray(testArray));
logToBoth('Средна стойност', 'ok', findAverageValueInArray(testArray));

const person = {
    firstName: 'Делян',
    lastName: 'Пеевски',
    age: 284,
    email: 'shishi@gmail.com'
};

const personAddress = {
    street: 'ул. Витоша 1',
    city: 'Павликени',
    postalCode: '1000',
    country: 'България'
};

const personWithAddress = {
    ...person,
    address: personAddress
};

if (window.visualConsole) {
    window.visualConsole.separator();
}
logToBoth('Обединяване на обект person с address', 'инфо');
logToBoth('Обединен обект', 'данни', personWithAddress);

async function fetchPosts() {
    try {
        logToBoth('Дърпам от posts API...', 'инфо');
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        const titlesWithUserId3 = posts
            .filter(post => post.userId === 3)
            .map(post => post.title);
        
        if (window.visualConsole) {
            window.visualConsole.separator();
        }
        logToBoth('Постове с userId: 3 ', 'инфо');
        logToBoth(`Брой : ${titlesWithUserId3.length}`, 'ТОП!');
        logToBoth('Постове', 'данни', titlesWithUserId3);
        
        return posts;
    } catch (error) {
        logToBoth('Грешка при зареждане:', 'грешка', error.message);
        console.error('Грешка при зареждане:', error);
    }
}

async function fetchUsers() {
    try {
        logToBoth('Дърпане на данни от users API...', 'инфо');
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        const userNames = users.map(user => user.name);
        
        const sortedUserNames = userNames.sort();
        
        if (window.visualConsole) {
            window.visualConsole.separator();
        }
        logToBoth('Имена на потребители по азбучен ред', 'инфо');
        logToBoth('Сортирани имена', 'данни', sortedUserNames);
        
        return users;
    } catch (error) {
        logToBoth('Грешка при зареждане:', 'инфо', error.message);
        console.error('Грешка при зареждане:', error);
    }
}

fetchPosts();
fetchUsers();