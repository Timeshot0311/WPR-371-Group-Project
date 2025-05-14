const express = require('express');
const router = express.Router();

const team = [
  {
    name: "Suhil Jugroop", role: "Team Leader, Backend Developer, Frontend Developer, Data Manager", image: "Suhil.jpg", bio: "Also likes BBBs"
  },
  {
    name: "Duan van Deventer", role: "Backend Developer, Frontend Developer, Data Manager", image: "Duan.jpeg", bio: "BBBs"
  },
  {
    name: "Makhosandile Nkosi", role: "Backend Developer, Frontend Developer, Data Manager", image: "Andile.jpg", bio: "REALLY LIKES BBBs"
  },
  {
    name: "Mamello Lelaka", role: "Backend Developer, Frontend Developer, Data Manager", image: "Mamello.jpg", bio: ""
  },
];

const events = [
  {
    title: "Adult Cartoons Con",
    Description: "", 
    date: "26 June 2025", 
    location: "Nasrec Expo Centre, Johannesburg", 
    image: "Comic-Con.webp"
  },
  {
    title: "Enraged EXPO 2025",
    Description: "", 
    date: "04 May 2025", 
    location: "Nasrec Expo Centre, Johannesburg", 
    image: "Rage.jpg"
  },
  {
    title: "WollyFest",
    Description: "", 
    date: "18 November 2025", 
    location: "Old Park Station, Newtown Johannesburg", 
    image: "Festival-1.png"
  },
  {
    title: "21st Annual DiddlerFest",
    Description: "", 
    date: "16 October 2025", 
    location: "Suhils Backyard, Boksburg", 
    image: "baby-oil.jpeg"
  },
  {
   title: "19th BBB King Coronation",
    Description: "", 
    date: "26 June 2025", 
    location: "Union Buildings, Pretoria", 
    image: "Iron_Throne.webp"
  },
  {
    title: "Kyalami Power Series Round 4",
    Description: "", 
    date: "26 June 2025", 
    location: "Kyalami Grand Prix Circuit", 
    image: "kyalami.jpg"
  }
];

router.get('/', (req, res) => {
  res.render('pages/home');
});

router.get('/about', (req, res) => {
  res.render('pages/about', { team });
});

router.get('/events', (req, res) => {
  res.render('pages/events', { events });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  req.messages.push({ name, email, message });
  console.log("New Message Received:", { name, email, message });
  res.redirect('/thankyou');
});

// this is for testing purposes, the messages already show up in console but I wanted to see for sure
router.get('/messages', (req, res) => {
    res.json(req.messages);
});

router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou');
});

module.exports = router;

