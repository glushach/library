import $ from './lib/lib';

$('button').on('click', function() {
    $(this).hide().show().toggleClass('active');
});

const type = $('button').getAttr('type');
console.log(type); //значение атрибута в консоль;

$('button').setAttr('id', 'button'); //установка элементу нового id;

$('div').removeAttr('style'); //удаление атрибута у элемента

$('button').toggleAttr('dir', 'rtl'); //карусель атрибута