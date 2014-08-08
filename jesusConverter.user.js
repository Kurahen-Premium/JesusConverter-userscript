// ==UserScript==
// @name        JesusConverter
// @namespace   mitsuba
// @description Adds a human-readable real name in front of poster's id
// @version     3
// @grant       none
// @downloadURL https://github.com/Z09/JesusConverter-userscript/raw/master/jesusConverter.user.js
// @run-at document-end

// @match       *://*.karachan.org/*
// @exclude     http://www.karachan.org/*/src/*
// @exclude     https://www.karachan.org/*/src/*
// @exclude     http://karachan.org/*/src/*
// @exclude     https://karachan.org/*/src/*
 
// @match       *://*.karachan.co/*
// @exclude     http://www.karachan.co/*/src/*
// @exclude     https://www.karachan.co/*/src/*
// @exclude     http://karachan.co/*/src/*
// @exclude     https://karachan.co/*/src/*
 
// @match       *://96.8.113.203/*
// @exclude     http://96.8.113.203/*/src/*
// @exclude     https://96.8.113.203/*/src/*
// @exclude     http://96.8.113.203/*/src/*
// @exclude     https://96.8.113.203/*/src/*

// ==/UserScript==

/*
 *      Copyright 2014 Z09
 *      
 *      This program is free software; you can redistribute it and/or modify
 *      it under the terms of the GNU General Public License as published by
 *      the Free Software Foundation; either version 2 of the License, or
 *      (at your option) any later version.
 *      
 *      This program is distributed in the hope that it will be useful,
 *      but WITHOUT ANY WARRANTY; without even the implied warranty of
 *      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *      GNU General Public License for more details.
 *      
 *      You should have received a copy of the GNU General Public License
 *      along with this program; if not, write to the Free Software
 *      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 *      MA 02110-1301, USA.
 *      
 *      
 */

"use strict";

