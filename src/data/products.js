import pt from '../img/pt.jpg';
import tp from '../img/tp.jpg';
import goodtp from '../img/goodtp.jpg';
import carrots from '../img/carrots.jpg';
import peaches from'../img/peaches.jpg';
import englishcuke from '../img/englishcuke.jpg';
import caracara from '../img/caracara.jpg';
import grannySmith from '../img/grannySmith.jpg';
import strawbabies from '../img/strawbabies.jpg';
import eggs from '../img/eggs.png';
import milk from '../img/milk.jpg'
import cheddar from '../img/cheddar.jpg'
import swiss from '../img/swiss.png';
import salami from '../img/salami.jpg';
import ham from '../img/ham.jpg';
import hotdog from '../img/hotdog.png';
import charcoal from '../img/charcoal.jpg';
import lighter_fluid from '../img/lighter_fluid.jpg';
import ketchup from '../img/ketchup.png';
import mustard from '../img/mustard.jpg';
import buns from '../img/buns.jpg';
import bleach from '../img/bleach.jpg'
import wipes from '../img/wipes.jpg'
import windex from '../img/windex.jpg'
import winecup from '../img/winecup.jpg'
import napkins from '../img/napkins.jpg'
import crackers from '../img/crackers.jpg'
import solo from '../img/solo.jpg'
//collection photos
import grilling from '../img/grillin.jpg'
import prettyPantry from '../img/prettyPantry.jpg';
import entertaining from '../img/entertaining.jpg';
import cleaning from '../img/cleaning.jpg';
import fall from '../img/fall.jpg'
import prepared from '../img/prepared.jpg'
//category images
import pets from '../img/pets.jpg'
import healthBeauty from '../img/health-beauty.jpg'
import home from '../img/home-outdoor.jpg'
import pantryItems from '../img/pantryItems.jpg'
import deli from '../img/deli.jpg'
import meats from '../img/meats.jpg'
import bakery from '../img/bakery.jpg'
import produce from '../img/produce.jpg'
import dairyEggs from '../img/dairyEggs.jpg'






// export const collections = ["Grilling", "Essentials","Entertaining","Cleaning","Seasonal", "Prepared Foods"]
export const collections = [
    {
        id:0,
        name: "Grilling",
        img: grilling
    },
    {
        id:1,
        name: "Essentials",
        img: prettyPantry

    },
    {
        id:2,
        name: "Entertaining",
        img: entertaining

    },
    {
        id:3,
        name: "Cleaning",
        img: cleaning

    },
    {
        id:4,
        name: "Seasonal",
        img: fall

    },
    {
        id:5,
        name: "Prepared Foods",
        img: prepared

    },

]



export const categories= [
    {
        id:0,
        name: "Dairy & Eggs",
        img: dairyEggs
    },
    {
        id:1,
        name: "Bakery",
        img: bakery
    },
    {
        id:2,
        name: "Produce",
        img: produce
    },
    {
        id:3,
        name: "Deli",
        img: deli
    },
    {
        id:4,
        name: "Meat and Seafood",
        img: meats
    },
    {
        id:5,
        name: "Home",
        img: home
    },
    {
        id:6,
        name: "Pantry",
        img: pantryItems
    },
    {
        id:7,
        name: "Pets",
        img: pets
    },
    {
        id:8,
        name: "Health and Beauty",
        img: healthBeauty
    }
]

