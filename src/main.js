import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Age } from './age.js';

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    let year = $("#year").val();
    let month = $("#month").val();
    let day = $("#day").val();
    let age = new Age(year, month, day);
    $("#output").append("<li>Your age in Mercury years is " + age.mercuryAge() + "</li>");
    $("#output").append("<li>Your age in Venus years is " + age.venusAge() + "</li>");
    $("#output").append("<li>Your age in Mars years is " + age.marsAge() + "</li>");
    $("#output").append("<li>Your age in Jupiter years is " + age.jupiterAge() + "</li>");
    $("#output").append("<li>" + age.remainingYears("Mercury") + " on Mercury</li>");
    $("#output").append("<li>" + age.remainingYears("Venus") + " on Venus</li>");
    $("#output").append("<li>" + age.remainingYears("Mars") + " on Mars</li>");
    $("#output").append("<li>" + age.remainingYears("Jupiter") + " on Jupiter</li>");
  });
});
