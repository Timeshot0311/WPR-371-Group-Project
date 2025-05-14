const express = require('express');
const router = express.Router();

const team = require('../data/team');
const events = require('../data/events');

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

