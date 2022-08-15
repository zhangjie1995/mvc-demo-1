import './app2.css'
import $ from 'jquery'

const $tableBar = $('.app2 .table-bar')
const $tableContentList = $('.app2 .table-content li')

$tableBar.on('click', 'li',(e)=>{
    $tableContentList.eq($(e.currentTarget).index())
        .addClass('active')
        .siblings().removeClass('active')
})

$('.app2 .table-bar li').eq(0).trigger('click')