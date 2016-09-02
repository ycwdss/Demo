/**
 * Created by wangzan on 2015/12/7.
 */
/**
 * Created by an www.sucaijiayuan.com
 */
window.onload = function () {
    //����class
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
            var ret = [];
            var els = document.getElementsByTagName('*');
            for (var i = 0, len = els.length; i < len; i++) {

                if (els[i].className.indexOf(cls + ' ') >=0 || els[i].className.indexOf(' ' + cls + ' ') >=0 || els[i].className.indexOf(' ' + cls) >=0) {
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }

    var table = document.getElementById('cartTable'); // ���ﳵ���
    var selectInputs = document.getElementsByClassName('check'); // ���й�ѡ��
    var checkAllInputs = document.getElementsByClassName('check-all') // ȫѡ��
    var tr = table.children[1].rows; //��
    var selectedTotal = document.getElementById('selectedTotal'); //��ѡ��Ʒ��Ŀ����
    var priceTotal = document.getElementById('priceTotal'); //�ܼ�
    var deleteAll = document.getElementById('deleteAll'); // ɾ��ȫ����ť
    var selectedViewList = document.getElementById('selectedViewList'); //������ѡ��Ʒ�б�����
    var selected = document.getElementById('selected'); //��ѡ��Ʒ
    var foot = document.getElementById('foot');

    // �����������ܼ۸���ѡ����
    function getTotal() {
        var seleted = 0;
        var price = 0;
        var HTMLstr = '';
        for (var i = 0, len = tr.length; i < len; i++) {
            if (tr[i].getElementsByTagName('input')[0].checked) {
                tr[i].className = 'on';
                seleted += parseInt(tr[i].getElementsByTagName('input')[1].value);
                price += parseFloat(tr[i].cells[4].innerHTML);
                HTMLstr += '<div><img src="' + tr[i].getElementsByTagName('img')[0].src + '"><span class="del" index="' + i + '">ȡ��ѡ��</span></div>'
            }
            else {
                tr[i].className = '';
            }
        }
        selectedTotal.innerHTML = seleted;
        priceTotal.innerHTML = price.toFixed(2);
        selectedViewList.innerHTML = HTMLstr;

        if (seleted == 0) {
            foot.className = 'foot';
        }
    }
    // ���㵥�м۸�
    function getSubtotal(tr) {
        var cells = tr.cells;
        var price = cells[2]; //����
        var subtotal = cells[4]; //С��td
        var countInput = tr.getElementsByTagName('input')[1]; //��Ŀinput
        var span = tr.getElementsByTagName('span')[1]; //-��
        //д��HTML
        subtotal.innerHTML = (parseInt(countInput.value) * parseFloat(price.innerHTML)).toFixed(2);
        //�����Ŀֻ��һ������-��ȥ��
        if (countInput.value == 1) {
            span.innerHTML = '';
        }else{
            span.innerHTML = '-';
        }
    }

    // ���ѡ���
    for(var i = 0; i < selectInputs.length; i++ ){
        selectInputs[i].onclick = function () {
            if (this.className.indexOf('check-all') >= 0) { //�����ȫѡ��������е�ѡ���ѡ��
                for (var j = 0; j < selectInputs.length; j++) {
                    selectInputs[j].checked = this.checked;
                }
            }
            if (!this.checked) { //ֻҪ��һ��δ��ѡ����ȡ��ȫѡ���ѡ��״̬
                for (var i = 0; i < checkAllInputs.length; i++) {
                    checkAllInputs[i].checked = false;
                }
            }
            getTotal();//ѡ������ܼ�
        }
    }

    // ��ʾ��ѡ��Ʒ����
    selected.onclick = function () {
        if (selectedTotal.innerHTML != 0) {
            foot.className = (foot.className == 'foot' ? 'foot show' : 'foot');
        }
    }

    //��ѡ��Ʒ�����е�ȡ��ѡ��ť
    selectedViewList.onclick = function (e) {
        var e = e || window.event;
        var el = e.srcElement;
        if (el.className=='del') {
            var input =  tr[el.getAttribute('index')].getElementsByTagName('input')[0]
            input.checked = false;
            input.onclick();
        }
    }

    //Ϊÿ��Ԫ������¼�
    for (var i = 0; i < tr.length; i++) {
        //������¼��󶨵�trԪ��
        tr[i].onclick = function (e) {
            var e = e || window.event;
            var el = e.target || e.srcElement; //ͨ���¼������target���Ի�ȡ����Ԫ��
            var cls = el.className; //����Ԫ�ص�class
            var countInout = this.getElementsByTagName('input')[1]; // ��Ŀinput
            var value = parseInt(countInout.value); //��Ŀ
            //ͨ���жϴ���Ԫ�ص�classȷ���û�������ĸ�Ԫ��
            switch (cls) {
                case 'add': //����˼Ӻ�
                    countInout.value = value + 1;
                    getSubtotal(this);
                    break;
                case 'reduce': //����˼���
                    if (value > 1) {
                        countInout.value = value - 1;
                        getSubtotal(this);
                    }
                    break;
                case 'delete': //�����ɾ��
                    var conf = confirm('ȷ��ɾ������Ʒ��');
                    if (conf) {
                        this.parentNode.removeChild(this);
                    }
                    break;
            }
            getTotal();
        }
        // ����Ŀ������keyup�¼�
        tr[i].getElementsByTagName('input')[1].onkeyup = function () {
            var val = parseInt(this.value);
            if (isNaN(val) || val <= 0) {
                val = 1;
            }
            if (this.value != val) {
                this.value = val;
            }
            getSubtotal(this.parentNode.parentNode); //����С��
            getTotal(); //��������
        }
    }
    // ���ȫ��ɾ��
    deleteAll.onclick = function () {
        if (selectedTotal.innerHTML != 0) {
            var con = confirm('ȷ��ɾ����ѡ��Ʒ��'); //����ȷ�Ͽ�
            if (con) {
                for (var i = 0; i < tr.length; i++) {
                    // �����ѡ�У���ɾ����Ӧ����
                    if (tr[i].getElementsByTagName('input')[0].checked) {
                        tr[i].parentNode.removeChild(tr[i]); // ɾ����Ӧ�ڵ�
                        i--; //�����±�λ��
                    }
                }
            }
        } else {
            alert('��ѡ����Ʒ��');
        }
        getTotal(); //��������
    }
    console.log("\u767e\u5ea6\u641c\u7d22\u3010\u7d20\u6750\u5bb6\u56ed\u3011\u4e0b\u8f7d\u66f4\u591aJS\u7279\u6548\u4ee3\u7801");
    // Ĭ��ȫѡ
    checkAllInputs[0].checked = true;
    checkAllInputs[0].onclick();
}
