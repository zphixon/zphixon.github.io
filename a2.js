
function makeInputRow(num) {
    var tdLength = document.createElement('td');
    tdLength.id = 'length' + num;
    tdLength.innerHTML = 0;

    var input = document.createElement('input')
    input.type = 'text';
    input.id = 'input' + num;

    input.addEventListener('input', function() {
        tdLength.innerHTML = input.value.length;
    });

    var tdInput = document.createElement('td');
    tdInput.appendChild(input);

    var tr = document.createElement('tr');
    tr.id = 'row' + num;
    tr.appendChild(tdInput);
    tr.appendChild(tdLength);

    return tr;
}

function byId(id) {
    return document.getElementById(id);
}

var deletedRows = [];
var rows = 0;

byId('add').onclick = function() {
    if (deletedRows.length > 0) {
        byId('inputs').appendChild(deletedRows.pop());
    } else {
        byId('inputs').appendChild(makeInputRow(rows++));
    }
}

byId('remove').onclick = function() {
    if (byId('inputs').children.length > 1) {
        deletedRows.push(byId('inputs').removeChild(byId('inputs').lastChild));
    }
}

byId('sort').onclick = function() {
    var strings = []
    for (child of byId('inputs').children) {
        if (child.id.startsWith('row')) {
            strings.push(child.firstChild.firstChild.value);
        }
    }
    strings.sort();
    strings.reverse();

    for (child of byId('inputs').children) {
        if (child.id.startsWith('row')) {
            child.firstChild.firstChild.value = strings.pop();
            child.lastChild.innerHTML = child.firstChild.firstChild.value.length;
        }
    }
}

byId('squareButton').onclick = function() {
    var number = Number(byId('square').value);
    console.log('square ' + number);
    byId('squareResult').innerHTML = number * number;
}

byId('fixStartButton').onclick = function() {
    var s = byId('fixStart').value;
    if (s.length == 0)
        return;

    byId('fixStartResult').innerHTML = s[0] + [...s.substring(1)].map(c => c == s[0] ? '*' : c).join('');
}

byId('notBadButton').onclick = function() {
    byId('notBadResult').innerHTML = byId('notBad').value.replaceAll(/not.*bad/g, 'good');
}
