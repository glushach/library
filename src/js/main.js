import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

const type = $('button').getAttr('type');
// console.log(type); //значение атрибута в консоль;

$('button').setAttr('id', 'button'); //установка элементу нового id;

$('div').removeAttr('style'); //удаление атрибута у элемента

$('button').toggleAttr('dir', 'rtl'); //карусель атрибута


// console.log($('button').html('Hello'));


$('div').click(function() {
    console.log($(this).index());
});

console.log($('div').eq(2).find('.some'));

