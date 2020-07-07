import pt from '../img/pt.jpg';
import tp from '../img/tp.jpg';
import goodtp from '../img/goodtp.jpg';
import carrots from '../img/carrots.jpg';
import peaches from'../img/peaches.jpg';
import englishcuke from '../img/englishcuke.jpg';
import caracara from '../img/caracara.jpg';
import navelOrange from '../img/navelOrange.png';
import grannySmith from '../img/grannySmith.jpg';
import strawbabies from '../img/strawbabies.jpg';
import yellowOnion from '../img/yellowOnion.jpg';
import redOnion from '../img/redOnion.jpg';
import celery from '../img/celery.jpg';
import steaks from '../img/steaks.jpg';
import porkChops from '../img/porkChops.jpg';
import wholeChicken from '../img/wholeChicken.jpg';



export const paperGoodsList = [
    {
        id: 0,
        name: 'Paper Towels',
        price: 1,
        img: pt,
        quantity_in_cart: 0
    },
    {
        id: 1,
        name: 'Toilet Paper',
        price: 2,
        img: tp,
        quantity_in_cart: 0
    },
    {
        id: 2,
        name: "Good Toilet Paper",
        price: 5,
        img: goodtp,
        quantity_in_cart: 0
    }
]

export const fruitList = [
    {
        id: 0,
        name: 'Peaches',
        price: 2,
        img: peaches,
        quantity_in_cart: 0
    },
    {
        id: 1,
        name: 'Strawberries',
        price: 2,
        img: strawbabies,
        quantity_in_cart: 0
    },
    {
        id: 2,
        name: 'Cara Cara Oranges',
        price: 8,
        img: caracara,
        quantity_in_cart: 0
    },
    {
        id: 3,
        name: 'Navel Oranges',
        price: .25,
        img: navelOrange,
        quantity_in_cart: 0
    },
    {
        id: 4,
        name: 'Granny Smith',
        price: 1,
        img: grannySmith,
        quantity_in_cart: 0    
    }
]

export const veggieList = [
    {
        id: 0,
        name: 'Carrots',
        price: 1,
        img: carrots,
        quantity_in_cart: 0
    },
    {
        id: 1,
        name: 'English Cucumbers',
        price: 2,
        img: englishcuke,
        quantity_in_cart: 0
    },
    {
        id: 2,
        name: 'Yellow Onion',
        price: 2,
        img: yellowOnion,
        quantity_in_cart: 0
    },
    {
        id: 3,
        name: 'Red Onion',
        price: 2,
        img: redOnion,
        quantity_in_cart: 0
    },
    {
        id: 4,
        name: 'Celery',
        price: 2,
        img: celery,
        quantity_in_cart: 0
    },
]

export const meatList = [
    {
        id: 0,
        name: 'Steaks',
        price: 10.5,
        img: steaks,
        quantity_in_cart: 0
    },
    {
        id: 1,
        name: 'PorkChops',
        price: 8.8,
        img: porkChops,
        quantity_in_cart: 0
    },
    {
        id: 2,
        name: 'Whole Chicken',
        price: 7.5,
        img: wholeChicken,
        quantity_in_cart: 0
    },
]
export const collections = ["Grilling", "Essentials"]
export const categories = ["Dairy","Paper","Produce","Deli",'Pantry',"Meat"];
export const inventory = [
    {
        id: 0.9325340115943832,
        itemCategory: "Dairy",
        itemPrice: "6",
        itemQuantity: "2",
        name: "Milk",
        collection: 'Essentials',
        inCart: 0
    },
    {
        id: 0.93253401159438334,
        itemCategory: "Dairy",
        itemPrice: "5",
        itemQuantity: "2",
        name: "Eggs",
        collection: 'Essentials',
        inCart: 0
    },
    {
        id: 0.94353401159438334,
        itemCategory: "Dairy",
        itemPrice: "5",
        itemQuantity: "2",
        name: "Cheedar Cheese",
        collection: '',
        inCart: 0
    },
    {
        id: 0.94353412159438334,
        itemCategory: "Dairy",
        itemPrice: "5",
        itemQuantity: "2",
        name: "Swiss Cheese",
        collection: '',
        inCart: 0
    },
    {
        id: 0.932534011594383345,
        itemCategory: "Paper",
        itemPrice: "9",
        itemQuantity: "2",
        name: "Toilet Paper",
        collection: 'Essentials',
        inCart: 0
    },
    {
        id: 0.932534011664383345,
        itemCategory: "Paper",
        itemPrice: "9",
        itemQuantity: "2",
        name: "Paper Towels",
        collection: 'Essentials',
        inCart: 0
    },
    {
        id: 0.932534011594383366,
        itemCategory: "Produce",
        itemPrice: "1",
        itemQuantity: "20",
        name: "Peaches",
        collection: '',
        inCart: 0
    },
    {
        id: 0.932534011594383366,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Oranges",
        collection: '',
        inCart: 0
    },
    {
        id: 0.873534011594383366,
        itemCategory: "Deli",
        itemPrice: "2.5",
        itemQuantity: "20",
        name: "Salami",
        collection: '',
        inCart: 0
    },
    {
        id: 0.873644011594383366,
        itemCategory: "Deli",
        itemPrice: "2",
        itemQuantity: "20",
        name: "Ham",
        collection: '',
        inCart: 0
    },
    {
        id: 0.873655011594383366,
        itemCategory: "Pantry",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Ketchup",
        collection: 'Grilling',
        inCart: 0
    },
    {
        id: 0.873656011594383366,
        itemCategory: "Pantry",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Mustard",
        collection: 'Grilling',
        inCart: 0
    },
    {
        id: 0.873656011594383366,
        itemCategory: "Meat",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Hot Dogs",
        collection: 'Grilling',
        inCart: 0
    },
];

export const masterList = paperGoodsList.concat(veggieList,fruitList,meatList);