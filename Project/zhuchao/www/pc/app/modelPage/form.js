/**
 * Created by liu on 15-10-12.
 */
define(['jquery','fhlib/jq_form'],function(){
    $('input').click(function(){
        console.log($(this).val());
    });
})