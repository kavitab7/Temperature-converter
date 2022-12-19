const calculate1 = ()=>{
    //for getting value
    const number = document.getElementById('temperature').value;

    //for selecting type
    const selected = document.getElementById('select');
    const temp = selected.options[selected.selectedIndex].value;

    var res1;
    //conversion function
    const celtofar = (cel) =>{
        let fer = Math.round((cel * 9/5) +32);
        return fer;
      }
        const fartocel = (fer) =>{
        let cel = Math.round((fer - 32)* 5/9);
        return cel;
      }

      //result
      if(temp == 'cel')
    {
      
        res1 = celtofar(number);
        document.getElementById('result').innerHTML = `=  ${res1}°F `;
    }
    if(temp == 'fer')
    {
        res1 = fartocel(number);
        document.getElementById('result').innerHTML = `= ${res1} °C `;
    }
}
const calculate2 = ()=>{
//for getting value
const number2 = document.getElementById('temperature2').value;

//for selecting type
const selected2 = document.getElementById('select2');
const temp2 = selected2.options[selected2.selectedIndex].value;

var res2;

 //conversion function
const celtokel = (cel2) =>{
    let kel = parseInt(cel2) + 273.15;
    return kel;
  }
  const keltocel = (kel) =>{
    let cel2 = Math.round(kel - 273.15);
    return cel2;
  }

  //result
  if(temp2 == 'cel2')
    {
        res2 = celtokel(number2);
        document.getElementById('result2').innerHTML = `= ${res2} K `;
    }
    if(temp2 == 'kel')
    {
        res2 = keltocel(number2);
        document.getElementById('result2').innerHTML = `= ${res2} °C `;
    }

}
const calculate3 = ()=>{
    //for getting value
    const number3 = document.getElementById('temperature3').value;
    
    //for selecting type
    const selected3 = document.getElementById('select3');
    const temp3 = selected3.options[selected3.selectedIndex].value;
    
    var res3;

     //conversion function
    const fertokel = (fer2) =>{
        let kel2 =  Math.round((fer2 - 32)* 5/9 + 273.15);
        return kel2;
      }
      const keltofer = (kel2) =>{
        let fer2 = Math.round((kel2 - 273.15)* 9/5 + 32);
        return fer2;
      }

      //result
      if(temp3 == 'fer2')
        {
            res3 = fertokel(number3);
            document.getElementById('result3').innerHTML = `= ${res3} K `;
        }
        if(temp3 == 'kel2')
        {
            res3 = keltofer(number3);
            document.getElementById('result3').innerHTML = `= ${res3} °F `;
        }
    
    }
    