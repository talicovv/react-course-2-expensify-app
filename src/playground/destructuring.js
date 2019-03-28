/*
const book = {
    title : 'Ego is the enemy',
    author : 'Ryan Holiday',
    publisher: {
        name : 'Penguin'
    }    
};

const { name : publisherName = 'Self-Published'} = book.publisher;
const {title, author} = book;

console.log(`The book ${title} was written by ${author} and plublished by ${publisherName}`);
*/

const item = ['Coffee (hot)', '2.00', '2.50', '2.75'];

const [coffee,small, medium, large] = item;

console.log(`A medium ${coffee} costs ${medium}`);