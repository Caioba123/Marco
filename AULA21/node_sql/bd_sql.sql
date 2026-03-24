create database teste34;

use teste34;

create table teste(
id int primary key auto_increment,
nome varchar(120) not null,
email varchar(120) not null,
senha varchar(60) not null,
cpf char(11) unique not null,
numero varchar (60) not null
);

select * from teste;
