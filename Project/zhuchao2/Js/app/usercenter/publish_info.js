/**
 * Created by wangzan on 2016/3/12.
 */
define(['jquery'], function () {
    $(document).ready(function () {

            //添加属性
        $('.attr_add a').click(function () {
            var addLength=$('.attr_wrap').find('.add_list').length;
            $(this).parent().before(" <div class='attr_list add_list clearfix'> <span class='attr_title add_title'><input type='text'>：</span> <input class='attr_info input_text' type='text'> <span class='attr_delete'>删除</span> <em class='error_tips'><i class='icon-error'></i>请填写产品品牌</em> </div>")
            if(addLength==2){
                $(this).parent().remove();
            }
            return false;
        });
        //删除操作
        $('.attr_delete').live('click',function () {
           $(this).parent().remove();
        });
    });
});