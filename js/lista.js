function addRow(table, nome, email, cidade, sexo) {

	var row = table.insertRow(table.rows.length);

	var c_nome = row.insertCell(0);

	var c_email = row.insertCell(1);

	var c_cidade = row.insertCell(2);

	var c_sexo = row.insertCell(3);

	var c_button = row.insertCell(4);

	

	c_nome.innerHTML = nome;

	c_email.innerHTML = email;

	c_cidade.innerHTML = cidade;

	c_sexo.innerHTML = sexo;

	c_button.className = 'col-button';

	c_button.innerHTML = "<button class='btn btn-danger' onclick='deleteRow($(this))'>Excluir</button>";

}

function deleteRow(row){
	row.closest('tr').hide().delay(1000).fadeOut(2000);
	var tbody = row.closest('tbody');
	row.closest('tr').remove();
	
	if(tbody.children('tr').length == 0){
		$('#lista').hide().delay(1000).fadeOut(2000);
	}
}