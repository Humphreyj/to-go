import pt from '../img/pt.jpg';
import tp from '../img/tp.jpg';

//eggs and dairy photos
import eggs from '../img/eggs.jpg';
import milk from '../img/milk.jpg'
import cheddar from '../img/cheddar.jpg'
import swiss from '../img/swiss.jpg';
import havarti from '../img/havarti.jpg';
import heavyCream from '../img/heavyCream.jpg';
import strawberryYogurt from '../img/strawberryYogurt.jpg';
import plainYogurt from '../img/plainYogurt.jpg';
import sourCream from '../img/sourCream.jpg';
import snackPack from '../img/snackPack.jpg';
//eggs and dairy photos


import charcoal from '../img/charcoal.jpg';
import lighter_fluid from '../img/lighter_fluid.jpg';


import bleach from '../img/bleach.jpg'
import wipes from '../img/wipes.jpg'
import windex from '../img/windex.jpg'
import winecup from '../img/winecup.jpg'
import napkins from '../img/napkins.jpg'

import solo from '../img/solo.jpg'
//pantry photos
import ketchup from '../img/ketchup.png';
import mustard from '../img/mustard.jpg';
import buns from '../img/buns.jpg';
import crackers from '../img/crackers.jpg'
import flour from '../img/flour.jpg'
import peanutButterCrunchy from '../img/peanutButterCrunchy.jpg'
import peanutButterCreamy from '../img/peanutButterCreamy.jpg'
import strawberryJam from '../img/strawberryJam.jpg'
import corn from '../img/corn.jpg'
import spam from '../img/spam.jpg'
//pantry photos
//produce photos
import peaches from'../img/peaches.jpg';
import englishcuke from '../img/englishcuke.jpg';
import caracara from '../img/caracara.jpg';
import grannySmith from '../img/grannySmith.jpg';
import watermelon from '../img/watermelon.jpg';
import coconut from '../img/coconut.jpg';
import kiwi from '../img/kiwi.jpg';
import dragonFruit from '../img/dragonFruit.jpg';
import pineapple from '../img/pineapple.jpg';
import shallots from '../img/shallots.jpg';
import yellowOnion from '../img/yellowOnion.jpg';
import brussels from '../img/brussels.jpg';
import greenGrapes from '../img/greenGrapes.jpg';
import redGrapes from '../img/redGrapes.jpg';
import redBell from '../img/redBell.jpg';
//produce photos
//bakery photos
import breadRolls from '../img/breadRolls.jpg'
import frenchBread from '../img/frenchBread.jpg'
import sandwichBread from '../img/sandwichBread.jpg'
import sourdough from '../img/sourdough.jpg'
import countryWhite from '../img/countryWhite.jpg'
import candyCookies from '../img/candyCookies.jpg'
import peanutButterCookie from '../img/peanutButterCookie.jpg'
import marranitos from '../img/marranitos.jpg'
import macadamia from '../img/macadamia.jpg'
import chocolateChip from '../img/chocolateChip.jpg'
//bakery photos
//pet photos
import poopBags from '../img/poopBags.jpg'
import lambDogToy from '../img/lambDogToy.jpg'
import tennisBalls from '../img/tennisBalls.jpg'
import dogFood from '../img/dogFood.jpg'
import chewBone from '../img/chewBone.jpg'
import chickenJerky from '../img/chickenJerky.jpg'
import longDogs from '../img/longDogs.jpg'
import catSausage from '../img/catSausage.jpg'
import catFood from '../img/catFood.jpg'
import catToy from '../img/catToy.jpg'
//pet photos
//deli photos
import classicHummus from '../img/classicHummus.jpg'
import spicyHummus from '../img/spicyHummus.jpg'
import juliosSalsa from '../img/juliosSalsa.jpg'
import guacatillo from '../img/guacatillo.jpg'
import turkey from '../img/turkey.jpg'
import salami from '../img/salami.jpg';
import ham from '../img/ham.jpg';
import fancyTurkey from '../img/fancyTurkey.jpg'
import roastBeef from '../img/roastBeef.jpg'
import muha from '../img/muha.jpg';
import beanDip from '../img/beanDip.jpg';
//deli photos
//meat photos
import hotdog from '../img/hotdog.png';
import groundBeef from '../img/groundBeef.jpg';
import steaks from '../img/steaks.jpg';
import flank from '../img/flank.jpg';
import freshShrimp from '../img/freshShrimp.jpg';
import cocktailShrimp from '../img/cocktailShrimp.jpg';
import sockeye from '../img/sockeye.jpg';
import chickenBreast from '../img/chickenBreast.jpg';
import chickenTenders from '../img/chickenTenders.jpg';
import fajitaChicken from '../img/fajitaChicken.jpg';