export const inventory = [
    {
        id: 0.9325340115943832,
        itemCategory: "Dairy & Eggs",
        itemPrice: "6",
        itemQuantity: "4",
        name: "Milk",
        itemImg: milk,
        collection: 'Essentials',
        inCart: 0
    },
    {
        id: 0.93253401159438334,
        itemCategory: "Dairy & Eggs",
        itemPrice: "5",
        itemQuantity: "3",
        name: "Eggs",
        itemImg: eggs,
        collection: 'Essentials',
        inCart: 0
    },
    {
        id: 0.94353401159438334,
        itemCategory: "Dairy & Eggs",
        itemPrice: "5",
        itemQuantity: "2",
        name: "Cheddar Cheese",
        itemImg: cheddar,
        collection: '',
        inCart: 0
    },
    {
        id: 0.94353412159438334,
        itemCategory: "Dairy & Eggs",
        itemPrice: "5",
        itemQuantity: "2",
        name: "Swiss Cheese",
        itemImg: swiss,
        collection: '',
        inCart: 0
    },
    {
        id: 0.932534011594383345,
        itemCategory: "Home",
        itemPrice: "9",
        itemQuantity: "2",
        name: "Toilet Paper",
        itemImg: tp,
        collection: 'Essentials',
        inCart: 0
    },
    {
        id: 0.932534011664383345,
        itemCategory: "",
        itemPrice: "9",
        itemQuantity: "2",
        name: "Paper Towels",
        itemImg: pt,
        collection: 'Essentials',
        inCart: 0
    },
    {
        id: 0.932534011664383345,
        itemCategory: "Home",
        itemPrice: "9",
        itemQuantity: "2",
        name: "Paper Towels",
        itemImg: pt,
        collection: 'Cleaning',
        inCart: 0
    },
    {
        id: 0.932534011594383366,
        itemCategory: "Produce",
        itemPrice: "1",
        itemQuantity: "20",
        name: "Peaches",
        itemImg: peaches,
        collection: '',
        inCart: 0
    },
    {
        id: 0.932534011594383366,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Oranges",
        itemImg: caracara,
        collection: '',
        inCart: 0
    },
    {
        id: 0.873534011594383366,
        itemCategory: "Deli",
        itemPrice: "2.5",
        itemQuantity: "20",
        name: "Salami",
        itemImg: salami,
        collection: '',
        inCart: 0
    },
    {
        id: 0.873644011594383366,
        itemCategory: "Deli",
        itemPrice: "2",
        itemQuantity: "20",
        name: "Ham",
        itemImg: ham,
        collection: '',
        inCart: 0
    },
    {
        id: 0.873655011594383366,
        itemCategory: "Pantry",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Ketchup",
        itemImg: ketchup,
        collection: 'Grilling',
        inCart: 0
    },
    {
        id: 0.873656011594383366,
        itemCategory: "Pantry",
        itemPrice: "3",
        itemQuantity: "10",
        name: "Mustard",
        itemImg: mustard,
        collection: 'Grilling',
        inCart: 0
    },
    {
        id: 0.87365696911594383366,
        itemCategory: "Home",
        itemPrice: "3",
        itemQuantity: "10",
        name: "Charcoal",
        itemImg: charcoal,
        collection: 'Grilling',
        inCart: 0
    },
    {
        id: 0.8736569691159438336897,
        itemCategory: "Home",
        itemPrice: "3",
        itemQuantity: "4",
        name: "Charcoal Starter",
        itemImg: lighter_fluid,
        collection: 'Grilling',
        inCart: 0
    },
    {
        id: 0.873656011594383366,
        itemCategory: "Meat and Seafood",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Hot Dogs",
        itemImg: hotdog,
        collection: 'Grilling',
        inCart: 0
    },
    {
        id: 0.333656011594383366,
        itemCategory: "Pantry",
        itemPrice: "4",
        itemQuantity: "11",
        name: "Hot Dog Buns",
        itemImg: buns,
        collection: 'Grilling',
        inCart: 0
    },
    {
        id: 0.932534012345943832,
        itemCategory: "Home",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Bleach",
        itemImg: bleach,
        collection: 'Cleaning',
        inCart: 0
    },
    {
        id: 0.9325340123459765832,
        itemCategory: "Home",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Wipes",
        itemImg: wipes,
        collection: 'Cleaning',
        inCart: 0
    },
    {
        id: 0.9325365432345943832,
        itemCategory: "Home",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Windex",
        itemImg: windex,
        collection: 'Cleaning',
        inCart: 0
    },
    {
        id: 0.93253345432345943832,
        itemCategory: "Pantry",
        itemPrice: "3",
        itemQuantity: "22",
        name: "Crackers",
        itemImg: crackers,
        collection: 'Entertaining',
        inCart: 0
    },
    {
        id: 0.9325365432345943832,
        itemCategory: "Home",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Glasses",
        itemImg: winecup,
        collection: 'Entertaining',
        inCart: 0
    },
    {
        id: 0.9325365432345943832,
        itemCategory: "Home",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Little Napkins",
        itemImg: napkins,
        collection: 'Entertaining',
        inCart: 0
    },
    {
        id: 0.9325365432345943832,
        itemCategory: "Home",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Cups",
        itemImg: solo,
        collection: 'Entertaining',
        inCart: 0
    }
];

