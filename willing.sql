DROP TABLE IF EXISTS books;

CREATE TABLE books(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  image VARCHAR(60),
  PRIMARY KEY (id)
);

INSERT INTO books
	(name, image)
VALUES 
 ( "A People's History of the United States","https://www.google.com/books/edition/A_People_s_History_of_the_United_States/DhsiGEoATiMC?hl=en&gbpv=1&printsec=frontcover")
  
 ("1776","https://www.google.com/books/edition/1776/uu1mC6zWNTwC?hl=en&gbpv=1&printsec=frontcover"),

 ("Scribes, Script, and Books", "https://www.google.com/books/edition/Scribes_Script_and_Books/4q1MHDoFVwkC?hl=en&gbpv=1&printsec=frontcover");