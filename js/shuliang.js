var num_jia1 = document.getElementById("num-jia1");
		var num_jian1 = document.getElementById("num-jian1");
		var input_num1 = document.getElementById("input-num1");

		num_jia1.onclick = function() {

			input_num1.value = parseInt(input_num1.value) + 1;
		}

		num_jian1.onclick = function() {

			if(input_num1.value <= 0) {
				input_num1.value = 0;
			} else {

				input_num1.value = parseInt(input_num1.value) - 1;
			}

		}
		var num_jia2 = document.getElementById("num-jia2");
		var num_jian2 = document.getElementById("num-jian2");
		var input_num2 = document.getElementById("input-num2");

		num_jia2.onclick = function() {

			input_num2.value = parseInt(input_num2.value) + 1;
		}

		num_jian2.onclick = function() {

			if(input_num2.value <= 0) {
				input_num2.value = 0;
			} else {

				input_num2.value = parseInt(input_num2.value) - 1;
			}

		}
		var num_jia3 = document.getElementById("num-jia3");
		var num_jian3 = document.getElementById("num-jian3");
		var input_num3 = document.getElementById("input-num3");

		num_jia3.onclick = function() {

			input_num3.value = parseInt(input_num3.value) + 1;
		}

		num_jian3.onclick = function() {

			if(input_num3.value <= 0) {
				input_num3.value = 0;
			} else {

				input_num3.value = parseInt(input_num3.value) - 1;
			}

		}