var JesusConverter = {
	
	//do not change it on your own if you want to preserve compatibility with other users who have also installed this script 
	realnames: ['Aaron', 'Abdiasz', 'Abel', 'Abraham', 'Adam', 'Adolf', 'Adrian', 'Agenor', 'Albert', 'Albrecht', 'Albin', 'Aleksander', 'Aleksy', 'Alfons', 'Alfred', 'Alojzy', 'Amadeusz', 'Ambroży', 'Amos', 'Anastazy', 'Anatol', 'Andrzej', 'Antoni', 'Anzelm', 'Apolinary', 'Apoloniusz', 'Arkadiusz', 'Arnold', 'Aron', 'Artur', 'Atanazy', 'August', 'Augustyn', 'Aureli', 'Aurelian', 'Aureliusz', 'Axel', 'Barnaba', 'Barnabasz', 'Bartłomiej', 'Bartosz', 'Bazyli', 'Benedykt', 'Beniamin', 'Benon', 'Bernard', 'Bernardyn', 'Bertold', 'Błażej', 'Bogdan', 'Bogusław', 'Bogusz', 'Bohdan', 'Bolesław', 'Bonawentura', 'Bonifacy', 'Borys', 'Borysław', 'Borzysław', 'Bożydar', 'Bronimir', 'Bronisław', 'Brunon', 'Cecylian', 'Celestyn', 'Cezariusz', 'Cezary', 'Cyprian', 'Cyriak', 'Cyryl', 'Czesław', 'Damazy', 'Damian', 'Daniel', 'Dariusz', 'Dawid', 'Dezydery', 'Dezyderiusz', 'Dionizy', 'Dobiesław', 'Dobromir', 'Dobromierz', 'Dobrosław', 'Domicjan', 'Dominik', 'Domosław', 'Donald', 'Donat', 'Dorian', 'Duszan', 'Dymitr', 'Dyzma', 'Edgar', 'Edmund', 'Edward', 'Edwin', 'Egbert', 'Egon', 'Eliasz', 'Eligiusz', 'Elizeusz', 'Emanuel', 'Emil', 'Emilian', 'Erazm', 'Ernest', 'Eryk', 'Erwin', 'Eugeniusz', 'Eustachy', 'Euzebiusz', 'Ewald', 'Ewaryst', 'Ezdrasz', 'Ezechiel', 'Fabian', 'Faustyn', 'Felicjan', 'Feliks', 'Ferdynand', 'Fidelis', 'Filemon', 'Filip', 'Flawiusz', 'Florian', 'Fortunat', 'Franciszek', 'Fryderyk', 'Gabor', 'Gabriel', 'Gaweł', 'Gedeon', 'Gerwazy', 'Gilbert', 'Gniewomir', 'Goliat', 'Gościmił', 'Gościsław', 'Gotard', 'Gracjan', 'Grzegorz', 'Gustaw', 'Gwalbert', 'Gwidon', 'Heliodor', 'Helmut', 'Henryk', 'Herbert', 'Herman', 'Hieronim', 'Hilary', 'Hipolit', 'Honoriusz', 'Horacy', 'Hubert', 'Hugon', 'Idzi', 'Ignacy', 'Igor', 'Ildefons', 'Innocenty', 'Ireneusz', 'Irwin', 'Iwan', 'Iwo', 'Izydor', 'Izaak', 'Izajasz', 'Jacek', 'Jacenty', 'Jakub', 'Jan', 'Janisław', 'Janusz', 'Jaromir', 'Jarosław', 'Jeremi', 'Jeremiasz', 'Jerzy', 'Jędrzej', 'Joachim', 'Joel', 'Jonasz', 'Jonatan', 'Jordan', 'Jozue', 'Józef', 'Juda', 'Judasz', 'Julian', 'Juliusz', 'Jurand', 'Justyn', 'Kacper', 'Kain', 'Kajetan', 'Kalikst', 'Kamil', 'Kandyd', 'Karol', 'Kazimierz', 'Kiejstut', 'Klaudian', 'Klaudiusz', 'Klemens', 'Kleofas', 'Konrad', 'Konstancjusz', 'Konstanty', 'Konstantyn', 'Kornel', 'Korneliusz', 'Krzysztof', 'Kryspin', 'Krystyn', 'Ksawery', 'Kwiryn', 'Lambert', 'Laurenty', 'Lech', 'Leon', 'Leonard', 'Leonid', 'Leopold', 'Leszek', 'Longin', 'Lubomir', 'Lubor', 'Lubosław', 'Lucjan', 'Lucjusz', 'Ludomił', 'Ludomir', 'Ludosław', 'Ludwik', 'Lutomir', 'Ładysław', 'Łazarz', 'Łucjan', 'Łukasz', 'Maciej', 'Makary', 'Maksym', 'Maksymilian', 'Manfred', 'Mansfet', 'Marcel', 'Marceli', 'Marcelin', 'Marcin', 'Marcjal', 'Marcjan', 'Marek', 'Marian', 'Mariusz', 'Martynin', 'Mateusz', 'Medard', 'Melchior', 'Metody', 'Michał', 'Micheasz', 'Mieczysław', 'Mieszko', 'Mikołaj', 'Miłosz', 'Miromir', 'Miron', 'Mirosław', 'Mojżesz', 'Myślibor', 'Nahum', 'Namysław', 'Napoleon', 'Narcyz', 'Natan', 'Natanael', 'Nehemiasz', 'Nikodem', 'Noe', 'Norbert', 'Odon', 'Oktawian', 'Olaf', 'Olgierd', 'Onufry', 'Oswald', 'Otniel', 'Ozeasz', 'Pafnucy', 'Pankracy', 'Paschalis', 'Patrycjusz', 'Patrycy', 'Patryk', 'Paweł', 'Pelagiusz', 'Petroniusz', 'Piotr', 'Pius', 'Polikarp', 'Prokop', 'Prosper', 'Protazy', 'Przemysław', 'Przybysław', 'Racibor', 'Radek', 'Radomił', 'Radomir', 'Radosław', 'Radowit', 'Radzimierz', 'Radzimir', 'Rafał', 'Rajmund', 'Rajnold', 'Remigiusz', 'Robert', 'Roch', 'Rodryg', 'Roland', 'Roman', 'Romuald', 'Rościsław', 'Ruben', 'Rudolf', 'Rufin', 'Ryszard', 'Salomon', 'Samson', 'Samuel', 'Saturnin', 'Saul', 'Sebastian', 'Sergiusz', 'Serwacy', 'Seweryn', 'Sławoj', 'Sławomir', 'Sławosz', 'Sobiesław', 'Stanisław', 'Stefan', 'Sulimierz', 'Symeon', 'Sykstus', 'Sylweriusz', 'Sylwester', 'Sylwan', 'Sylwin', 'Sylwiusz', 'Szczepan', 'Szczęsny', 'Szymon', 'Ścibor', 'Tadeusz', 'Telesfor', 'Teobald', 'Teodor', 'Teodozjusz', 'Teofil', 'Tobiasz', 'Tomasz', 'Tomisław', 'Tymon', 'Tymoteusz', 'Tytus', 'Urban', 'Uriasz', 'Urlyk', 'Ursyn', 'Wacław', 'Waldemar', 'Walenty', 'Walerian', 'Walery', 'Walter', 'Wawrzyniec', 'Wespazjan', 'Wiaczesław', 'Wieńczysław', 'Wiesław', 'Wiktor', 'Wiktoryn', 'Wilhelm', 'Wincenty', 'Wirgiliusz', 'Wit', 'Witalis', 'Witold', 'Witomir', 'Witosław', 'Władysław', 'Włodzimierz', 'Wodzisław', 'Wojciech', 'Wszebor', 'Wyszomir', 'Zachariasz', 'Zbigniew', 'Zbisław', 'Zdobysław', 'Zdzisław', 'Zenobiusz', 'Zenon', 'Ziemowit', 'Zygfryd', 'Zygmunt', 'Żelisław', 'Żywisław'],
	
	getHashCode: function (string) {
		var hash = 0, i, chr, len;
		if (string.length == 0) return hash;
			for (i = 0, len = string.length; i < len; i++) {
				chr   = string.charCodeAt(i);
				hash  = ((hash << 5) - hash) + chr;
				hash |= 0;
			}
		return hash >>> 0;
	},
	
	convertToName: function(id) {
		return this.realnames[this.getHashCode(id) % (this.realnames.length-1)];
	},
	
	feedThread: function(threadNode) {
		var anti_dupes = {};
		
		//get the list of poster's id nodes within the thread node
		var idNodes = threadNode.getElementsByClassName('posteruid');
		for (var i = 0; i < idNodes.length; i++) {
			var jesusNode;
			var posterID, rName;
			
			if (idNodes[i].hasAttribute('title')) { //workaround for kurahen-premium
				posterID = idNodes[i].getAttribute('title');
			} 
			else {
				posterID = idNodes[i].firstChild.nodeValue.substring(5,13);
			}
			rName = this.convertToName(posterID);
			
			// check for duplicates
			var index, sub = '';
			if (!anti_dupes.hasOwnProperty(rName)) {
				anti_dupes[rName] = [posterID];
			}
			else {
				index = anti_dupes[rName].indexOf(posterID);
				if (index > 0) {
					sub = ' ' + (index+1);
				}
				else if (index == -1) {
					sub = ' ' + (anti_dupes[rName].push(posterID));
				}
			}
			
			//wrap it in a separate span tag
			jesusNode = document.createElement('span');
			jesusNode.setAttribute('class', 'jesusName postertrip');
			jesusNode.appendChild((document.createTextNode(rName + sub)));
			idNodes[i].parentNode.insertBefore(jesusNode, idNodes[i]);
			idNodes[i].parentNode.insertBefore(document.createTextNode(' '), jesusNode.nextSibling); // add space between tags
		}
	},
	
	obs: new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.target.getAttribute("class") == 'thread') {
				JesusConverter.feedThread(mutation.target);
			}
		});  
	}),
	
	init: function() {
		//get the list of thread nodes		
		var threadNodes = document.getElementsByClassName('thread');
		for (var i=0; i<threadNodes.length; i++) {		
			this.feedThread(threadNodes[i]);
			this.obs.observe(threadNodes[i], {childList: true});
		}
	}
	
}


window.addEventListener("DOMContentLoaded", function load(event){
    window.removeEventListener("DOMContentLoaded", load, false); //remove listener, no longer needed
    JesusConverter.init(); 
},false);
