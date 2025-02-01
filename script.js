
        let userInput = document.getElementById("date")
        userInput.Max = new Date().toISOString().split("T")[0];
        let result = document.getElementById("result")


        function calculateAge(){
            let birthDate =  new Date(userInput.value);

            let d1 = birthDate.getDate();
            let m1 = birthDate.getMonth() + 1;
            let y1 = birthDate.getFullYear();

            let today = new Date();

            let d2 = today.getDate();
             let m2 = today.getMonth() + 1;
             let y2 = today.getFullYear();

let d3 , m3 , y3;
y3 = y2 - y1;
if(m2 >= m1){
    
    m3 = m2 - m1;       
}else{
    y3--
    m3 = 12 + m2 - m1;
}

if(d2 >= d1){
    d3 = d2 -d1;

}else{
    m3--;
    d3 = getDaysInMonth(m2 - 1, y2) + d2 - d1;


}
if(m3 < 0){
    
    y3--
    m3 = 11;
     
 }
 result.innerHTML = `You are ${y3} years old, ${m3} months, and ${d3} days old.`;

        }

        function getDaysInMonth(month,year){
            return new Date(year,month,0).getDate();
        }
    