//meat photos
//collection photos
import grilling from '../img/grillin.jpg'
import prettyPantry from '../img/prettyPantry.jpg';
import entertaining from '../img/entertaining.jpg';
import cleaning from '../img/cleaning.jpg';
import fall from '../img/fall.jpg'
import prepared from '../img/prepared.jpg'
import popcorn from '../img/popcorn.jpg'
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
        name: "Movie Night",
        img: popcorn

    }

]



export const categories= [
    {
        id:0,
        name: "Dairy & Eggs",
        img: dairyEggs,
        subCategories: ["Butter", "Cheese"]
    },
    {
        id:1,
        name: "Bakery",
        img: bakery,
        subCategories: ["Bread","Cookies"]
    },
    {
        id:2,
        name: "Produce",
        img: produce,
        subCategories: ["Fruits", "Vegetables"]
    },
    {
        id:3,
        name: "Deli",
        img: deli,
        subCategories: ["Sliced Meats", "Cheese", "Dips"]
    },
    {
        id:4,
        name: "Meat and Seafood",
        img: meats,
        subCategories: ["Beef","Chicken", "Shrimpies"]
    },
    {
        id:5,
        name: "Home",
        img: home,
        subCategories: ["Cleaning", "Outdoor","Paper Goods"]
    },
    {
        id:6,
        name: "Pantry",
        img: pantryItems,
        subCategories: ["Chips", "Canned Foods"]
    },
    {
        id:7,
        name: "Pets",
        img: pets,
        subCategories: ["Food", "Toys"]
    },
    // {
    //     id:8,
    //     name: "Health and Beauty",
    //     img: healthBeauty,
    //     subCategories: ["First Aid", "Makeup"]
    // }
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
        description: "Milk from Cows. Good source of protein and calcium.",
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
        description: "Eggs from chickens. Good source of protein.",
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
        description: "Delicious sharp cheddar.",
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
        description: "Nice and mild swiss cheese.",
        inCart: 0
    },
    {
        id: 0.9435341215943833410,
        itemCategory: "Dairy & Eggs",
        itemPrice: "5",
        itemQuantity: "2",
        name: "Havarti Cheese",
        itemImg: havarti,
        collection: '',
        description: "Goes well with Roast Beef, in the Deli Section.",
        inCart: 0
    },
    {
        id: 0.94353412159438334110,
        itemCategory: "Dairy & Eggs",
        itemPrice: "5",
        itemQuantity: "2",
        name: "Heavy Cream",
        itemImg: heavyCream,
        collection: '',
        description: "Good for a whole lot of things.",
        inCart: 0
    },
    {
        id: 0.94353412159438334111,
        itemCategory: "Dairy & Eggs",
        itemPrice: "5",
        itemQuantity: "2",
        name: "Sour Cream",
        itemImg: sourCream,
        collection: '',
        description: "Good for adding some sour to things.",
        inCart: 0
    },
    {
        id: 0.94353412159438334112,
        itemCategory: "Dairy & Eggs",
        itemPrice: "5",
        itemQuantity: "2",
        name: "Strawberry Yogurt",
        itemImg: strawberryYogurt,
        collection: '',
        description: "Delicious and full of protein and carbs.",
        inCart: 0
    },
    {
        id: 0.94353412159438334113,
        itemCategory: "Dairy & Eggs",
        itemPrice: "5",
        itemQuantity: "2",
        name: "Plain Yogurt",
        itemImg: plainYogurt,
        collection: '',
        description: "Full of protein and carbs.",
        inCart: 0
    },
    {
        id: 0.94353412159438334114,
        itemCategory: "Dairy & Eggs",
        itemPrice: "5",
        itemQuantity: "2",
        name: "Snack Pack",
        itemImg: snackPack,
        collection: '',
        description: "This is the only flavor.",
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
        description: "You will need this eventually.",
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
        description: "Good for all sorts of things.",
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
        description: "Delicious, tart peaches.",
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
        description: "Objectively the best Orange.",
        inCart: 0
    },
    {
        id: 0.932534022335943833678,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Good Apples",
        itemImg: grannySmith,
        collection: '',
        description: "A very tart but delicious apple. Most refreshing.",
        inCart: 0
    },
    {
        id: 0.932534022937845943833678,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Watermelon",
        itemImg: watermelon,
        collection: '',
        description: "Very delicious and makes a great gift.",
        inCart: 0
    },
    {
        id: 0.9384534022335943833678,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Coconut",
        itemImg: coconut,
        collection: '',
        description: "Peel before eating.",
        inCart: 0
    },
    {
        id: 0.9325340223239458743833678,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Kiwi",
        itemImg: kiwi,
        collection: '',
        description: "Fuzzy, but also yummy.",
        inCart: 0
    },
    {
        id: 0.93253408545643755943833678,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Dragon Fruit",
        itemImg: dragonFruit,
        collection: '',
        description: "A tart exotic fruit. Grants magical powers.",
        inCart: 0
    },
    {
        id: 0.9325340854564378675943833678,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Pineapple",
        itemImg: pineapple,
        collection: '',
        description: "Spiky, peel before eating.",
        inCart: 0
    },
    {
        id: 0.9325340854564378675943833678420,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Green Grapes",
        itemImg: greenGrapes,
        collection: '',
        description: "The grapes are green.",
        inCart: 0
    },
    {
        id: 0.9325340854564378675943833678,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Red Grapes",
        itemImg: redGrapes,
        collection: '',
        description: "These grapes are red.",
        inCart: 0
    },
    {
        id: 0.9325340115943833678,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "English Cucumbers",
        itemImg: englishcuke,
        collection: '',
        description: "A most distinguished cucumber.",
        inCart: 0
    },
    {
        id: 0.53234408545643755943833678,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Shallots",
        itemImg: shallots,
        collection: '',
        description: "Big onion flavor in small package.",
        inCart: 0
    },
    {
        id: 0.69420874011594383366,
        itemCategory: "Produce",
        itemPrice: "2",
        itemQuantity: "20",
        name: "Onion",
        itemImg: yellowOnion,
        collection: '',
        description: "Standard Onion, can pretty much go in anything.",
        inCart: 0
    },
    {
        id: 0.93253407438233643755943833678,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Brussels",
        itemImg: brussels,
        collection: '',
        description: "Delicious when roasted. Do not steam.",
        inCart: 0
    },
    {
        id: 0.93253407438456343755943833678,
        itemCategory: "Produce",
        itemPrice: "1.5",
        itemQuantity: "20",
        name: "Red Pepper",
        itemImg: redBell,
        collection: '',
        description: "Good raw or cooked. Many Antioxidant.",
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
        description: "So many nitrates! Yum!.",
        inCart: 0
    },
    {
        id: 0.87360044011594383366,
        itemCategory: "Deli",
        itemPrice: "2",
        itemQuantity: "20",
        name: "Turkey",
        itemImg: turkey,
        collection: '',
        description: "Not just for Thanksgiving, but it primarily is.",
        inCart: 0
    },
    {
        id: 0.873644011594383366,
        itemCategory: "Deli",
        itemPrice: "4",
        itemQuantity: "20",
        name: "Fancy Turkey",
        itemImg: fancyTurkey,
        collection: 'Entertaining',
        description: "Turkey, but with herbs and more expensive.",
        inCart: 0
    },
    {
        id: 0.873644011594383366,
        itemCategory: "Deli",
        itemPrice: "2",
        itemQuantity: "20",
        name: "Roast Beef",
        itemImg: roastBeef,
        collection: '',
        description: "Great on a sandwich with horseradish.",
        inCart: 0
    },
    {
        id: 0.8736440115943833663245,
        itemCategory: "Deli",
        itemPrice: "2",
        itemQuantity: "20",
        name: "Classic Hummus",
        itemImg: classicHummus,
        collection: '',
        description: "Classic Hummus. No funny stuff here.",
        inCart: 0
    },
    {
        id: 0.99936440115943833663245,
        itemCategory: "Deli",
        itemPrice: "2",
        itemQuantity: "20",
        name: "Spicy Hummus",
        itemImg: spicyHummus,
        collection: '',
        description: "Some say it is TOO spicy.",
        inCart: 0
    },
    {
        id: 0.999364401198343833663245,
        itemCategory: "Deli",
        itemPrice: "2",
        itemQuantity: "20",
        name: "Julio's Salsa",
        itemImg: juliosSalsa,
        collection: '',
        description: "Quality Salsa.",
        inCart: 0
    },
    {
        id: 0.23459364401198343833663245,
        itemCategory: "Deli",
        itemPrice: "2",
        itemQuantity: "20",
        name: "Muhamara",
        itemImg: muha,
        collection: '',
        description: "Red Pepper and cashew hummus.",
        inCart: 0
    },
    {
        id: 0.999363840115943833663245,
        itemCategory: "Deli",
        itemPrice: "2",
        itemQuantity: "20",
        name: "Gucatillo",
        itemImg: guacatillo,
        collection: '',
        description: "Gucamole and tomatillo salsa.",
        inCart: 0
    },
    {
        id: 0.873534011594383366,
        itemCategory: "Deli",
        itemPrice: "2.5",
        itemQuantity: "20",
        name: "Bean Dip",
        itemImg: beanDip,
        collection: '',
        description: "It is mostly beans.",
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
        description: "You love it.",
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
        description: "Some people like this.",
        inCart: 0
    },
    {
        id: 0.87365601159438336677227,
        itemCategory: "Pantry",
        itemPrice: "3",
        itemQuantity: "10",
        name: "Crunchy Peanut Butter",
        itemImg: peanutButterCrunchy,
        collection: 'Essentials',
        description: "The best type of peanut butter.",
        inCart: 0
    },
    {
        id: 0.772227873656011594383366,
        itemCategory: "Pantry",
        itemPrice: "3",
        itemQuantity: "10",
        name: "Creamy Peanut Butter",
        itemImg: peanutButterCreamy,
        collection: '',
        description: "Some people like this.",
        inCart: 0
    },
    {
        id: 0.873657722276011594383366,
        itemCategory: "Pantry",
        itemPrice: "3",
        itemQuantity: "10",
        name: "Strawberry Jam",
        itemImg: strawberryJam,
        collection: 'Essentials',
        description: "It will do in a jam.",
        inCart: 0
    },
    {
        id: 0.873656011594383366,
        itemCategory: "Pantry",
        itemPrice: "3",
        itemQuantity: "10",
        name: "Flour",
        itemImg: flour,
        collection: 'Essentials',
        description: "It is used in many things.",
        inCart: 0
    },
    {
        id: 0.873656011594383366,
        itemCategory: "Pantry",
        itemPrice: "3",
        itemQuantity: "10",
        name: "Corn",
        itemImg: corn,
        collection: '',
        description: "Im sure this can be used for soemthing.",
        inCart: 0
    },
    {
        id: 0.873656011594383366,
        itemCategory: "Pantry",
        itemPrice: "3",
        itemQuantity: "10",
        name: "Spam",
        itemImg: spam,
        collection: 'Grilling',
        description: "Goes well with eggs, sausage, and spam.",
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
        description: "Primarily used for griling.",
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
        description: "Helps get your charcoal going. Don't put too much, dad.",
        inCart: 0
    },
    {
        id: 0.874323656011594383366,
        itemCategory: "Meat and Seafood",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Steak",
        itemImg: steaks,
        collection: 'Grilling',
        description: "Quality meat from a majestic animal.",
        inCart: 0
    },
    {
        id: 0.87432365605431594383366,
        itemCategory: "Meat and Seafood",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Flank Steak",
        itemImg: flank,
        collection: 'Grilling',
        description: "Good meat from a majestic animal.",
        inCart: 0
    },
    {
        id: 0.8743236560543431594383366,
        itemCategory: "Meat and Seafood",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Ground Beef",
        itemImg: groundBeef,
        collection: 'Grilling',
        description: "Meat from a majestic animal.",
        inCart: 0
    },
    {
        id: 0.8743236560543159438336610009,
        itemCategory: "Meat and Seafood",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Fresh Shrimp",
        itemImg: freshShrimp,
        collection: 'Grilling',
        description: "Delicious fresh shrimp.",
        inCart: 0
    },
    {
        id: 0.8743236560543159438336610009,
        itemCategory: "Meat and Seafood",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Cocktail Shrimp",
        itemImg: cocktailShrimp,
        collection: 'Entertaining',
        description: "Delicious cocktail shrimp with sauce.",
        inCart: 0
    },
    {
        id: 0.87432365605431594383366100889,
        itemCategory: "Meat and Seafood",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Sockeye Salmon",
        itemImg: sockeye,
        collection: 'Entertaining',
        description: "Wild caught and extra delicious.",
        inCart: 0
    },
    {
        id: 0.87432365605431594383366100010,
        itemCategory: "Meat and Seafood",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Chicken Breast",
        itemImg: chickenBreast,
        collection: '',
        description: "The most popular piece of the chicken.",
        inCart: 0
    },
    {
        id: 0.87432365605431594383366100011,
        itemCategory: "Meat and Seafood",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Chicken Tenders",
        itemImg: chickenTenders,
        collection: '',
        description: "The smallest but arguably best piece of the chicken.",
        inCart: 0
    },
    {
        id: 0.8743236560543159438336610012,
        itemCategory: "Meat and Seafood",
        itemPrice: "3",
        itemQuantity: "20",
        name: "Fajita Chicken",
        itemImg: fajitaChicken,
        collection: 'Grilling',
        description: "Marinated with delicious spices and ready to grill.",
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
        description: "They are alright.",
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
        description: "You will need these for hotdogs.",
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
        description: "For external use only.",
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
        description: "Great for wiping things.",
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
        description: "It has a million uses.",
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
        description: "People can eat these at parties or on the couch.",
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
        description: "These are great for holding liquid.",
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
        description: "Small napkins for whatever you need them for.",
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
        description: "These are great for holding liquid.",
        inCart: 0
    },
    {
        id: 0.93234521432345943832,
        itemCategory: "Bakery",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Bag O' Rolls",
        itemImg: breadRolls,
        collection: 'Entertaining',
        description: "Rolls that we put in a bag for easy access.",
        inCart: 0
    },
    {
        id: 0.932345214323459438320861,
        itemCategory: "Bakery",
        itemPrice: "6",
        itemQuantity: "22",
        name: "French Bread",
        itemImg: frenchBread,
        collection: '',
        description: "Made locally, just to be clear.",
        inCart: 0
    },
    {
        id: 0.93234521432345943832999,
        itemCategory: "Bakery",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Sandwich Bread",
        itemImg: sandwichBread,
        collection: '',
        description: "You can put pretty much anything on a sandwich, but should you?",
        inCart: 0
    },
    {
        id: 0.932345214323459438323451,
        itemCategory: "Bakery",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Sourdough",
        itemImg: sourdough,
        collection: '',
        description: "Not very sour,but kind of.",
        inCart: 0
    },
    {
        id: 0.9328032521432345943832,
        itemCategory: "Bakery",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Country White",
        itemImg: countryWhite,
        collection: '',
        description: "This is a pretty good bread.",
        inCart: 0
    },
    {
        id: 0.9328032521432345944566832,
        itemCategory: "Bakery",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Chocolate Chip",
        itemImg: chocolateChip,
        collection: '',
        description: "Top-tier cookie.",
        inCart: 0
    },
    {
        id: 0.9328032521432345943832357845,
        itemCategory: "Bakery",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Peanut Butter",
        itemImg: peanutButterCookie,
        collection: '',
        description: "This is a pretty good cookie. You are going to want some milk.",
        inCart: 0
    },
    {
        id: 0.932803252143234594383248566744,
        itemCategory: "Bakery",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Marranitos",
        itemImg: marranitos,
        collection: '',
        description: "Are they shaped like pigs or hippos?",
        inCart: 0
    },
    {
        id: 0.00002803252143234594383248566744,
        itemCategory: "Bakery",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Candy Cookies",
        itemImg: candyCookies,
        collection: '',
        description: "Are they shaped like pigs or hippos?.",
        inCart: 0
    },
    {
        id: 0.93280325214323459438324856696944,
        itemCategory: "Bakery",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Macadamia",
        itemImg: macadamia,
        collection: '',
        description: "Some people enjoy these.",
        inCart: 0
    },
    {
        id: 0.1111032521432345943832,
        itemCategory: "Pets",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Dog Food",
        itemImg: dogFood,
        collection: '',
        description: "Dogs love it.",
        inCart: 0
    },
    {
        id: 0.111103252178782345943832,
        itemCategory: "Pets",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Lamby",
        itemImg: lambDogToy,
        description: "Dogs love it.",
        inCart: 0
    },
    {
        id: 0.14206911103252178782345943832,
        itemCategory: "Pets",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Long Dogs",
        itemImg: longDogs,
        description: "For chewin' on.",
        inCart: 0
    },
    {
        id: 0.11110325555578782345943832,
        itemCategory: "Pets",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Tennis Balls",
        itemImg: tennisBalls,
        description: "Dogs love it.",
        inCart: 0
    },
    {
        id: 0.111103252178782345943832,
        itemCategory: "Pets",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Some Bags",
        itemImg: poopBags,
        description: "You are gonna need this.",
        inCart: 0
    },
    {
        id: 0.8877206911103252178782345943832,
        itemCategory: "Pets",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Chicken Jerky",
        itemImg: chickenJerky,
        description: "My dog really likes it.",
        inCart: 0
    },
    {
        id: 0.8877206911103252178782345943832,
        itemCategory: "Pets",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Chew Bone",
        itemImg: chewBone,
        description: "Dogs go crazy for it.",
        inCart: 0
    },
    {
        id: 0.1224206911103252178782345943832,
        itemCategory: "Pets",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Cat Food",
        itemImg: catFood,
        description: "Cats eat this as well as mice.",
        inCart: 0
    },
    {
        id: 0.14206911103252178782345943832,
        itemCategory: "Pets",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Cat Treat Roll",
        itemImg: catSausage,
        description: "It smells weird, but they seem to like it.",
        inCart: 0
    },
    {
        id: 0.14514206911103252178782345943832,
        itemCategory: "Pets",
        itemPrice: "6",
        itemQuantity: "22",
        name: "Cat Toy",
        itemImg: catToy,
        description: "For playing with, on their terms.",
        inCart: 0
    },
   
];

