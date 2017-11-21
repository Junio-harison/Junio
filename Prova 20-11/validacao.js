		function troca(){
			document.getElementById("trocaimagem1").src = "/home/junio/Faculdade/3 Semestre/web1/Prova Refeita/imagens/codigofonte2.jpg";
		}
		function troca2(){
			document.getElementById("trocaimagem2").src = "/home/junio/Faculdade/3 Semestre/web1/Prova Refeita/imagens/cadeado2.jpg";
		}

		function envioform(){
			if (document.form.tnome.value=="") {				
				document.getElementById("cnome").style.backgroundColor = "red"; 
				alert("PREENCHA SEU NOME");
				return false;
			}		
			if (document.form.trga.value=="") {
				alert("PREENCHA SEU RGA");
				document.getElementById("crga").style.background = "red"; 
				document.form.trga.focus();
				return false;
			}		
			if (document.form.tcurso.value=="") {
				alert("PREENCHA SEU CURSO");
				document.getElementById("ccurso").style.background = "red"; 
				document.form.tcurso.focus();
				return false;
			}
			
		}