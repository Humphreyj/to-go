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
export const categories = [];
export const inventory = [];

export const masterList = paperGoodsList.concat(veggieList,fruitList,meatList);