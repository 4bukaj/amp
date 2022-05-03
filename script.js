function platesCount(){

    let input = document.getElementById('weight').value;

    if(input != '' && input >= 30){
        
        let weight = (input - 25)/2;
        let plates = [];
        let i = 0;
        
        while(weight>=1.25){
            if(weight >= 25){
                i = 25;
                plates.push(25);
            }
            else if(weight >= 20){
                i = 20;
                plates.push(20);
            }
            else if(weight >= 15){
                i = 15;
                plates.push(15);
            }
            else if(weight >= 10){
                i = 10;
                plates.push(10);
            }
            else if(weight >= 5){
                i = 5;
                plates.push(5);
            }
            else if(weight >= 2.5){
                i = 2.5;
                plates.push(2.5);
            }
            else if(weight >= 1.25){
                i = 1.25;
                plates.push(1.25);
        }
        
        weight -= i;
        
        }
        
        let div = document.getElementById('plates');
        div.innerHTML = '';

        for(let i = 0; i < plates.length; i++){
            let divPlate = document.createElement('div');
            divPlate.classList.add('divPlate');
            divPlate.style.backgroundColor = colors(plates[i]);
            div.appendChild(divPlate);
        }
    
    
    
    
    
    }
  }

  function colors(x){

    let color = '';

      if(x == 25) color = "red";
      else if(x == 20) color = "blue";
      else if(x == 15) color = "yellow";
      else if(x == 10) color = "green";
      else color = "black";

      return color;
  }