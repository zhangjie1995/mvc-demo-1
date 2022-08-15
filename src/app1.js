import './app1.css'
import $ from 'jquery'

const $add = $('.actions .add')
const $minus = $('.actions .minus')
const $multiply2 = $('.actions .multiply2')
const $divide2 = $('.actions .divide2')
const $number = $('.main .app1 .number')
let number = parseInt(localStorage.getItem('n')) || 100
$number.text(number)
$add.on('click',()=>{
    number += 100
    localStorage.setItem('n', number)
    $number.text(number)
})
$minus.on('click',()=>{
    number -= 100
    localStorage.setItem('n', number)
    $number.text(number)
})
$multiply2.on('click',()=>{
    number *= 2
    localStorage.setItem('n', number)
    $number.text(number)
})
$divide2.on('click',()=>{
    number /= 2
    localStorage.setItem('n', number)
    $number.text(number)
})